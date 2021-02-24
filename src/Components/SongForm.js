import React from "react";

const SongForm = (props) => {
  return (
    <form onSubmit={props.addSong}>
      <div style={{ width: "100%" }}>
        <input
          name="artist"
          placeholder="Artist"
          value={props.artist}
          onChange={props.handleOnChange}
        />
        <input
          name="song"
          placeholder="Song"
          value={props.song}
          onChange={props.handleOnChange}
        />
        <input
          name="genre"
          placeholder="Genre"
          value={props.genre}
          onChange={props.handleOnChange}
        />
        <input
          name="rating"
          placeholder="Rating"
          value={props.rating}
          onChange={props.handleOnChange}
        />
        <button>Add song to list</button>
      </div>
    </form>
  )
}
export default SongForm;