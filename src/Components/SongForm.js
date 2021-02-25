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
        <select value={props.rating} onChange={props.handleOnChange} name="rating">
          <option value="1">1 Star</option>
          <option value="2">2 Stars</option>
          <option value="3">3 Stars</option>
          <option value="4">4 Stars</option>
          <option value="5">5 Stars</option>
        </select>
        <button>Add song to list</button>
      </div>
    </form>
  )
}
export default SongForm;