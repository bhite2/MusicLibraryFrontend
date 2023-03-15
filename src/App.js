import React, {useState, useEffect} from "react";
import axios from "axios";
import './App.css';
import NavBar from "./Components/NavigationBar/NavigationBar";
import MusicTable from "./Components/MusicTable/MusicTable";
import CreateSong from "./Components/CreateSong/CreateSong";
import SearchBar from "./Components/SearchBar/SearchBar";

function App() {

  const [songs, setSongs] = useState([]);
  const [filter, setFilter] = useState('')

  useEffect(() => {
    getAllSongs();
  }, [])

  async function getAllSongs() {
    const response = await axios.get('http://127.0.0.1:8000/api/music/');
    console.log(response.data)
    setSongs(response.data);
  }

  // function handleFilter(event){
  //   event.PreventDefault()
  //   let searchResults = 
  //   setSearch(searchResults)

  // }

  return (
    <div class = 'body'>
      <div>
        <NavBar/>
      </div>
      <div>
        <SearchBar search = {filter} setSearch = {setFilter}/>
      </div>
      <div>
        <MusicTable songs = {songs} search = {filter} />
      </div>
      <div>
        <CreateSong getAllSongs = {getAllSongs}/>
      </div>


    </div>
  );
}

export default App;
