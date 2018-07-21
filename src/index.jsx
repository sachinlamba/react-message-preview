import React from 'react';
import PropTypes from 'prop-types';
import './css/index.less';
import globalVariable from './constant/globalVariable.js';

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
 
const defaultProps = globalVariable;

class MessagePreviewer extends React.Component {     
    render() {
        const props = this.props || {};
        return [
                <div style={props.backgroundStyle} className="blur-background" onClick={props.removePreviewFunction}></div>,
                <div style={props.messageStyle} className="preview-div">
                  <div style={props.removePreviewButtonStyle} className="cross-button" onClick={props.removePreviewFunction}>&times;</div>
                  <div className="message-title">{props.messageTitle}</div>
                  <div className="horizontal-line"></div>
                  <div className="message-text">{props.messageText}</div>
                  <div className="horizontal-line"></div>
                  <div className="footer-buttons" >
                    <div style={props.resetButton} className="button-style reset-button" onClick={props.resetFunction}>{props.resetText}</div>
                    <div style={props.saveButton} className="button-style save-button" onClick={props.saveFunction}>{props.saveText}</div>
                  </div>
                </div>
            ];
    }
}
 
MessagePreviewer.propTypes = propTypes;
MessagePreviewer.defaultProps = defaultProps;
 
export default MessagePreviewer;
