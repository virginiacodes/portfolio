import { useState } from "react";
import CarrouselItem from "./CarrouselItem";

export default function ProjectCarrousel() {
  const projectList = [
    {
      id: 1,
      title: "SWAPDAT",
      description:
        "bcehy cbyse cesye ycbseiy cebsyieu byeiayc bcehy cbyse cesye ycbseiy cebsyieu byeiayc",
      image: "/images/swapdat.png",
      video: "../videos/test3.mp4",
      github: "link",
    },
    {
      id: 2,
      title: "GOAT",
      description: "bcehy cbyse cesye ycbseiy cebsyieu byeiayc",
      image: "/images/swapdat.png",
      video: "../videos/test3.mp4",
      github: "link",
    },
    {
      id: 3,
      title: "IN PROGRESS",
      description:
        "bcehy cbyse cesye ycbseiy cebsyieu byeiayc bcehy cbyse cesye ycbseiy cebsyieu byeiayc",
      image: "/images/swapdat.png",
      video: "../videos/test3.mp4",
      github: "link",
    },
  ];

  return (
    <ul className="carrousel-container">
      {projectList.map((item) => (
        <CarrouselItem item={item} key={item.id} />
      ))}
    </ul>
  );
}
