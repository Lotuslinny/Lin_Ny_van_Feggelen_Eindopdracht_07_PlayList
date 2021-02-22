import React, { Component } from "react";
import SongForm from "./Components/SongForm";

class SongOverview extends Component {

  constructor() {
    super()
    this.state =
    {
      songs: []
    }
    this.addSong = this.addSong.bind(this);
  }
  addSong = () => {
    alert("hoi")


    // doe iets om de state aan te passen. 

    /*
    1. Kijk eens wat in de parameter song staat (console.log)
    2. Kun je daar meteen wat mee, of moet je iets doen om het leesbaar te maken?
    3. Zodra je toegang hebt tot de stukjes uit song (Song, Artist, Genre, Rating)
    kun je iets met deze stukjes doen. Individueel, of als groep. (console.log? ;) )
    4. Zou je de stukjes in een bepaalde volgorde in een nieuwe regel in een state 
    kunnen zetten?
    5. Kun je deze state dan ook weer uitlezen? (console.log)
    6. Zodra dat is gelukt, kijk eens of je ook nog regel kan 
    toevoegen (hint, nog een keer op de knop add song drukken)
    7. Kun je nu ook de toegevoegde regel zien in state?
    8. Love you, je kan het!

    p.s. Ben je hierboven eigenlijk niet al stiekem de song list aan het maken, 
    waar songs in staan? En is de volgende stap niet dat je waardes uit de state 
    moet weergeven in een list/table view? 
    De ene component voegt wat toe aan de state, de andere leest em uit. 
    */
  }

  render() {
    return (
      <div>
        <SongForm addSong={this.addSong}
         /* onSubmit={props.handleSubmit}  */ />
        <table style={{ width: "100%" }}>
          <tbody>
            <tr className="song-header">
              <th className="song-row__item" field="Hello">Song</th>
              <th className="song-row__item">Artist</th>
              <th className="song-row__item">Genre</th>
              <th className="song-row__item">Rating</th>
            </tr>
          </tbody>
        </table>
        {/* <SongList songs={this.state.songs} /> */}
      </div >
    );
  }
}

export default SongOverview;