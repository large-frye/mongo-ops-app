import React, { Component } from 'react';
import { Form, ControlLabel, FormGroup, FormControl, Col, Checkbox, Button } from 'react-bootstrap';
import DataConnector from '../../services/DataConnector';

export default class AddDatabase extends Component {
  constructor(props) {
    super(props);
    this.state = { name: '' };
  }

  save(event) {
    event.preventDefault();
    DataConnector.add(this.state);
  }

  handleInput(event) {
    const target = event.target;
    this.setState({
      [target.name]: target.value
    });
  }

  render() {
    return (
      <Form horizontal>
        <FormGroup controlId="formHorizontalDatabaseName">
          <Col componentClass={ControlLabel} sm={2}>
            Name
          </Col>
          <Col sm={10}>
            <FormControl type="input" placeholder="Name" name="name" onChange={(event) => this.handleInput(event)} />
          </Col>
        </FormGroup>

        <FormGroup controlId="formHorizontalDatabaseHost">
          <Col componentClass={ControlLabel} sm={2}>
            User
          </Col>
          <Col sm={10}>
            <FormControl type="input" placeholder="User" name="user" onChange={(event) => this.handleInput(event)} />
          </Col>
        </FormGroup>

        <FormGroup controlId="formHorizontalDatabaseHost">
          <Col sm={12}>
            <p className="text-muted">* Your password will be stored locally.</p>
          </Col>
          <Col componentClass={ControlLabel} sm={2}>
            Password
          </Col>
          <Col sm={10}>
            <FormControl type="input" placeholder="Password" name="passwd" onChange={(event) => this.handleInput(event)} />
          </Col>
        </FormGroup>

        <FormGroup controlId="formHorizontalDatabaseHost">
          <Col componentClass={ControlLabel} sm={2}>
            Host
          </Col>
          <Col sm={10}>
            <FormControl type="input" placeholder="Host" name="host" onChange={(event) => this.handleInput(event)} />
          </Col>
        </FormGroup>

        <FormGroup controlId="formHorizontalDatabasePort">
          <Col componentClass={ControlLabel} sm={2}>
            Port
          </Col>
          <Col sm={10}>
            <FormControl type="input" placeholder="Port" name="port" onChange={(event) => this.handleInput(event)} />
          </Col>
        </FormGroup>

        <FormGroup controlId="formHorizontalDatabaseURI">
          <Col componentClass={ControlLabel} sm={2}>
            URI
          </Col>
          <Col sm={10}>
            <FormControl type="input" placeholder="URI" name="uri" onChange={(event) => this.handleInput(event)}/>
          </Col>
        </FormGroup>

        <FormGroup>
          <Col smOffset={2} sm={10}>
            <Button type="submit" onClick={(event) => this.save(event)}>
              Add
            </Button>
          </Col>
        </FormGroup>
      </Form>
    )
  }
}