function Article( props ) {
  let alignment = 'Align-left';
  let imageClass = 'Article-image-wide-left';
  if( props.aspectRatio < 1.0 ){
    imageClass = 'Article-image-tall';
     alignment = 'Align-justify';
  }
  else if( props.index %2 !== 0 ){ 
    alignment = 'Align-right'; 
    imageClass = 'Article-image-wide-right';
  }
  return (
  <div className="App-article">
    <hr />
      <h1>{props.post.title }</h1>
      <div className={ alignment }>
        <img src={ props.post.image } className={ imageClass } alt={ props.post.title }></img>
        {props.post.text.map( ( line, i ) =>( <p key={ i }>{line}</p> ) )}
       <h4>Related: </h4>{props.post.links.map( ( link, i )=>( <li><a key={ i } href={ link.url }>{ link.text }</a></li> ) ) }
       <br clear="all" />
      </div>
  </div>
  );
}

export default Article;