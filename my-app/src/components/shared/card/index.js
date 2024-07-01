
import React from "react";
class Card extends React.Components{
  render() {
    return (
      <div className="card_container">
        <h2>{this.props.title}</h2>
        <button onClick={this.decrement} disabled={this.state.count === 0}>-</button>
        <span>count = {this.state.count}</span>
        <button onClick={this.increment} disabled={this.state.count === 5}>+</button>
      </div>
    );
  }
}
export default Card;