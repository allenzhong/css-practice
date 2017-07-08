import React, { Component } from 'react';
import './Thumbnail.css';
import CSSPanel from './CSSPanel';

export default class Thumbnail extends Component {
  render() {
    return(
      <div>
        <section className="thumbnail-container">
          <div 
            className="thumbnail"
            data-title="Bacon"
            data-description="Bacon ipsum dolor amet filet mignon alcatra short ribs, sausage shoulder tail biltong rump chicken ground round ham hock porchetta tri-tip. Boudin bresaola andouille, leberkas pork ball tip turducken beef ribs">
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/123941/meat.jpg" alt="Meat" />
          </div> 
        </section>
        <CSSPanel cssString={this.props.cssString} />
      </div>
    );
  }
}

export const defaultThumbnailCss = '\n\
*, *:after, *:before {\n\
  box-sizing: border-box;\n\
}\n\
.thumbnail-container {\n\
  width: 300px;\n\
  margin: 0 auto;\n\
  height: 100%;\n\
  display: flex;\n\
  align-items: center;\n\
  justify-content: center;\n\
  font-family: Lato, sans-serif;\n\
  font-size: 1.8rem;\n\
  background: radial-gradient(ellipse at center, #f5f5f5 0%,#ddd 100%);\n\
  user-select: none;\n\
}\n\
.thumbnail {\n\
  -webkit-backface-visibility: hidden;\n\
  display: inline-block;\n\
  position: relative;\n\
  margin: 0 auto;\n\
  overflow: hidden;\n\
  background: #000;\n\
  box-shadow: 0 15px 50px rgba(0,0,0,.5);\n\
}\n\
.thumbnail img {\n\
  display: block;\n\
  max-width: 100%;\n\
  transition: opacity .2s ease-in-out;\n\
}\n\
.thumbnail:hover img {\n\
  opacity: .5;\n\
}\n\
.thumbnail::after,\n\
.thumbnail::before {\n\
  position: absolute;\n\
  z-index: 1;\n\
  width: 100%;\n\
  height: 50%;\n\
  transition: transform .4s ease-out;\n\
  color: #fff;\n\
}\n\
.thumbnail::after {\n\
  content: attr(data-title);\n\
  top: 0;\n\
  padding-top: 55px;\n\
  transform: translateY(-100%) scale(.8);\n\
  background: rgba(0,0,0,.4);\n\
  font-size: 3.5rem;\n\
  font-weight: 300;\n\
  font-family: Merriweather, serif;\n\
  text-align: center;\n\
}\n\
.thumbnail::before {\n\
  content: attr(data-description) "…";\n\
  top: 50%;\n\
  padding: 20px;\n\
  transform: translateY(100%) scale(.8);\n\
  background: rgba(107,38,68,.6);\n\
  -webkit-backdrop-filter: blur(10px);\n\
  backdrop-filter: blur(10px);\n\
  color: #f1f1f1;\n\
  font-size: 1rem;\n\
}\n\
.thumbnail:hover::after,\n\
.thumbnail:hover::before {\n\
  transform: translateY(0%) scale(1);\n\
}\n\
'
