import React from 'react';
import PropTypes from 'prop-types';
 
const propTypes = {
    details: PropTypes.object
}
 
const defaultProps = {
    details: {
        backgroundStyle: {
            position: "fixed",
            display: "block",
            background: "black",
            opacity: 0.5,
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 999
        },
        messageStyle: {
          position: "fixed",
          zIndex: 1000,
          background: "white",
          left: "40%",
          top: "45%",
          fontSize: "16px",
          padding: "12px 30px",
          border: "1px solid #d4d4d4",
          borderRadius: "10px"
        },
        crossButtonStyle: {
          float: "right",
          position: "absolute",
          top: "-5px",
          right: "8px",
          fontSize: "20px"
        },
        messageText: "Pass your text with props Name as messageText...",
        cancelButton: {
          margin: "auto",
          padding: "0px 10px",
          borderRadius: "20px",
          background: "lightcoral",
          color: "white"
        },
        okButton: {
          margin: "auto",
          padding:" 0px 10px",
          borderRadius: "20px",
          background: "lightblue",
          color: "white"
        }
    }
}

class MessagePreviewer extends React.Component {     
    render() {
        const details = this.props.details || {};
        return [
                <div style={details.backgroundStyle}></div>,
                <div style={details.messageStyle}>
                  <div style={details.crossButtonStyle}>&times;</div>
                  <div>{details.messageText}</div>
                  <div style={{display: "flex"}}>
                    <div style={details.cancelButton}>Cancel</div>
                    <div style={details.okButton}>Ok</div>
                  </div>
                </div>
            ];
    }
}
 
MessagePreviewer.propTypes = propTypes;
MessagePreviewer.defaultProps = defaultProps;
 
export default MessagePreviewer;
