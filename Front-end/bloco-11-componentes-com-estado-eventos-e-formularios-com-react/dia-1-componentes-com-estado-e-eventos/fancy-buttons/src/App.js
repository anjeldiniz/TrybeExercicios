import React from 'react';

  class App extends React.Component {
    constructor() {
      super();

      this.handleClickOne = this.handleClickOne.bind(this);
      this.handleClickTwo = this.handleClickTwo.bind(this);
      this.handleClickThree = this.handleClickThree.bind(this);

      this.state = {
        clickOne: 0,
        clickTwo: 0,
        clickThree: 0,
      };
    }

      handleClickOne() {
        this.setState((prevState) => ({
          clickOne: prevState.clickOne + 1,
        }));
      }

      handleClickTwo() {
        this.setState((prevState) => ({
          clickTwo: prevState.clickTwo + 1,
        }));
      }

      handleClickThree() {
        this.setState(({ clickThree }) => ({
          clickThree: clickThree + 1,
        }));
      }

      getColorButton(num) {
        return num % 2 === 0 ? 'green' : 'white';
      }

      render() {
        const { clickOne, clickTwo, clickThree } = this.state;
        return (
          <div>
            <button onClick={ this.handleClickOne } style={{ backgroundColor: this.getColorButton(clickOne) }}>Clique aqui1 | Count = {this.state.clickOne}</button>
            
            <button onClick={ this.handleClickTwo } style={{ backgroundColor: this.getColorButton(clickTwo) }}>Clique aqui2 | Count = {this.state.clickTwo}</button>
            
            <button onClick={ this.handleClickThree } style={{ backgroundColor: this.getColorButton(clickThree) }}>Clique aqui3 | Count = {this.state.clickThree}</button>
          </div>
        );
      }
    }

    export default App;
