import React from "react";

const SongList = (props) => {
  return props.songs.map((songs) => {
    // the tablerow is set 
    const { id, artist, song, genre, rating } = songs
    return (
      <tr key={id}>
        <td >{artist}</td>
        <td >{song}</td>
        <td >{genre}</td>
        <td >{rating}</td>
        <td className="delete" onClick={() => props.deleteSong({ id })}>X</td>
      </tr>
    )
  })
}
export default SongList;

