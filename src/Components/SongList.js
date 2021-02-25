import React from "react";

const SongList = (props) => {
  return props.songs.map((songs, index) => {
    const { artist, song, genre, rating } = songs
    return (
      <div>
        <table style={{ width: "100%" }}>
          <tbody>
            <tr key={index}>
              <td >{artist}</td>
              <td >{song}</td>
              <td >{genre}</td>
              <td >{rating}</td>
            </tr>
          </tbody>
        </table >
      </div >
    )
  })
}
export default SongList;

