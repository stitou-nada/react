import React from "react";
class CounterButton extends React.PureComponent {
    constructor(props) {
      super(props);
      this.state = {count: 1};
    }
  
    render() {
      return (
        <button
          color={this.props.color}
          onClick={() => this.setState(state => ({count: state.count + 1}))}>
          Compteur : {this.state.count}
        </button>
      );
    }
  }
  export default CounterButton;