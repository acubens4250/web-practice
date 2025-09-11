import logo from './logo.svg';
import PropType from 'prop-types';

function Logo(props) {
    return (
        <img 
        src={logo} 
        className="App-logo" 
        alt="logo" 
        style={{ width: props.size, height: props.size }} />
    )
}

Logo.defaultProps = {
    size: 200,
}
Logo.prototype = {
    size : PropType.number,
}
export default Logo;