import React, { Component } from 'react';
import { Form, ControlLabel, FormGroup, FormControl, Col, Checkbox, Button } from 'react-bootstrap';

export default class AddDatabase extends Component {
  save(event) {
    event.preventDefault();

    // use axios to call BE to save input into a .json file
  }

  render() {
    return (
      <Form horizontal>
        <FormGroup controlId="formHorizontalDatabaseName">
          <Col componentClass={ControlLabel} sm={2}>
            Email
          </Col>
          <Col sm={10}>
            <FormControl type="input" placeholder="Name" />
          </Col>
        </FormGroup>

        <FormGroup controlId="formHorizontalDatabaseHost">
          <Col componentClass={ControlLabel} sm={2}>
            Password
          </Col>
          <Col sm={10}>
            <FormControl type="input" placeholder="Host" />
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