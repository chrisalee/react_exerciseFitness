import React from "react";
import Loader from "./Loader";

const ExerciseVideos = ({ exerciseVideos, name }) => {
  if (!exerciseVideos.length) return <Loader />;
  return (
    <div className="exercise-videos-container">
      <h2 className="exercise-videos-header">
        Watch <span>{name}</span> exercise videos
      </h2>
      <div className="exercise-videos">
        {exerciseVideos?.slice(0, 3)?.map((item, idx) => (
          <a
            key={idx}
            className="exercise-video-link"
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target="_blank"
            rel="noreferrer"
          >
            <img src={item.video.thumbnails[0].url} alt={item.video.title} />
            <div>
              <p className="exercise-video-link-title">{item.video.title}</p>
              <p className="exercise-video-link-channelName">
                {item.video.channelName}
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ExerciseVideos;
