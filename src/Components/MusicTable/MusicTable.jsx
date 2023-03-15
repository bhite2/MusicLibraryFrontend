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
                .filter((song) => song.title.includes(props.search) ||
                song.artist.includes(props.search) ||
                song.album.includes(props.search) ||
                song.genre.includes(props.search) ||
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