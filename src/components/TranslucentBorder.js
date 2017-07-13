import React, { Component } from 'react';
import './TranslucentBorder.css';
import CSSPanel from './CSSPanel';


export default class TranslucentBorder extends Component {
  render() {
    return(
      <div>
        <div className="translucent-border_container">
          <div className="translucent-box">
            Can I haz semi-transparent borders? Pretty please?
          </div>
        </div>
        <CSSPanel cssString={this.props.cssString}/>
      </div>
    );
  }
}

export const translucentBoxCss ='\n\
div.translucent-border_container {\n\
  height: 20em;\n\
  padding: 5em;\n\
  background: url(\'http://csssecrets.io/images/stone-art.jpg\'); \n\
}\n\
div.translucent-box {\n\
  border: 10px solid hsla(0, 0%, 100%, 0.5);\n\
  background: white;\n\
  background-clip: padding-box;\n\
  \n\
  max-width: 20em;\n\
  padding: 2em;\n\
  margin: 2em auto 0;\n\
  font: 100%/1.5 sans-serif;\n\
}\n\
'
