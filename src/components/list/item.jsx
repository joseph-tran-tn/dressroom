import React, { Component } from 'react';

class Item extends Component {
  render() {
    const item = this.props.item;
    return (
      <div index={this.props.index} className="col-md-4 col-lg-4 col-ms-4 col-xs-6" id={item.id}>
        <h5 className="text-center">{item.name}</h5>
        <p><img onClick={() => this.props.getImageUrl(item.imgSrc_png, item.type)} className="card-img-top" src={item.imgSrc_jpg} alt={item.name} /></p>
      </div>
    );
  }
}

export default Item;