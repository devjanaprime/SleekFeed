import { useEffect, useState } from 'react';
import PostData from '../../app/postData';
import Post from "../Post/Post";

let Body=( props )=>{

    const params = new URLSearchParams(window.location.pathname);
    const [ aspectRatio, setAspectRatio ] = useState( 1.0 );
    const [ posts, setPosts ] = useState( [] );
    useEffect(() => {
        function handleResize() {
            setAspectRatio( window.innerWidth / window.innerHeight);
        }
        // get articles
        setPosts( PostData );
        window.addEventListener('resize', handleResize);
    }, [] );


    return (
    <div className="App-body">
        { posts.map( 
            ( post, i ) =>( 
                        <Post post={ post } aspectRatio={ aspectRatio } index={ i } key ={ i }/> 
                ) 
            )
        };
    </div>
    );
}

export default Body;

