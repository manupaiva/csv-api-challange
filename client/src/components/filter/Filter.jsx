import './filter.css';
import React from 'react';
import Table from 'react-bootstrap/Table';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useEffect, useState } from 'react';

const Filter = () => {
  const [file,setFile] =useState(3)
  const [responseData,setResponseData] = useState({file:'',lines:[]})
  let rows = []
  const getData = async () =>{
    if (file){
      try {
        const response = await fetch(`http://localhost:3000/files/data/${file}`)
        const data = await response.json()
        setResponseData(data)
      } catch (error) {
        console.error(error)
      } 
    }
  }

  return (
    <>
          <input placeholder='id de csv. Ej: 3' onChange={(event)=>{setFile(event.target.value)}}/>
          <button onClick={getData} >Filter</button>
          <br /><br />
          <Table striped bordered hover className='dataTable'>
          <thead>
            <tr>
              <th>File Name</th>
              <th>Text</th>
              <th>Number</th>
              <th>Hex</th>
            </tr>
          </thead>
          <tbody>
          {responseData.lines.map((line,index) => (
            <tr key={index} >
              <td>
                <p>{responseData?.file}</p>
              </td>
              <td>
                <p>{line?.text}</p>
              </td>
              <td>
                <p>{line?.number}</p>
              </td>
              <td>
                <p>{line?.hex}</p>
              </td>
            </tr>
          ))}
            </tbody>
        </Table>


    </>
  );
};



export default Filter;


   
   