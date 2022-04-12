import React, { useEffect, useState } from 'react';
import { Typography } from 'antd';

import Loader from './Loader';
import { db } from "../firebase_config";

const { Title } = Typography;

const Vehicle = ({ simplified }) => {
  const [title, setTitle] = useState('');
  const [maker, setMaker] = useState('');
  const [model, setModel] = useState('');
  const [year, setYear] = useState('');
  const [color, setColor] = useState('');

  function addVehicle(e) {
    e.preventDefault();

    db.collection("vehicles").add({
      title: title,
      maker: maker,
      model: model,
      year: year,
      color: color
    });

    setTitle("");
    setMaker("");
    setModel("");
    setYear("");
    setColor("");
  }

  return (
    <>
      <Title level={2} className="heading">Add Vehicle</Title>
      <div className="create">
      <form>
        <label>Title</label>
        <input 
          type="text" 
          required 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Maker</label>
        <input 
          type="text" 
          required 
          value={maker}
          onChange={(e) => setMaker(e.target.value)}
        />      
        <label>Model</label>
        <input 
          type="text" 
          required 
          value={model}
          onChange={(e) => setModel(e.target.value)}
        />    
        <label>Year</label>
        <input 
          type="text" 
          required 
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />       
        <label>Color</label>
        <input 
          type="text" 
          required 
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />          
        <button             
            type="submit"
            variant="contained"
            onClick={addVehicle}>
              Add Vehicle
        </button>
      </form>
      </div>
    </>
  );
};

export default Vehicle;
