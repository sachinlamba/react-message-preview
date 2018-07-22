import React from 'react';
import PropTypes from 'prop-types';
require('./css/index.less');
import globalVariable from './constant/globalVariable.js';
const defaultProps = globalVariable;
const propTypes = {
        backgroundStyle: PropTypes.object,
        messageStyle: PropTypes.object,
        removePreviewButtonStyle: PropTypes.object,
        resetButton: PropTypes.object,
        saveButton: PropTypes.object,
        messageText: PropTypes.string,
        resetText: PropTypes.string,
        saveText: PropTypes.string,
        closePreview: PropTypes.func,
        resetFunction: PropTypes.func,
        saveFunction: PropTypes.func,
    };

class MessagePreviewer extends React.Component {     
    render() {
        const props = this.props || {};
        let titleDiv = [];
        if(props.messageTitle){
          titleDiv.push(<div style={props.titleStyle} className="message-title">{props.messageTitle}</div>);
          titleDiv.push(<div className="horizontal-line"></div>);
        }
        if(!props.resetFunction){
          props.resetFunction  = JSON.parse(JSON.stringify(props.closePreview));
        }
        return [
                <div style={props.backgroundStyle} className="blur-background" onClick={props.closePreview}></div>,
                <div style={props.messageStyle} className="preview-div">
                  <div title="Close" style={props.removePreviewButtonStyle} className="cross-button" onClick={props.closePreview}>&times;</div>
                  {titleDiv}
                  <div className="message-text">{props.messageText}</div>
                  <div className="horizontal-line"></div>
                  <div className="footer-buttons" >
                    {
                      !props.resetFlagHide &&
                      <div style={props.resetButtonStyle} className="button-style reset-button" onClick={props.resetFunction}>{props.resetText || "Cancel"}</div>
                    }
                    <div style={props.saveButtonStyle} className="button-style save-button" onClick={props.saveFunction}>{props.saveText || "Ok"}</div>
                  </div>
                </div>
            ];
    }
}
 
MessagePreviewer.propTypes = propTypes;
MessagePreviewer.defaultProps = defaultProps;
 
export default MessagePreviewer;
