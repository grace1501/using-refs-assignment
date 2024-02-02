import { useState, useRef } from "react";

export default function VideoPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  function handleClick() {
    const nextIsPlaying = !isPlaying;
    setIsPlaying(nextIsPlaying);

    if (nextIsPlaying) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  }

  // function handleVideoPlay() {

  // } 
  
  // function handleVideoPause() {
  //   setIsPlaying(false);
  // }

  return (
    <>
      <button onClick={handleClick}>{isPlaying ? "Pause" : "Play"}</button>
      <video ref={videoRef} width="75%" muted={true} >
        <source src="stock.mp4" type="video/mp4" />
      </video>
      
    </>
  );
}
