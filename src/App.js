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

  return (
    <><head>
           <div>
            <NavBar />
          </div>
    </head>
 
    <body>
        <div>
          <div className="search">
            <SearchBar search={filter} setSearch={setFilter} />
          </div>
          <div className="table">
            <MusicTable songs={songs} search={filter} />
          </div>
          <div className="table">
            <CreateSong getAllSongs={getAllSongs} />
          </div>


        </div>
      </body></>

  );
}

export default App;
