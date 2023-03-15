import React, {useState} from "react";
import axios from "axios";
import './CreateSong.css';

const CreateSong = (props) => {

    const[title, setTitle] = useState('')
    const[artist, setArtist] = useState('')
    const[album, setAlbum] = useState('')
    const[genre, setGenre] = useState('')
    const[release_date, setReleaseDate] = useState('')

    async function createSong(newSong) {
        const response = await axios.post('http://127.0.0.1:8000/api/music/', newSong);
        if(response.status === 201){
            await props.getAllSongs()
        }
    }

    function handleSubmit(event) {
        event.preventDefault();
        let newEntry = {
            title: title,
            artist: artist,
            album: album,
            genre: genre,
            release_date: release_date
        };
        console.log(newEntry);
        createSong(newEntry)
        }

    return ( 
        
        <form onSubmit={handleSubmit} className='form-grid'>
            <h3>Add Song</h3>
        <div className='form-group'>
            <label>Title:</label>
            <input type='text' className='form-control' value={title} onChange={(event) => setTitle(event.target.value)}/>    
        </div>
        <div className='form-group'>
            <label>Artist:</label>
            <input type='text' className='form-control' value={artist} onChange={(event) => setArtist(event.target.value)}/>

        </div>
        <div className='form-group'>
            <label>Album:</label>
            <input type='text' className='form-control' value={album} onChange={(event) => setAlbum(event.target.value)}/>

        </div>
        <div className='form-group'>
            <label>Genre:</label>
            <input type='text' className='form-control' value={genre} onChange={(event) => setGenre(event.target.value)}/>

        </div>
        <div className='form-group'>
            <label>Release Date:</label>
            <input type='date' className='form-control' value={release_date} onChange={(event) => setReleaseDate(event.target.value)}/>

        </div>
        <button type='submit' className='btn btn-primary' style={{'margin-top': '1em'}}>Add</button>
    </form>
     );
}
 
export default CreateSong;