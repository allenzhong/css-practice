import React, {Component} from 'react';
import './CssButton.css';

export default class CssButton extends Component {
  render() {
    return (
      <button className={this.props.style}>Yes!</button>
    )
  }
}
