import React, { Component } from 'react';

class Model extends Component {
  render() {
    let state = this.props.state;
    let backgroundStyle = (state.background) ? {backgroundImage: `url(${state.background})`} : {};
    let bikinitopStyle = (state.topclothes) ? {backgroundImage: `url(${state.topclothes})`} : {};
    let bikinibottomStyle = (state.botclothes) ? {backgroundImage: `url(${state.botclothes})`} : {};
    let shoes = (state.shoes) ? {backgroundImage: `url(${state.shoes})`} : {};
    let necklaces = (state.necklaces) ? {backgroundImage: `url(${state.necklaces})`} : {};
    let handbags = (state.handbags) ? {backgroundImage: `url(${state.handbags})`} : {};
    let hairstyle = (state.hairstyle) ? {backgroundImage: `url(${state.hairstyle})`} : {};
    return (
      <div className="contain" style={backgroundStyle}>
        <div className="body"></div>
        <div className="model"></div>
        <div className="bikinitop" style={bikinitopStyle}></div>
        <div className="bikinibottom" style={bikinibottomStyle}></div>
        <div className="feetleft"></div>
        <div className="feetright"></div>
        <div className="shoes" style={shoes}></div>
        <div className="necklaces" style={necklaces}></div>
        <div className="handbags" style={handbags}></div>
        <div className="hairstyle" style={hairstyle}></div>
      </div>
    );
  }
}

export default Model;