import React from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import {ListGroup, ListGroupItem} from 'reactstrap';

// import { Row, Col } from 'reactstrap';
export default class HabitatDinoForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
        this.toggle = this.toggle.bind(this);
        this.state = {
            dropdownOpen: false
        };

    }
    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }
    componentDidMount() {
        // console.log(this.props)
        // this.props.deleteDino(5)
    }
    displayTheDinos() {
        return(
        this.props.dinosaurs.map((item) =>
        <ListGroup>
            <ListGroupItem>{item.name}</ListGroupItem>
        </ListGroup>
            )
        )
    }
    //Display Functions
    render() {
        return (
            <div>
                <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle} onClick={this.props.displayHabitats}>

                    <DropdownToggle caret color="primary">Select Habitat</DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem value="1">Land Dinosaurs</DropdownItem>
                        <DropdownItem value="2">Sea Dinosaurs</DropdownItem>
                        <DropdownItem value="3">Air Dinosaurs</DropdownItem>
                    </DropdownMenu>
                </ButtonDropdown>
                {this.displayTheDinos()}
            </div>
        )
    }
}

            // <Button onClick={()=>{this.props.displayHabitats(1)}}>List of Dinos Per Habitat</Button>
