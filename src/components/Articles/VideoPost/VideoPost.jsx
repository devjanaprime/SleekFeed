import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';
import PostLinks from '../../common/PostLinks/PostLinks';

function VideoPost( props ) {
  return (
  <div className="App-article">
    <hr />
    <h1>{ props.post.title }</h1>
      <LiteYouTubeEmbed 
        id={ props.post.youtube_id }
        title={ props.post.title }
    />
    {props.post.text.map( ( line, i ) =>( <p key={ i }>{line}</p> ) )}
    <PostLinks links={ props.post.links } />
    </div>
  );
}

export default VideoPost;