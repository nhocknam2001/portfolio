import { useEffect, useRef } from "react";
import { init } from "ityped";
import "./intro.scss";

export default function Intro() {
  // Text typing animation using useEffect() + ityped
  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, {
      showCursor: false,
      backDelay: 1500,
      backSpeed: 60,
      showCursor: true,
      strings: ["Internship", "Front-end Developer"],
    });
  }, []);
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/me.jpg"></img>
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Tuan-Anh Tran</h1>
          <h3>
            S.Tech <span ref={textRef}></span>
          </h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" />
        </a>
      </div>
    </div>
  );
}
