import React from 'react';
import { useState, useEffect } from "react";

import { Typography, Row, Col } from 'antd';

import Loader from './Loader';
import { db } from "../firebase_config";

const { Title } = Typography;

const Homepage = () => {

  const [requests, setRequests] = useState([]);
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    getRequests();
  }, []); // blank to run only on first launch

  useEffect(() => {
    getVehicles();
  }, []); // blank to run only on first launch
  
  function getRequests() {
    db.collection("requests").onSnapshot(function (querySnapshot) {
      setRequests(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          vehicle: doc.data().vehicle,
          description: doc.data().description,
          location: doc.data().location,
          status: doc.data().status
        }))
      );
    });
    
  }

  function getVehicles() {
    
    db.collection("vehicles").onSnapshot(function (querySnapshot) {
      setVehicles(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          title: doc.data().title,
          year: doc.data().year,
          model: doc.data().model,
          color: doc.data().color,
          maker: doc.data().maker,
        }))
      );
    });
    
  }

  function deleteVehicle(id) {
   
     db.collection("vehicles").doc(id).delete();
  
  }

  return (
    <>
    
      <Title level={2} className="heading">Your Requests</Title>
        <div style={{ maxWidth: "1050px", marginTop: "24px"}}>
            <Row gutter={[24, 24]} style={{ fontWeight: "bold" }}>
              <Col span={6} > Request Id </Col>
              <Col span={4}> Vehicle </Col>
              <Col span={4}> Description </Col>
              <Col span={6}> Location </Col>
              <Col span={4}> Status </Col>
            </Row>
          {requests.map((request) => (
          <Row gutter={[24, 24]}>
            <Col span={6} style={{overflow:'wrap'}}> {request.id} </Col>
            <Col span={4} style={{overflow:'wrap'}}> {request.vehicle} </Col>
            <Col span={4} style={{overflow:'wrap'}}> {request.description} </Col>
            <Col span={6}> {request.location} </Col>
            <Col span={4}> {request.status} </Col>
          </Row>
          ))}
        </div>
        <br/><br/>
        <Title level={2} className="heading">Your vehicles information</Title>
        <div style={{ maxWidth: "1050px", marginTop: "24px" }}>
            <Row gutter={[40, 40]} style={{ fontWeight: "bold" }}>
              <Col span={4}> Title </Col>
              <Col span={4}> Maker </Col>
              <Col span={4}> Model </Col>
              <Col span={4}> Color </Col>
              <Col span={4}> Year </Col>
            </Row>
            
          {
          vehicles.map((vehicle) => (
            
            <Row gutter={[40, 40]}> 
              <Col span={4}> {vehicle.title} </Col>
              <Col span={4}> {vehicle.maker} </Col>
              <Col span={4}> {vehicle.model} </Col>
              <Col span={4}> {vehicle.color} </Col>
              <Col span={4}> {vehicle.year} </Col>
              <Col span={4}> <button onClick={()=>deleteVehicle(vehicle.id)}>Delete</button> </Col>
            </Row>
          ) )
          }
        
        </div>
    </>
  ); 
};

export default Homepage;
