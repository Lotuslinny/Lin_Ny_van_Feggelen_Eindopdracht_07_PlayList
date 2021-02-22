import React from "react";

const SongForm = (props) => {
  return (
    <div>
      <form onSubmit={props.addSong}>
        <table style={{ width: "100%" }}>
          <tbody>
            <tr className="song-header">
              <th className="song-row__item">
                <input
                  className="input"
                  type={props.text}
                  value={props.value}
                  onChange={props.handleOnChange}></input></th>
              <th className="song-row__item">
                <input
                  className="input"
                  type={props.text}
                  value={props.value}
                  onChange={props.handleOnChange}></input></th>
              <th className="song-row__item">
                <input
                  className="input"
                  type={props.text}
                  value={props.value}
                  onChange={props.handleOnChange}></input></th>
              <th className="song-row__item">
                <input
                  className="input"
                  type={props.text}
                  value={props.value}
                  onChange={props.handleOnChange}></input></th>
            </tr>
          </tbody>
        </table >
        <input className="input__submit"
          type="submit"
          value="Add Song">
        </input>
      </form>
    </div >
  )
}

export default SongForm;