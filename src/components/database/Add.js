import React, { Component } from 'react';
import { Form, ControlLabel, FormGroup, FormControl, Col, Checkbox, Button } from 'react-bootstrap';

export default class AddDatabase extends Component {
  constructor(props) {
    super(props);
    this.state = { name: '' };
  }

  save(event) {
    event.preventDefault();
    // use axios to call BE to save input into a .json file
    console.log(this);
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
            <FormControl type="input" placeholder="Host" />
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
            <FormControl type="input" placeholder="Host" />
          </Col>
        </FormGroup>

        <FormGroup controlId="formHorizontalDatabaseHost">
          <Col componentClass={ControlLabel} sm={2}>
            Host
          </Col>
          <Col sm={10}>
            <FormControl type="input" placeholder="Host" />
          </Col>
        </FormGroup>

        <FormGroup controlId="formHorizontalDatabasePort">
          <Col componentClass={ControlLabel} sm={2}>
            Port
          </Col>
          <Col sm={10}>
            <FormControl type="input" placeholder="Port" />
          </Col>
        </FormGroup>

        <FormGroup controlId="formHorizontalDatabaseURI">
          <Col componentClass={ControlLabel} sm={2}>
            URI
          </Col>
          <Col sm={10}>
            <FormControl type="input" placeholder="URI" />
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