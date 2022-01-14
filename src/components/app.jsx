import React from 'react';
import CarsIndex from '../containers/car_index';
import CarsNew from '../containers/cars_new';

const App = () => {
  return (
    <div className="app">
      <p>React + Redux starter</p>
      <CarsIndex />
      <CarsNew />
    </div>
  );
};

export default App;
