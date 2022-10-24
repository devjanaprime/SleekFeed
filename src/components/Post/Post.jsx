import Article from '../Article/Article';
import MusicRelease from '../MusicRelease/MusicRelease';
import VideoRelease from '../VideoRelease/VideoRelease';

function Post( props ) {
    if( props.post.type === 'article' ) {
     return <Article post={ props.post } aspectRatio={ props.aspectRatio } index={ props.index }/> ;
    }
    else if( props.post.type==='video' ){
      return <VideoRelease post={ props.post }/> ;
    }
    else if( props.post.type==='music' ){
      return <MusicRelease post={ props.post }/> ;
    }
}

export default Post;