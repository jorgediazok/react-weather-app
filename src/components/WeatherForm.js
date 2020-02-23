import React from 'react';

const WeatherForm = props => {
  return (
    <div className="card card-body">
      <form action="">
        <div className="form-group">
          <input
            type="text"
            name="city"
            placeholder="Your City Name"
            className="form-control"
            autofocus
          />
        </div>
        <div>
          <input
            type="text"
            name="country"
            placeholder="Your Country Name"
            className="form-control"
          />
        </div>
        <button className="btn btn-success btn-block">Get Weather!</button>
      </form>
    </div>
  );
};

export default WeatherForm;
