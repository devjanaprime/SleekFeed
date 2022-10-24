import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'

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
    <h4>Related: </h4>{props.post.links.map( ( link, i )=>( <li><a key={ i } href={ link.url }>{ link.text }</a></li> ) ) } 
    </div>
  );
}

export default VideoPost;