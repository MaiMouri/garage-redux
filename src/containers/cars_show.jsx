// import { render } from 'node-sass';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Aside from '../components/aside';

class CarsShow extends Component {
  render() {
    const car = this.props.car;
    return (
      <Aside key="aside" garage={this.props.garage}>
        <Link to="/">Back to list</Link>
      </Aside>,
      <div className="car-container" key="car">
        <div className="car-card">
          <img className="car-picture" src="/assets/images/logo_square.svg" />
          <div className="car-details">
            <span>{car.brand} - {car.model}</span>
            <ul>
              <li><strong>Owner:</strong> {car.owner}</li>
            </ul>
            <span className="plate">{car.plate}</span>
          </div>
          <button className="delete" onClick={this.handleClick}>
            <i className="fa fa-trash-o" aria-hidden="true"></i>
            Delete
          </button>
        </div>
      </div>
    );
  }
}

export default connect()(CarsShow);
