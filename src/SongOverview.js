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
    // Copy van the state.
    this.arr = this.state.songs;
  }
  /* You cannot return false to prevent default
   behavior in React. You must call preventDefault explicitly. */

  addSong = (event) => {
    const { id, artist, song, genre, rating, songs } = this.state
    event.preventDefault()
    /* Math.max(find the highest id) +1 because you don't want 
    to have delete 2 and 5 from a list of 8
     ... and the new song with an id of 7 wich already exists. */
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
  /* The findIndex() method returns the index of the first element
  in the array that satisfies the provided testing function. 
  Otherwise, it returns -1, indicating that no element passed the test. */
  deleteSong = (id) => {
    const songList = this.state.songs;
    let index = songList.findIndex(function (o) {
      return o.id === id.id;
    })
    /* The splice("in this case":index,1 element,remove) method changes the contents of an array
     by removing or replacing existing elements and/or 
     adding new elements in place. */
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
    // if a<b => a,b   if a>b => b,a, anders a,b
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
    // this.setState () to schedule updates to the component local state
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
              <th onClick={this.sortBy}>artist</th>
              <th onClick={this.sortBy}>song</th>
              <th onClick={this.sortBy}>genre</th>
              <th onClick={this.sortBy}>rating</th>
              <th ></th>
            </tr>

            <SongList
              deleteSong={this.deleteSong}
              songs={this.arr}
            />
          </tbody>
        </table>
        <p>
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

/*
<select onChange={this.filterBy} name="genre">
            <option value="All">Show all</option>
            <option value="Pop">Pop</option>
            <option value="Hip-Hop">Hip-Hop</option>
            <option value="Nederlands">Nederlands</option>
          </select>*/










