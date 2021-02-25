import React from "react";

const SongList = (props) => {

  return props.songs.map((songs) => {
    const { id, artist, song, genre, rating } = songs
    return (
      <tr key={id}>
        <td >{artist}</td>
        <td >{song}</td>
        <td >{genre}</td>
        <td >{rating}</td>
        <td onClick={() => props.deleteSong({ id })}><img width="12px" height="12px" src='https://www.iconsdb.com/icons/preview/black/delete-xxl.png'></img></td>
      </tr>
    )
  })
}
export default SongList;

