import React, { useEffect, useState } from 'react';
import { Typography, Upload } from 'antd';

import Loader from './Loader';
import { db, storage } from "../firebase_config";

const { Title } = Typography;

const Newrequest = ({ simplified }) => {
  const [vehicle, setVehicle] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [image, setimage] = useState(null);
  
  function addRequest(e) {
    console.log(image)
    e.preventDefault();
    const uploadimage=storage.ref("images")
    .child(image.name)
    .put(image);
    uploadimage.on("state_changed",(snapshot)=>{
      let progress=((snapshot.bytesTansferred/snapshot.totalBytes)*100);
      console.log(progress);
     },(err)=>{console.log(err),
      ()=>storage.ref("images")
    .child(image.name)
    .getDownloadURL()
    .then((imageurl)=>{
    db.collection("requests").add({
      
      image:imageurl
    });
  
  });
});
db.collection("requests").add({
  status: "mechanic arriving",
  vehicle: vehicle,
  description: description,
  location: location,
  imagename:image.name
  
});

    setVehicle("");
    setDescription("");
    setLocation("");
    setimage(null);
  }
function handleimage(e){
  e.preventDefault();
  let pickedfile;
 pickedfile=e.target.file[0];
 setimage(pickedfile);

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
        <input type="file"         
        onChange={(e) => setimage(e.target.files[0])}></input>
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
