require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';

let yeomanImage = require('../images/yeoman.png');
let Button = require('react-bootstrap').Button;

class AppComponent extends React.Component {

  buttonClicked(){
    console.log('clicked');
  }

  render() {
    return (
      <div className="index">
        <img src={yeomanImage} alt="Yeoman Generator" />
        <div className="notice">Please edit helo<code>src/components/Main.js</code> to get started!</div>
        <Button bsStyle="primary" onClick={this.buttonClicked}>Primary</Button>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
