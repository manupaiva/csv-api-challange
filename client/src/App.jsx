import { useState, useEffect } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/header/Header'
import Optional from './components/optional/Optional'
import DataTable from './components/data-table/DataTable'
import Filter from './components/filter/Filter'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function App () {
  const API_URL = 'http://localhost:3000/files/data/'
  const LIST_URL = 'http://localhost:3000/files/list/'

  const [dataTable, setDataTable] = useState([])
  const [dataList, setDataList] = useState([])

  const fetchData = async (url) => {
    try {
      const response = await fetch(url)
      const data = await response.json()
      if (url === API_URL) setDataTable(data)
      if (url === LIST_URL) setDataList(data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchData(API_URL)
    fetchData(LIST_URL)
  }, [])

  return (
    <>
      <Container>
        <Row>
          <Header title='React Test App' />
        </Row><br />
        <Row>
          <DataTable dataTable={dataTable} />
        </Row>
        <Row>
          <Header title='PUNTOS OPCIONALES' />
        </Row><br />
        <Row>
          <Col>
            <Optional dataList={dataList} />
          </Col>
          <Col>
            <Filter />
          </Col>
        </Row>
        <br />
      </Container>
    </>
  )
}

export default App
