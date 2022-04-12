import React, { useEffect, useState } from 'react';
import { Typography } from 'antd';

import Loader from './Loader';
import { db } from "../firebase_config";

const { Title } = Typography;

const Newrequest = ({ simplified }) => {
  const [vehicle, setVehicle] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');

  function addRequest(e) {
    e.preventDefault();

    db.collection("requests").add({
      status: "mechanic arriving",
      vehicle: vehicle,
      description: description,
      location: location
    });

    setVehicle("");
    setDescription("");
    setLocation("");
  }

  return (
    <>
      <Title level={2} className="heading">Add Requests</Title>
      <div className="create">
      <form>
        <label>Vehicle</label>
        <input 
          type="text" 
          required 
          value={vehicle}
          onChange={(e) => setVehicle(e.target.value)}
        />
        <label>Service description</label>
        <textarea
          required
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <label>Location</label>
        <textarea
          required
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        ></textarea>
        <button             
            type="submit"
            variant="contained"
            onClick={addRequest}>
              Create Request
        </button>
      </form>
      </div>
    </>
  );
};

export default Newrequest;
