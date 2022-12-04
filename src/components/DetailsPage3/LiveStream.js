import React from "react";
import YouTube from "react-youtube"; 
  
export default class YoutubeVideo 
extends React.Component {
  render() {
    const opts = {
      height: "390",
      width: "640",
      playerVars: {
        autoplay: 1,
      },
    };
  
    return (
      <div>
        <h3>SANTA CLAUS CUP 2021 - Youtube</h3>
        <YouTube videoId="F5TMS3d_erM" 
            opts={opts} onReady={this._onReady} />
      </div>
    );
  }
  
  _onReady(event) {
    event.target.pauseVideo();
  }
}