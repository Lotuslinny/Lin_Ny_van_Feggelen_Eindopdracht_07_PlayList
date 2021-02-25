import React, { Component } from "react";
import SongForm from "./Components/SongForm";
import SongList from "./Components/SongList";

class SongOverview extends Component {

  constructor(props) {
    super(props)
    this.state =
    {
      songs: [
        { id: 0, artist: 'Michael Jackson', song: 'Ben', genre: 'Pop', rating: '4' },
        { id: 1, artist: 'The Roots', song: 'Seed 2.0', genre: 'Hip Hop', rating: '3' },
        { id: 2, artist: 'Erykah Badu', song: 'Tyrone', genre: 'Soul', rating: '3' },
        { id: 3, artist: 'Dune', song: 'Sandstorm', genre: 'Dance', rating: '4' },
        { id: 4, artist: 'Bob Marley', song: 'One Love', genre: 'Reggae', rating: '3' },
        { id: 5, artist: 'Dr Dre', song: 'All about Dre', genre: 'Hip Hop', rating: '4' },
        { id: 6, artist: 'Jan Smit', song: 'Tuintje in mijn hart', genre: 'Nederlands', rating: '1' },
        { id: 7, artist: 'Maan', song: 'Jij bent de liefde', genre: 'Nederlands', rating: '4' }
      ],
    }
    this.addSong = this.addSong.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.deleteSong = this.deleteSong.bind(this);
    this.filterBy = this.filterBy.bind(this);
  }

  addSong = (event) => {
    const { id, artist, song, genre, rating, songs } = this.state
    event.preventDefault()
    const newId = this.state.songs.length;
    songs.push({ id: newId, artist, song, genre, rating })
    this.setState({
      id: id,
      artist: artist,
      song: song,
      genre: genre,
      rating: rating,
      songs: songs
    })
  }

  handleOnChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  deleteSong = (id) => {
    const songList = this.state.songs;
    let index = songList.findIndex(function (o) {
      return o.id === id.id;
    })
    if (index !== -1) songList.splice(index, 1);
    this.setState({
      songs: songList
    })
  }

  filterBy = (event) => {
    const allFiltered = this.state.songs.filter(song => song.genre == event.target.value)
    console.log(allFiltered);
    return (allFiltered)
  }

  sortBy = (event) => {
    const sortingBy = event.target.innerText.toLowerCase();
    const sortArray = this.state.songs;
    sortArray.sort((a, b) => {
      if (a[sortingBy] < b[sortingBy]) {
        return -1;
      }
      if (a[sortingBy] > b[sortingBy]) {
        return 1;
      }
      return 0;
    });
    this.setState({
      songs: sortArray
    })
    return (
      <table>{/*...*/}</table>
    )
  }

  render() {
    return (
      <div>
        <SongForm
          addSong={this.addSong}
          handleOnChange={this.handleOnChange}
        />
        <table style={{ width: "100%" }}>
          <tbody>
            <tr key="hello">
              <th onClick={this.sortBy}>Artist</th>
              <th onClick={this.sortBy}>Song</th>
              <th onClick={this.sortBy}>Genre</th>
              <th onClick={this.sortBy}>Rating</th>
              <th ></th>
            </tr>

            <SongList
              deleteSong={this.deleteSong}
              songs={this.state.songs}
            />
          </tbody>
        </table>
        <p>
          Filter by: <select onChange={this.filterBy} name="genre">
            <option value="Pop">Pop</option>
            <option value="Hip Hop">Hip Hop</option>
            <option value="Nederlands">Nederlands</option>
          </select>
        </p>
      </div >

    );
  }
}

export default SongOverview;