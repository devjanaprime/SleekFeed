import { useSelector, useDispatch } from 'react-redux';
import ToggleAudioPlayer from '../ToggleAudioPlayer/ToggleAudioPlayer';


let MusicRelease=( props )=>{

  const dispatch = useDispatch();
  const spotify = useSelector( ( state ) => state.preferences.audioPlayer );

  return (
  <div className="App-article">
    <hr />
      <h1>{ props.post.title }</h1>
      { spotify === 'Spotify'
        ?<div><iframe 
          src={ props.post.spotifyUrl }
          width="55%" 
          height="420"
          title="Spotify player"
        />
         </div>
        :<div className=''><iframe 
          src={ props.post.appleMusicUrl }
          width="55%" 
          height="420"
          title="Apple Music player"
        />
        </div>
        }    
        <p>Switch to <ToggleAudioPlayer /></p>
        {props.post.text.map( ( line, i ) =>( <p key={ i }>{line}</p> ) )}
        <h4>Related: </h4>{props.post.links.map( ( link, i )=>( <li><a key={ i } href={ link.url }>{ link.text }</a></li> ) ) }
       <br clear="all" />
   </div>
  );
}

export default MusicRelease;