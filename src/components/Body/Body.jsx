import { useEffect, useState } from 'react';
import PostData from '../../app/postData';
import Post from "../common/Post/Post";
import HomeButton from '../common/HomeButton/HomeButton';


let Body=( props )=>{
    // const location= useLocation();
    const params = new URLSearchParams(window.location.pathname);
    const [ aspectRatio, setAspectRatio ] = useState( 1.0 );
    const [ posts, setPosts ] = useState( [] );
    const [ singlePost, setSinglePost ] = useState( false );

    useEffect(() => {
        function handleResize() {
            setAspectRatio( window.innerWidth / window.innerHeight);
        }
        window.addEventListener('resize', handleResize);
        getArticles();
    }, [] );

    const getArticles = () =>{
        console.log( 'in getArticles:', params.toString() )
        const paramsString = params.toString();
        if( paramsString.includes( '%2Fpost%2F' ) ){
            const id = paramsString.split( '%2F' )[2].split( '=' )[0];
            console.log( id );
            setSinglePost( true );
            setPosts( [ PostData[ id ] ] );
        }
        else{
            setSinglePost( false );
            setPosts( PostData );
        }
    }


    return (
    <div className="App-body">
        { singlePost 
        ? <HomeButton />
        : <span></span>
        }
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

