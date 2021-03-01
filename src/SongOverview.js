import React, { Component } from "react";
import SongForm from "./Components/SongForm";
import SongList from "./Components/SongList";
// Comments can be read in the commit "Comments"

class SongOverview extends Component {
  constructor(props) {
    super(props)
    this.state =
    {
      songs: [
        { id: 0, artist: 'Michael Jackson', song: 'Ben', genre: 'Pop', rating: '4' },
        { id: 1, artist: 'The Roots', song: 'Seed 2.0', genre: 'Hip-Hop', rating: '5' },
        { id: 2, artist: 'Erykah Badu', song: 'Tyrone', genre: 'Pop', rating: '3' },
        { id: 3, artist: 'Dune', song: 'Sandstorm', genre: 'Dance', rating: '4' },
        { id: 4, artist: 'Bob Marley', song: 'One Love', genre: 'Pop', rating: '3' },
        { id: 5, artist: 'Dr Dre', song: 'All about Dre', genre: 'Hip-Hop', rating: '2' },
        { id: 6, artist: 'Jan Smit', song: 'Tuintje in mijn hart', genre: 'Nederlands', rating: '1' },
        { id: 7, artist: 'Maan', song: 'Jij bent de liefde', genre: 'Nederlands', rating: '4' }
      ],

      genreOptions: [
        { label: "Pop", value: "Pop" },
        { label: "Hip-Hop", value: "Hip-Hop" },
        { label: "Rock", value: "Rock" },
        { label: "Dance", value: "Dance" },
        { label: "Nederlands", value: "Nederlands" }
      ],

      ratingOptions: [
        { label: "1 Star", value: "1" },
        { label: "2 Stars", value: "2" },
        { label: "3 Stars", value: "3" },
        { label: "4 Stars", value: "4" },
        { label: "5 Stars", value: "5" },
      ]
    }
    this.addSong = this.addSong.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.deleteSong = this.deleteSong.bind(this);
    this.filterBy = this.filterBy.bind(this);
    this.arr = this.state.songs;
  }

  addSong = (event) => {
    const { id, artist, song, genre, rating, songs } = this.state
    event.preventDefault()
    const newId = Math.max(...this.state.songs.map(song => song.id)) + 1;
    songs.push({ id: newId, artist, song, genre, rating })
    this.setState({
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
    if (event.target.value == "All") {
      this.arr = this.state.songs;
    } else {
      this.arr = this.state.songs.filter(song => song.genre == event.target.value)
    }
    this.setState({})
  }

  sortBy = (event) => {
    const sortingBy = event.target.innerText.toLowerCase();
    const sortArray = this.arr;
    sortArray.sort((a, b) => {
      if (a[sortingBy].toLowerCase() < b[sortingBy].toLowerCase()) {
        return -1;
      }
      if (a[sortingBy].toLowerCase() > b[sortingBy].toLowerCase()) {
        return 1;
      }
      return 0;
    });
    this.arr = sortArray;
    this.setState({})
  }


  render() {
    return (
      <div>
        <SongForm
          addSong={this.addSong}
          handleOnChange={this.handleOnChange}
          genreOptions={this.state.genreOptions}
          ratingOptions={this.state.ratingOptions}
        />
        <table style={{ width: "100%" }}>
          <tbody>
            <tr>
              <th className="header" onClick={this.sortBy}>artist</th>
              <th className="header" onClick={this.sortBy}>song</th>
              <th className="header" onClick={this.sortBy}>genre</th>
              <th className="header" onClick={this.sortBy}>rating</th>
              <th className="header"></th>
            </tr>

            <SongList
              deleteSong={this.deleteSong}
              songs={this.arr}
            />
          </tbody>
        </table>
        <p className="filterby">
          Click on table header to Sort and/ or Filter by: <select onChange={this.filterBy} name="genre" >
            <option key="All" value="All">All genres</option>
            {this.state.genreOptions.map((option) => (
              <option key={option.value} value={option.value}>{option.label}</option>
            ))}
          </select>
        </p>
      </div >
    );
  }
}

export default SongOverview;











