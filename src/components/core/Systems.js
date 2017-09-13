import React, { Component } from 'react';
import { Grid, Row, Col, Alert, Button, Modal } from 'react-bootstrap';
import AddDatabase from '../database/Add';

export default class Systems extends Component {
  constructor(props) {
    super(props);
    this.state = { modalInstance: null };
  }

  close() {
    this.setState({
      modalInstance: null
    });
  }

  showModal() {
    const modalInstance = () => {
      return (
        <Modal show={true}>
          <Modal.Header>
            Add Database
          </Modal.Header>
          <Modal.Body>
            <AddDatabase />
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={() => this.close()}>Close</Button>
          </Modal.Footer>
        </Modal>
      )
    };
    this.setState({
      modalInstance: modalInstance()
    });
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <Alert bsStyle="warning">
          No databases were found, add one below.
        </Alert>
        <Grid>
          <Row>
            <Col sm={6}>
              <Button bsStyle="primary" onClick={() => this.showModal()}>Add Database</Button>
            </Col>
          </Row>
        </Grid>
        {this.state.modalInstance}
      </div>
    )
  }
}