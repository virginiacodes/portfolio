import React, { useState, useEffect } from "react";

export default function WizardNinja() {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div class={`content ${isVisible ? "animate" : ""}`} id="container">
      <div class="wizard">
        <h2 className="text-1">
          I AM A REACT <br />
          WIZARD
        </h2>
        <h2 className="text-2">
          I AM A REACT <br />
          WIZARD
        </h2>
      </div>
      <div class="ninja">
        <h2 className="text-1">
          AND A <br />
          CSS NINJA
        </h2>
        <h2 className="text-2">
          AND A <br />
          CSS NINJA
        </h2>
      </div>
    </div>
  );
}
