import { useSelector, useDispatch }from 'react-redux';
import { setAudio } from '../../features/preferencesSlice';

function ToggleAudioPlayer( props ) {
    const state = useSelector( state => state );
    const dispatch = useDispatch();
    return (
    <span>
        { state.preferences.audioPlayer === 'Spotify'
        ? <button onClick={ ()=> dispatch( setAudio( 'AppleMusic' ) ) }>Apple Music</button>
        :<button onClick={ ()=> dispatch( setAudio( 'Spotify' ) ) }>Spotify</button>
        }
    </span>
    );
}

export default ToggleAudioPlayer;