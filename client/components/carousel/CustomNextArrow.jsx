import React, { Component, PropTypes } from "react";

class CustomNextArrow extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div {...this.props} style={{display: 'block'}}></div>
    );
  }
}

export default CustomNextArrow;