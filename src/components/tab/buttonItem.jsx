import React, { Component } from 'react';

class ButtonItem extends Component {
  render() {
    let {item, buttonId} = this.props;
    let btnActive = (item.type === buttonId) ? 'btn-primary' : 'btn-default';
    return (
      <div className="btn-group" role="group">
        <button type="button" id={item.type} className={`btn ${btnActive}`} onClick={() => this.props.changeButtonId(item.type)}>
          <div className="hidden-xs">{item.showName}</div>
        </button>
      </div>
    );
  }
}

export default ButtonItem;