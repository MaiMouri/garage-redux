import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import Aside from '../components/aside';

import { addCar } from '../actions';

class CarsNew extends Component {
  onSubmit = (values) => {
    this.props.addCar(this.props.garage, values, () => {
      this.props.history.push('/');
    });
  }
  render() {
    return (
      <Aside key="aside" garage={this.props.garage}>
      <Link to="/">Back to list</Link>
      </Aside>,
      <div key="add" className="form-container" style={{ backgroundImage: "url('/assets/images/form.jpg')" }}>
        <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
          <div className="form-group">
            <label htmlFor="brand">Brand</label>
            <Field id="brand" type="text" name="car-name" placeholder="car name" className="form-control" component="input"/>
          </div>
          <div className="form-group">
            <label htmlFor="model">Model</label>
            <Field id="model" type="text" name="car-model" placeholder="model" className="form-control" component="input"/>
          </div>
          <div className="form-group">
            <label htmlFor="owner">Owner</label>
            <Field id="owner" type="text" name="car-owner" placeholder="Owner" className="form-control" component="input"/>
          </div>
          <div className="form-group">
            <label htmlFor="plate">Plate</label>
            <Field id="plate" type="text" name="car-plate" placeholder="Plate" className="form-control" component="input"/>
          </div>
          <button type="submit">Add car</button>
        </form>
      </div >
    );
  }
}

function mapStateToProps(state) {
  return {
    grage: state.grage
  };
}

export default reduxForm({
  form: 'newCarForm' // a unique identifier
})(
  connect(mapStateToProps, { addCar })(CarsNew)
);
