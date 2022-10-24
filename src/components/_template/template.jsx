import { useSelector, useDispatch } from 'react-redux';


let _template = ( props )=>{
  const dispatch = useDispatch();
  const state = useSelector( ( state ) => state );

  return (
    <div className="App-article">
      <h1>_template</h1>
    </div>
  );
}

export default _template;