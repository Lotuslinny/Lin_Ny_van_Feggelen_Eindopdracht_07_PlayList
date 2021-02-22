import React, { Component } from "react";
import SongForm from "./Components/SongForm";

class SongOverview extends Component {

  constructor(props) {
    super(props)
    this.state =
    {
      songs: [],

    }
    this.addSong = this.addSong.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
  }
  addSong = () => {
    console.log("hoi")
  }
  handleOnChange = () => {
    console.log("oh nee")
  }

  // doe iets om de state aan te passen. 




  render() {
    return (
      <div>
        <SongForm
          addSong={this.addSong}
          handleOnChange={this.handleOnChange}
        />
        {/* <SongList songs={this.state.songs} /> */}
      </div >
    );
  }
}

export default SongOverview;