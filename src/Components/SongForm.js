import React from "react";

const SongForm = (props) => {
  return (
    //https://reactjs.org/docs/forms.html
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
        <select
          name="genre"
          onChange={props.handleOnChange}>
          {props.genreOptions.map((option) => (
            <option key={option.value} value={option.value}>{option.label}</option>
          ))}
        </select>
        <select
          name="rating"
          onChange={props.handleOnChange}>
          {props.ratingOptions.map((option) => (
            <option key={option.value} value={option.value}>{option.label}</option>
          ))}
        </select>
        <button>Add song to list</button>
      </div>
    </form>
  )
}
export default SongForm;