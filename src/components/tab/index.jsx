import React, { Component } from 'react';
import ButtonItem from './buttonItem';

class Tab extends Component {
  render() {
    let buttonItem = this.props.buttonArr.map((item, index) => {
      return <ButtonItem buttonId={this.props.buttonId} item={item} key={index} changeButtonId={this.props.changeButtonId} />
    })
    return (
      <div className="btn-pref btn-group btn-group-justified btn-group-lg" role="group">
        {buttonItem}
      </div>
    );
  }
}

export default Tab;