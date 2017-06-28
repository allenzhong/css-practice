import React, {Component} from 'react';
import './CssButton.css';
import CSSPanel from './CSSPanel';

export default class CssButton extends Component {
  render() {
    return (
      <div>
        <button className={this.props.style}>Yes!</button>
        <CSSPanel cssString={this.props.cssString} />      
      </div>
    )
  }
}
export const defaultCss = '.yes-button {\n\
  padding: 6px 16px;\n\
  border: 1px solid #446d88;\n\
  background: #58a linear-gradient(#77a0bb, #58a);\n\
  border-radius: 4px;\n\
  box-shadow: 0 1px 5px gray;\n\
  color: white;\n\
  text-shadow: 0 -1px 1px #335166;\n\
  font-size: 20px;\n\
  line-height: 1.5;\n\}';

export const cssWithEm = '.yes-button-em {\n\
  padding: .3em .8em;\n\
  border: 1px solid #446d88;\n\
  background: #58a linear-gradient(#77a0bb, #58a);\n\
  border-radius: .2em;\n\
  box-shadow: 0 .05em .25em gray;\n\
  color: white;\n\
  text-shadow: 0 -.05em .05em #335166;\n\
  font-size: 20px;\n\
  line-height: 1.5;\n\}'

export const cssWithHSLA = '.yes-button-hsla {\n\
  padding: .3em .8em;\n\
  border: 1px solid rgba(0,0,0,.1);\n\
  background: #58a linear-gradient(hsla(0,0%,100%,.2), transparent);\n\
  border-radius: .2em;\n\
  box-shadow: 0 .05em .25em rgba(0,0,0,.5);\n\
  color: white;\n\
  text-shadow: 0 -0.05em .05em rgba(0,0,0,.5);\n\
  font-size: 125%;\n\
  line-height: 1.5;\n\}'

export const cssWithHSLAGreen = '.yes-button-hsla {\n\
  padding: .3em .8em;\n\
  border: 1px solid rgba(0,0,0,.1);\n\
  background: #58a linear-gradient(hsla(0,0%,100%,.2), transparent);\n\
  border-radius: .2em;\n\
  box-shadow: 0 .05em .25em rgba(0,0,0,.5);\n\
  color: white;\n\
  text-shadow: 0 -0.05em .05em rgba(0,0,0,.5);\n\
  font-size: 125%;\n\
  line-height: 1.5;\n\
}\n\
\n\
button.ok {\n\
  background-color: #6b0;\n\}';

export const cssWithHSLARed = '.yes-button-hsla {\n\
  padding: .3em .8em;\n\
  border: 1px solid rgba(0,0,0,.1);\n\
  background: #58a linear-gradient(hsla(0,0%,100%,.2), transparent);\n\
  border-radius: .2em;\n\
  box-shadow: 0 .05em .25em rgba(0,0,0,.5);\n\
  color: white;\n\
  text-shadow: 0 -0.05em .05em rgba(0,0,0,.5);\n\
  font-size: 125%;\n\
  line-height: 1.5;\n\
}\n\
\n\
button.cancel {\n\
  background-color: #c00;\n\}'
