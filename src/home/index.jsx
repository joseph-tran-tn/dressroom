import React, { Component } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import Tab from '../components/tab';
import List from '../components/list';
import Model from '../components/model';
// DATA
import buttonArr from '../data/buttonArray';
import data from '../data/Data';

class Home extends Component {
  constructor(props) {
    super(props);

    let buttonId = 'topclothes';
    let fisrtLstArr = data.filter(function(e) {
      return e.type === buttonId
    });

    this.state = {
      listArr: fisrtLstArr,
      buttonId: buttonId,
    }
  }

  changeButtonId = (newButtonId) => {
    let newListArr = data.filter(function(e) {
      return e.type === newButtonId
    });

    this.setState({
      listArr: newListArr,
      buttonId: newButtonId
    })
  }

  getImageUrl = (imageUrl, type) => {
    console.log(type)
    this.setState({[type]: imageUrl});
  }

  render() {
    return (
      <div>
        <div className="container-fluid">
          <Header />
          <hr className="style13" />
          <div className="row">
            <div className="col-lg-6 col-sm-6">
              <Tab changeButtonId={this.changeButtonId} buttonId={this.state.buttonId} buttonArr={buttonArr} />
              <List listArr={this.state.listArr} getImageUrl={this.getImageUrl} />
            </div>
            <div className="col-lg-6 col-sm-6">
              <Model state={this.state} />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Home;