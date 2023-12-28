import React from "react";

export default function HangmanSVG() {
  return (
    <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="hangman">
        <g id="struct">
          <rect id="Rectangle 1" x="11" width="5" height="100" fill="#8D4925"/>
          <rect id="Rectangle 3" y="5" width="100" height="5" fill="#8D4925"/>
          <rect id="Rectangle 4" x="11" y="40.3553" width="50" height="5" transform="rotate(-45 11 40.3553)" fill="#8D4925"/>
        </g>
        <line id="string" x1="75.5" y1="10" x2="75.5" y2="25" stroke="#F0BE00" stroke-width="3"/>
        <line id="rightArm" x1="75.0357" y1="43.8823" x2="66.2131" y2="56.0133" stroke="black" stroke-width="3"/>
        <line id="rightLeg" x1="76.0357" y1="68.8823" x2="67.2131" y2="81.0133" stroke="black" stroke-width="3"/>
        <line id="leftArm" y1="-1.5" x2="15" y2="-1.5" transform="matrix(0.588172 0.808736 0.808736 -0.588172 77 43)" stroke="black" stroke-width="3"/>
        <line id="leftLeg" y1="-1.5" x2="15" y2="-1.5" transform="matrix(0.588172 0.808736 0.808736 -0.588172 76 68)" stroke="black" stroke-width="3"/>
        <line id="body" x1="75.5" y1="38" x2="75.5" y2="71" stroke="black" stroke-width="3"/>
        <circle id="head" cx="75" cy="32" r="6.5" stroke="black" stroke-width="3"/>
      </g>
    </svg>
  )
}