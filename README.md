# react-message-preview
A React Component - Browser centered Message box with blur background.

### On Large Screen
<div align="center">
  <img src="https://raw.githubusercontent.com/sachinlamba/react-message-preview/master/previewLargeScreen.PNG" />
</div>

### On Small Screen
<div align="center">
  <img src="https://raw.githubusercontent.com/sachinlamba/react-message-preview/master/previewSmallScreen.PNG" />
</div>

## Examples
1. Here is the first one to get you started:
```jsx
import React, { Component } from 'react';
import MessagePreviewer from 'react-message-preview';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      showMessagePreview: true,
      count: 1
    }
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.removePreviewFunction = this.removePreviewFunction.bind(this);
  }

  removePreviewFunction(){
    this.setState({
      showMessagePreview: false
    })
  }
  increment(){
    this.setState({
      count: this.state.count + 1
    })
  }
  decrement(){
    if(this.state.count != 0){
      this.setState({
        count: this.state.count - 1
      })
    }
  }

  render() {
    let self = this;
    return (
      <div className="App">
        {
          self.state.showMessagePreview &&
            <MessagePreviewer
              messageTitle={"Counter"}
              messageText={"Counter : " + self.state.count}
              resetText="Decrement"
              saveText="Increment"
              closePreview={this.removePreviewFunction}
              saveFunction={self.increment}
              resetFunction={self.decrement}
            />
        }
      </div>
    );
  }
}

export default App;
```
---
2. Second one for Advanced params(*Only render function re-write*)

Here we are overriding
* CSS of class "preview-div" styles
* Reset/Cancel button hidden

*You can override the props depending on table names given below for reference.*
```jsx
render() {
    let self = this;
    let messageDetails = [];
    if(self.state.count <= 0){
      messageDetails.push(<div>Counter stopped at zero.</div>);
    }
    messageDetails.push(<div>{"Counter : " + self.state.count}</div>);
    return (
      <div className="App">
        {
          this.state.showMessagePreview &&
            <MessagePreviewer
              messageStyle={{top: "15%", color: "green"}}
              messageTitle={"Counter"}
              messageText={messageDetails}
              resetText="Decrement"
              saveText="Increment"
              resetFlagHide={true}
              closePreview={this.removePreviewFunction}
              saveFunction={self.increment}
              resetFunction={self.decrement}
            />
        }
      </div>
    );
  }
```



## Paramters as Props

| PropNames     | Type                  |     Use      |  Default |
| ------------- |:--------------------: |:-------------:|:-------------:|
| backgroundStyle           | Object      |    css style object to update class="blur-background"                   | {}          |
| messageStyle              | Object      |    css style object to update class="preview-div"                       | {}          |
| titleStyle                | Object      |    css style object to update class="message-title"                     | {}          |
| removePreviewButtonStyle  | Object      |    css style object to update class="cross-button"                      | {}          |
| resetButtonStyle          | Object      |    css style object to update class="button-style reset-button"         | {}          |
| saveButtonStyle           | Object      |    css style object to update class="button-style save-button"          | {}          |
| resetFlagHide             | Boolean     |    Show(default)/Hide Cancel Button                                     | false       |
| closePreview              | Function    |    Functon passed from ur project to Close/Hide the preview             | -           |
| resetFunction             | Function    |    Functon passed from ur project for Cancel/Reset action from preview  | ()=>{}      |
| saveFunction              | Function    |    Functon passed from ur project to Save/Ok Action from preview        | ()=>{}      |
| messageTitle              | String      |    Title for the preview box.                                           | ""          |
| messageText               | String/Array|    Message content showing in center of preview box.                    | Pass your msg         here.      |
| resetText                 | String      |    Button Name on bottom left side.                                     | Cancel      |
| saveText                  | String      |    Button Name on bottom Right side.                                    | Ok          |

*All Props are optional except closePreview function(unless u want my preview to be always on ur screen)* :smirk:


# Help
Published [Guide](http://jasonwatmore.com/post/2018/04/14/react-npm-how-to-publish-a-react-component-to-npm) :heart_eyes:
