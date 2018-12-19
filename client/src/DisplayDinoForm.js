import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Row, Col } from 'reactstrap';
export default class DisplayDinoForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    componentDidMount(){
        // console.log(this.props)
        // this.props.deleteDino(5)
    }
    //Display Functions
    displayEditDinos() {
        return (
            <Form ref="editForm">
                <FormGroup>
                    <Label for="dinoName">Name of Dino</Label>
                    <Input type="text" defaultValue={this.props.dinoToEdit.name} name="name" id="dinoName" onChange={this.props.handleChange} />
                </FormGroup>

                <FormGroup>
                    <Label for="dinoHeight">Height</Label>
                    <Input type="text" defaultValue={this.props.dinoToEdit.height} name="height" id="dinoHeight" onChange={this.props.handleChange} />
                </FormGroup>

                <FormGroup>
                    <Label for="dinoWeight">Weight</Label>
                    <Input type="text" defaultValue={this.props.dinoToEdit.weight} name="weight" id="dinoWeight" onChange={this.props.handleChange} />
                </FormGroup>

                <FormGroup>
                    <Label for="dinoEra">Era</Label>
                    <Input type="text" name="era" defaultValue={this.props.dinoToEdit.era} id="dinoEra" onChange={this.props.handleChange} />
                </FormGroup>

                <FormGroup>
                    <Label for="dinoDiet">Diet</Label>
                    <Input type="text" defaultValue={this.props.dinoToEdit.diet} name="diet" id="dinoDiet" onChange={this.props.handleChange} />
                </FormGroup>
                <Button onClick={this.props.submitEdit}>Submit Edit</Button>
                </Form>
            )
    }

    displayReadDinos() {
        return (
                this.props.dinosaurs.map((item) =>
                <FormGroup key={item.id}>
                    <Row>
                        <Label>{item.name}</Label>
                    </Row>
                    <Row>
                        <Button onClick={() => { this.props.readDino(item) }}>Read</Button>
                        <Button onClick={() => { this.props.deleteDino(item.id) }}>Delete</Button>
                        <Button onClick={() => { this.props.editDino(item) }}>Edit</Button>
                    </Row>
                </FormGroup>)
        )
    }
    render() {
        return (
            <Row>
                <Col md={2}>
                </Col>
                <Col md={4}>
                    {this.displayReadDinos()}
                </Col>
                <Col md={4}>
                    {this.displayEditDinos()}
                </Col>
                <Col md={2}>
                </Col>
            </Row>
        )
    }
}