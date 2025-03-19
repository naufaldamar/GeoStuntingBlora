import React from "react";

const TopicItem = ({
  data,
  label,
  topicText,
  icon,
  layer,
  activeLayer,
  onChangeLayer,
}) => {
  return (
    <div>
      {data && (
        <div className="topic-item">
          <div
            className={`topic-icon ${layer === activeLayer ? "active" : ""}`}
            onClick={() => {
              onChangeLayer(layer);
            }}
          >
            <img src={icon} alt={"icon-" + { topicText }} />
          </div>
          <div className="topic-text">
            <span className="topic-text-bold">{topicText}</span>
            <br />
            {data === 0 ? "0" : data} {label}
          </div>
        </div>
      )}
    </div>
  );
};

export default TopicItem;
