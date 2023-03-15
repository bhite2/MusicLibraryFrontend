import './MusicTable.css'

const MusicTable = (props) => {
    return ( 
        <table>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Artist</th>
                    <th>Album</th>
                    <th>Genre</th>
                    <th>Release Date</th>
                </tr>
            </thead>
            <tbody>
                {props.songs
                .filter((song) => song.title.toLowerCase().includes(props.search.toLowerCase()) ||
                song.artist.toLowerCase().includes(props.search.toLowerCase()) ||
                song.album.toLowerCase().includes(props.search.toLowerCase()) ||
                song.genre.toLowerCase().includes(props.search.toLowerCase()) ||
                song.release_date.includes(props.search))
                .map((song) => {
                    return (
                        <tr>
                            <td>{song.title}</td>
                            <td>{song.artist}</td>
                            <td>{song.album}</td>
                            <td>{song.genre}</td>
                            <td>{song.release_date}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
     );
}
 
export default MusicTable;