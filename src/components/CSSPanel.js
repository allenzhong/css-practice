import React, { Component } from 'react';
import Highlight from 'react-highlight';
import CSSFile from './CSSPanel.css';
import '../../node_modules/highlight.js/styles/ocean.css';

export default class CSSPanel extends Component {
  render() {
    return(
      <div>
        <Highlight className='css'>
          {this.props.cssString}
        </Highlight>
      </div> 
    )
  }
}
