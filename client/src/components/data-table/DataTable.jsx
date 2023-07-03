import './data-table.css'
import Table from 'react-bootstrap/Table'
import PropTypes from 'prop-types'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const DataTable = ({ dataTable }) => {
  const rows = dataTable.map((curData, index) =>
    curData.lines.map((line, lineIndex) => {
      const { text, number, hex } = line
      return (
        <tr key={`row-${index}-${lineIndex}`}>
          <td><p>{curData.file}</p></td>
          <td><p>{text}</p></td>
          <td><p>{number}</p></td>
          <td><p>{hex}</p></td>
        </tr>
      )
    })
  )

  return (
    <>
      <Container>
        <Row>
          <Col>
            <Table striped bordered hover className='dataTable'>
              <thead>
                <tr>
                  <th>File Name</th>
                  <th>Text</th>
                  <th>Number</th>
                  <th>Hex</th>
                </tr>
              </thead>
              <tbody>{rows}</tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </>
  )
}
DataTable.propTypes = {
  dataTable: PropTypes.array.isRequired
}

export default DataTable
