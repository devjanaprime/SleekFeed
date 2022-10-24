import { useSelector, useDispatch }from 'react-redux';

function Header( props ) {
    const state = useSelector( state => state );
    const dispatch = useDispatch();
    return (
    <div className="App-header">
        <h1 className="Headline">Header</h1>
        <h2>tag line</h2>
    </div>
    );
}

export default Header;