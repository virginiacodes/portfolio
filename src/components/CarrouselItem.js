import { useRef } from "react";
import { useState } from "react";

export default function CarrouselItem({ item }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  function handleIsHoveredEnter() {
    setIsHovered(true);
  }
  function handleIsHoveredLeave() {
    setIsHovered(false);
    setIsVideoPlaying(false);
  }

  return (
    <li className="carrousel-item">
      <div className="project-title-container">
        <ProjectTitle item={item} />
        <GitHubLink item={item} />
      </div>
      {isHovered ? (
        <ProjectVideo
          item={item}
          onLeave={handleIsHoveredLeave}
          isHovered={isHovered}
          setIsHovered={setIsHovered}
          isVideoPlaying={isVideoPlaying}
          setIsVideoPlaying={setIsVideoPlaying}
        />
      ) : (
        <ProjectImage
          item={item}
          onEnter={handleIsHoveredEnter}
          isHovered={isHovered}
        />
      )}
      <ProjectDescription item={item} />
    </li>
  );
}

function ProjectTitle({ item }) {
  return <div className="project-title">{item.title}</div>;
}

function GitHubLink({ item }) {
  return (
    <a href={item.github} className="github-project-link">
      <i class="fa-brands fa-github fa-2xl git-project"></i>
    </a>
  );
}

function ProjectImage({ item, onEnter }) {
  return (
    <img
      className="project-image"
      src={item.image}
      alt={item}
      onMouseEnter={onEnter}
    ></img>
  );
}

function ProjectVideo({ item, onLeave, isVideoPlaying, setIsVideoPlaying }) {
  const videoRef = useRef(null);

  function handlePlayVideo(e) {
    e.preventDefault();
    videoRef.current.play();
    setIsVideoPlaying(true);
  }

  return (
    <div className="video-container" onMouseLeave={onLeave}>
      <video className="project-video" ref={videoRef} preload="auto" loop>
        <source src={item.video} type="video/mp4" />
      </video>
      <div className={isVideoPlaying ? "hide-play-button" : "icon-container"}>
        <i class="fa-solid fa-circle-play fa-2xl" onClick={handlePlayVideo}></i>
      </div>
    </div>
  );
}

function ProjectDescription({ item, isHovered }) {
  return (
    <div
      className={
        isHovered ? "project-description hovered" : "project-description"
      }
    >
      {item.description}
    </div>
  );
}
