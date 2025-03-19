import React from "react";

const TopicItem = ({
  data,
  label,
  topicText,
}) => {
  return (
    <div>
      {data && (
        <div className="topic-item">
          <div className="topic-text">
            {topicText}
            <br />
            <strong>
              {data === 0 ? "0" : data} {label}
            </strong>
          </div>
        </div>
      )}
    </div>
  );
};

export default TopicItem;
