let PostLinks = ( props )=>{
  return (
    <div>
        <h4>Related:</h4>
        <ul>
            { props.links.map( ( link, i ) =><li key={ i }><a key={ i } href={ link.url}>{ link.text }</a></li>  )}
        </ul>
    </div>
  );
}

export default PostLinks;