import './optional.css'
import React from 'react'
import Table from 'react-bootstrap/Table'
import PropTypes from 'prop-types'

const Optional = ({ dataList }) => {
  return (
    <Table striped bordered hover>
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

  )
}

Optional.propTypes = {
  dataList: PropTypes.array.isRequired
}

export default Optional
