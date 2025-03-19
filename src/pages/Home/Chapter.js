import React from "react";

const Chapter = ({ chapter }) => {
  return (
    <div id={chapter.id} className={`step ${chapter.hidden ? "hidden" : ""}`}>
      <div className={chapter.alignment}>
        {chapter.title && <h3>{chapter.title}</h3>}
        {chapter.image && <img src={chapter.image} alt={chapter.title} />}
        {chapter.description && (
          <p dangerouslySetInnerHTML={{ __html: chapter.description }} />
        )}
      </div>
    </div>
  );
};

export default Chapter;
