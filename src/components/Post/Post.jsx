import Image from '../Articles/ImagePost/ImagePost';
import Music from '../Articles/MusicPost/MusicPost';
import Video from '../Articles/VideoPost/VideoPost';

function Post( props ) {
    if( props.post.type === 'image' ) {
     return <Image post={ props.post } aspectRatio={ props.aspectRatio } index={ props.index }/> ;
    }
    else if( props.post.type==='video' ){
      return <Video post={ props.post }/> ;
    }
    else if( props.post.type==='music' ){
      return <Music post={ props.post }/> ;
    }
}

export default Post;