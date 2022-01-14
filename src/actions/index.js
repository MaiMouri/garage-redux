import cars from '../cars';

export const FETCH_CARS = 'FETCH_CARS';
export const ADD_CAR = 'ADD_CAR';

export function fetchCars() {
  const url = 'https://wagon-garage-api.herokuapp.com/my-awesome-garage/cars';
  const promise = fetch(url).then(r => r.json());

  return {
    type: FETCH_CARS,
    // payload: promise
    payload: cars
  };
}

export function addCar(garage, car, callback) {
  const url = `https://wagon-garage-api.herokuapp.com/${garage}/cars`;
  const request = fetch(url, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringfy(car)
  }).then(response => response.json())
    .then(callback);

  return {
    type: ADD_CAR,
    payload: request
  };
}
