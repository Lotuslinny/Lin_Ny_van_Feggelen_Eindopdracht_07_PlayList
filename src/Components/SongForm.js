import React from "react";

const SongForm = (props) => {
  return (
    <div>
      <form /* onSubmit={props.handleSubmit */>
        <button onClick={props.addSong}>Add Song</button>
      </form>
    </div >
  )
}

export default SongForm;