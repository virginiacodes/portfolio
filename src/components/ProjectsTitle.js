import React, { useEffect } from "react";
import anime from "animejs";

export default function Projects() {
  useEffect(() => {
    // Mimic document.querySelector using useRef hook
    const textWrapper = document.querySelector(".title-project");
    textWrapper.innerHTML = textWrapper.textContent.replace(
      /\S/g,
      "<span class='letter'>$&</span>"
    );

    // Animation using anime.js
    anime.timeline({ loop: false }).add({
      targets: ".title-project .letter",
      translateY: [100, 0],
      translateZ: 0,
      opacity: [0, 1],
      easing: "easeOutExpo",
      duration: 1400,
      delay: (el, i) => 300 + 30 * i,
    });

    // Clean up function to ensure the animation stops when the component unmounts
    return () => {
      anime.remove(".title-project .letter"); // Remove anime.js animation
    };
  }, []); // Empty dependency array ensures the effect runs only once after initial render

  return (
    <div className="title-project section-title">
      <div>LATEST PROJECTS</div>
    </div>
  );
}
