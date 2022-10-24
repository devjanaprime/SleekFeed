import { useSelector, useDispatch }from 'react-redux';

function Header( props ) {
    const state = useSelector( state => state );
    const dispatch = useDispatch();
    return (
    <div className="App-header">
        <h1 className="Headline">Sleek Feed</h1>
        <h2>chillin'</h2>
    </div>
    );
}

export default Header;