import React, { Component } from 'react';
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
    return [
      <Aside key="aside" garage={this.props.garage}>
        <Link to="/">Back to list</Link>
      </Aside>,
      <div key="add" className="form-container" style={{ backgroundImage: "url('/assets/images/form.jpg')" }}>
        <div className="overlay"></div>
        <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
          <div className="form-group">
            <label htmlFor="InputBrand">Brand</label>
            <Field type="text" name="brand" placeholder="car name" className="form-control" component="input" />
          </div>
          <div className="form-group">
            <label htmlFor="InputModel">Model</label>
            <Field type="text" name="model" placeholder="model" className="form-control" component="input" />
          </div>
          <div className="form-group">
            <label htmlFor="InputOwner">Owner</label>
            <Field type="text" name="owner" placeholder="Owner" className="form-control" component="input" />
          </div>
          <div className="form-group">
            <label htmlFor="InputPlate">Plate</label>
            <Field type="text" name="plate" placeholder="Plate" className="form-control" component="input" />
          </div>
          <button type="submit">Add car</button>
        </form>
      </div >
    ];
  }
}

function mapStateToProps(state) {
  return {
    garage: state.garage
  };
}


export default reduxForm({
  form: 'newCarForm' // a unique identifier
})(
  connect(mapStateToProps, { addCar })(CarsNew)
);
