import React from 'react';
import { useState, useEffect } from "react";

import { Typography, Row, Col } from 'antd';

import Loader from './Loader';
import { db, storage} from "../firebase_config";


// Create a reference to the file we want to download

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
          status: doc.data().status,
          contact:doc.data().contact,
          imageurl:doc.data().imageurl
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
          maker: doc.data().maker
         
        }))
      );
    });
    
  }

  function deleteVehicle(id) {
   
     db.collection("vehicles").doc(id).delete();
  
  }
function getimage(imageurl){
  
     return(
      
      <img src={imageurl} alt="requestimage" width="100" height="100"></img> 
     )
  

}

  return (
    <>
    
      <Title level={2} style={{textDecoration :"underline",margin:"0 0 0 15em",color:"white", opacity:"0.8"}}>YOUR REQUESTS</Title>
        <div style={{ maxWidth: "1050px", marginTop: "30px"}}>
            <Row gutter={[40, 40]} style={{ fontWeight: "bold", color:'#1890ff'}}>
              <Col span={5} > REQUEST ID </Col>
              <Col span={3}> VEHICLE </Col>
              <Col span={3}> DESCRIPTION </Col>
              <Col span={3}> LOCATION </Col>
              <Col span={3}> STATUS </Col>
              <Col span={3}> CONTACT </Col>
              <Col span={3}> IMAGE </Col>
            </Row>
          {requests.map((request) => (
          <Row gutter={[40, 40]} style={{ padding:"10px 0 0 0"}}>
            <Col span={5} style={{overflow:'wrap'}}> {request.id} </Col>
            <Col span={3} style={{overflow:'wrap'}}> {request.vehicle} </Col>
            <Col span={3} style={{overflow:'hidden'}}> {request.description} </Col>
            <Col span={3} style={{overflow:'hidden'}}>  {request.location} </Col>
            <Col span={3} style={{overflow:'hidden'}} > {request.status} </Col>
            <Col span={3} style={{overflow:'hidden'}} > {request.contact} </Col>
            <Col span={3} style={{overflow:'hidden'}}> {getimage(request.imageurl)} </Col>
          </Row>
          ))}
        </div>
        <br/><br/>
        <Title level={2} style={{textDecoration :"underline",marginLeft:"12em",color:"WHITE", opacity:"0.8"}}>YOUR VEHICLES INFORMATION</Title>
        <div style={{ maxWidth: "1050px", marginTop: "30px" }}>
            <Row gutter={[40, 40]} style={{ fontWeight: "bold",color:"#1890ff"}}>
              <Col span={4}> TITLE </Col>
              <Col span={4}> MAKER </Col>
              <Col span={4}> MODEL </Col>
              <Col span={4}> COLOR </Col>
              <Col span={4}> YEAR </Col>
              <Col span={4}> ACTION </Col>
            </Row>
            
          {
          vehicles.map((vehicle) => (
            
            <Row gutter={[40, 40]}  style={{padding:"20px"}}> 
              <Col span={4}> {vehicle.title} </Col>
              <Col span={4}> {vehicle.maker} </Col>
              <Col span={4}> {vehicle.model} </Col>
              <Col span={4}> {vehicle.color} </Col>
              <Col span={4}> {vehicle.year} </Col>
              <Col span={4}> <button class="del" onClick={()=>deleteVehicle(vehicle.id)}>Delete</button> </Col>
            </Row>
          ))
          }
        
        </div>
    </>
  ); 
};

export default Homepage;
