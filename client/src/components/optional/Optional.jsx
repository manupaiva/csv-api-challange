import './optional.css';
import React from 'react';
import Table from 'react-bootstrap/Table';
import PropTypes from 'prop-types';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/esm/Container';

const Optional = ({ dataList }) => {

  return (
        <Table striped bordered hover >
          <thead>
            <tr>
              <th>Files disponible (PUNTO OPCIONAL)</th>
            </tr>
          </thead>
          <tbody>
            {dataList.map((file, index) => (
              <tr key={index}>
                <td>
                  <p>{file}</p>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
    
  );
};

Optional.propTypes = {
  dataList: PropTypes.array.isRequired,
};

export default Optional;


   
   