import React, { Component } from 'react';
import Item from './item';

class List extends Component {
  renderItem = () => {
    return this.props.listArr.map((item, index) => {
      return (
        <Item item={item} key={index} getImageUrl={this.props.getImageUrl} />
      )
    })
  }

  render() {
    return (
      <div className="well">
        <div className="tab-content">
          <div className="tab-pane active" id="tab1">
            <div className="row">{this.renderItem()}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default List;