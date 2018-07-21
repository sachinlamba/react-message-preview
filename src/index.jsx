import React from 'react';
import PropTypes from 'prop-types';
 
const propTypes = {
    backgroundStyle: PropTypes.object,
    messageStyle: PropTypes.object,
    removePreviewButtonStyle: PropTypes.object,
    resetButton: PropTypes.object,
    saveButton: PropTypes.object,
    messageText: PropTypes.string,
    resetText: PropTypes.string,
    saveText: PropTypes.string,
    removePreviewFunction: PropTypes.func,
    resetFunction: PropTypes.func,
    saveFunction: PropTypes.func,
}
 
const defaultProps = {
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
      minWidth: "20%",
      maxWidth: "90%",
      textAlign: "center",
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
    removePreviewButtonStyle: {
      cursor: "pointer",
      float: "right",
      position: "absolute",
      top: "-5px",
      right: "8px",
      fontSize: "20px"
    },
    resetButton: {
      cursor: "pointer",
      margin: "auto",
      padding: "0px 10px",
      borderRadius: "20px",
      background: "lightcoral",
      color: "white"
    },
    saveButton: {
      cursor: "pointer",
      margin: "auto",
      padding:" 0px 10px",
      borderRadius: "20px",
      background: "lightblue",
      color: "white"
    },
    messageText: "Pass your text with props Name as messageText...",
    resetText: "Cancel",
    saveText: "Ok",
    removePreviewFunction: () => {
      console.log("Write ur Preview remove function");
    },
    resetFunction: () => {
      console.log("Write ur Reset function");
    },
    saveFunction: () => {
      console.log("Write ur Save function");
    }
}

class MessagePreviewer extends React.Component {     
    render() {
        const props = this.props || {};
        return [
                <div style={props.backgroundStyle} onClick={props.removePreviewFunction}></div>,
                <div style={props.messageStyle}>
                  <div style={props.removePreviewButtonStyle} onClick={props.removePreviewFunction}>&times;</div>
                  <div>{props.messageText}</div>
                  <div style={{display: "flex"}}>
                    <div style={props.resetButton} onClick={props.resetFunction}>{props.resetText}</div>
                    <div style={props.saveButton} onClick={props.saveFunction}>{props.saveText}</div>
                  </div>
                </div>
            ];
    }
}
 
MessagePreviewer.propTypes = propTypes;
MessagePreviewer.defaultProps = defaultProps;
 
export default MessagePreviewer;
