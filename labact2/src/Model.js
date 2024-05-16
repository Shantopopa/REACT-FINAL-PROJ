import React, { Component } from "react";
export default class Model extends Component {
  render() {
    let modelStyle = {
      display: "block",
      backgroundColor: "rgba(0,0,0,0.8)",
    };
    return (
      <div className="modal show fade" style={modelStyle}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="btn-close"
                onClick={this.props.hide}
              ></button>
            </div>
            <div className="modal-body">
              <img src={this.props.img} className="img-fluid" />
              <h1>{this.props.text}</h1>
              <h3>{this.props.breed}</h3>
              <p>{this.props.desc}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
