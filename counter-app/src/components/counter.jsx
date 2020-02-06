import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.counter.value
    //tags: []
  };

  /*
  constructor() {
    super();
    this.handleIncrement = this.handleIncrement.bind(this);
  }
  */

  render() {
    //console.log(this.props);
    return (
      <div>
        {/*h4 tag in counters.jsx within each counter tags is a child */}
        {this.props.children}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          //passing function reference!
          onClick={() => this.handleIncrement()}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  // arrows function don't need constructor to bind
  handleIncrement = () => {
    this.setState({ value: this.state.value + 1 });
  };

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.state;
    return value === 0 ? "Zero" : value;
  }

  /*
  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags!</p>;
    return (
      <ul>
        {this.state.tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }*/
}

export default Counter;
