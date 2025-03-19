import React, { useRef, useEffect, useCallback } from "react";
import mapboxgl from "mapbox-gl";
import scrollama from "scrollama";
import config from "./Config.js";
import "mapbox-gl/dist/mapbox-gl.css";
import { debounce } from "lodash";
import NavigationBar from "../../components/NavigationBar.js";
import "./StoryTelling.css";

const MapboxStorytelling = () => {
  const mapContainer = useRef(null);
  const mapInsetContainer = useRef(null);
  const storyContainer = useRef(null);
  const mapRef = useRef(null);
  const markerRef = useRef(null);

  const setLayerOpacity = useCallback((layer) => {
    const paintProps = getLayerPaintType(layer.layer);
    if (paintProps) {
      paintProps.forEach((prop) => {
        const options = layer.duration ? { duration: layer.duration } : {};
        mapRef.current.setPaintProperty(
          layer.layer,
          prop,
          layer.opacity,
          options
        );
      });
    }
  }, []);

  const getLayerPaintType = (layerId) => {
    const layer = mapRef.current.getLayer(layerId);
    if (layer) {
      const layerType = layer.type;
      return {
        fill: ["fill-opacity"],
        line: ["line-opacity"],
        circle: ["circle-opacity", "circle-stroke-opacity"],
        symbol: ["icon-opacity", "text-opacity"],
        raster: ["raster-opacity"],
        "fill-extrusion": ["fill-extrusion-opacity"],
        heatmap: ["heatmap-opacity"],
      }[layerType];
    }
    return null;
  };

  useEffect(() => {
    mapboxgl.accessToken = config.accessToken;

    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: config.chapters[0].style,
      center: config.chapters[0].location.center,
      zoom: config.chapters[0].location.zoom,
      bearing: config.chapters[0].location.bearing,
      pitch: config.chapters[0].location.pitch,
      interactive: false,
    });

    mapRef.current = map;

    let insetMap;
    if (config.inset) {
      insetMap = new mapboxgl.Map({
        container: mapInsetContainer.current,
        style: "mapbox://styles/mapbox/dark-v10",
        center: config.chapters[0].location.center,
        zoom: 3,
        interactive: false,
        attributionControl: false,
      });
    }

    if (config.showMarkers) {
      const marker = new mapboxgl.Marker({ color: config.markerColor });
      marker.setLngLat(config.chapters[0].location.center).addTo(map);
      markerRef.current = marker;
    }

    const scroller = scrollama();

    scroller
      .setup({ step: ".step", offset: 0.5, progress: true })
      .onStepEnter((response) => {
        const chapter = config.chapters.find(
          (chap) => chap.id === response.element.id
        );
        response.element.classList.add("active");

        mapRef.current.setStyle(chapter.style);
        mapRef.current[chapter.mapAnimation || "flyTo"](chapter.location);

        if (config.inset) {
          if (chapter.location.zoom < 5) {
            insetMap.flyTo({ center: chapter.location.center, zoom: 0 });
          } else {
            insetMap.flyTo({ center: chapter.location.center, zoom: 3 });
          }
        }

        if (chapter.onChapterEnter.length > 0) {
          chapter.onChapterEnter.forEach(setLayerOpacity);
        }

        if (chapter.callback) {
          window[chapter.callback]();
        }

        if (chapter.rotateAnimation) {
          mapRef.current.once("moveend", () => {
            const rotateNumber = mapRef.current.getBearing();
            mapRef.current.rotateTo(rotateNumber + 180, {
              duration: 30000,
              easing: (t) => t,
            });
          });
        }
      })
      .onStepExit((response) => {
        const chapter = config.chapters.find(
          (chap) => chap.id === response.element.id
        );
        response.element.classList.remove("active");
        if (chapter.onChapterExit.length > 0) {
          chapter.onChapterExit.forEach(setLayerOpacity);
        }
      });

    const handleResize = debounce(() => {
      try {
        scroller.resize();
      } catch (e) {
        console.error("ResizeObserver error:", e);
      }
    }, 100);

    const observer = new ResizeObserver(() => {
      try {
        handleResize();
      } catch (e) {
        console.error("ResizeObserver error:", e);
      }
    });
    observer.observe(storyContainer.current);

    return () => {
      map.remove();
      if (insetMap) insetMap.remove();
      observer.disconnect();
    };
  }, [setLayerOpacity]);

  const renderStory = () => {
    return config.chapters.map((chapter, idx) => (
      <div
        id={chapter.id}
        className={`step ${idx === 0 ? "active" : ""} ${
          chapter.hidden ? "hidden" : ""
        } ${alignments[chapter.alignment] || "centered"}`}
        key={chapter.id}
      >
        <div className={config.theme}>
          {chapter.title && <h3>{chapter.title}</h3>}
          {chapter.image && <img src={chapter.image} alt={chapter.title} />}
          {chapter.description && <p>{chapter.description}</p>}
        </div>
      </div>
    ));
  };

  const alignments = {
    left: "lefty",
    center: "centered",
    right: "righty",
    full: "fully",
  };

  return (
    <div>
      <NavigationBar />
      <div id="map" ref={mapContainer} />
      {config.inset && <div id="mapInset" ref={mapInsetContainer} />}
      <div id="story" ref={storyContainer}>
        <div id="header" className={config.theme}>
          {config.title && <h1>{config.title}</h1>}
          {config.subtitle && <h2>{config.subtitle}</h2>}
        </div>
        <div id="features">{renderStory()}</div>
        <div id="footer" className={config.theme}>
          <p dangerouslySetInnerHTML={{ __html: config.footer }} />
        </div>
      </div>
    </div>
  );
};

export default MapboxStorytelling;
