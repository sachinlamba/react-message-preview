import React from 'react';
import PropTypes from 'prop-types';
 
const propTypes = {
    styles: PropTypes.object
}
 
const defaultProps = {
    styles: {
        backgroundDetails: {
            position: "fixed",
            display: "block",
            background: "black",
            opacity: 0.5,
            top: 0,
            left: 0,
            right: 0,
            bottom: 0
        }
    }
}

class MessagePreviewer extends React.Component {     
    render() {
        const styles = this.props.styles || {};
        return (
            <div>
                <div style={styles.backgroundDetails}></div>
                <label>Welcome to x`x`</label>
            </div>
        );
    }
}
 
MessagePreviewer.propTypes = propTypes;
MessagePreviewer.defaultProps = defaultProps;
 
export default MessagePreviewer;
