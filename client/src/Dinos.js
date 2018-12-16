import React from 'react';
import axios from 'axios';

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem
} from 'reactstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import CreateDinoForm from './CreateDinoForm.js';
import DisplayDinoForm from './DisplayDinoForm.js';
import HabitatDinoForm from './HabitatDinoForm.js';
// import DinoSlides from './Carousel.js'

export default class Dinos extends React.Component {
    constructor() {
        super()


        this.state = {
            collapsed: true,
            dinoToEdit: {
                id: -1,
                name: "",
                height: "",
                weight: "",
                era: "",
                diet: "",
            },
            name: "",
            height: "",
            weight: "",
            era: "",
            diet: "",

            dinosaurs: [
            ]
        }

        this.handleChange = this.handleChange.bind(this);
        this.readDino = this.readDino.bind(this);
        this.deleteDino = this.deleteDino.bind(this);
        this.editDino = this.editDino.bind(this);
        this.updateDino = this.updateDino.bind(this);
        this.submitEdit = this.submitEdit.bind(this);
        this.submitCreate = this.submitCreate.bind(this);
        this.toggle = this.toggle.bind(this);
        this.displayHabitats = this.displayHabitats.bind(this);

    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    handleChange(event) {
        let name = event.target.name;
        this.setState({
            [name]: event.target.value
        });
    }

    readDino(item) {
        alert(
            "ID: " + item.id + "\n" +
            "Name: " + item.name + "\n" +
            "Height: " + item.height + "\n" +
            "Weight: " + item.weight + "\n" +
            "Era: " + item.era + "\n" +
            "Diet: " + item.diet
        )
    }

    deleteDino(id) {
        //This is the actual delete
        axios.delete('/dino/' + id, {
        })
            .then((response) => {
                this.setState({ dinosaurs: response.data.dinos })

            })
            .catch(function (error) {
                console.log(error);
            });
    }

    editDino(dino) {
        //this is when the button is clicked to populate edit fields
        this.setState({ dinoToEdit: dino })
    }

    updateDino(newDino) {
        //This is the actual update to the dino
        axios.put('/dino/' + newDino.id, {
            name: newDino.name,
            height: newDino.height,
            weight: newDino.weight,
            era: newDino.era,
            diet: newDino.diet
        })
            .then((response) => {
                this.setState({ dinosaurs: response.data.dinos })

            })
            .catch(function (error) {
                console.log(error);
            });
    }

    submitCreate(event) {
        event.preventDefault();
        axios.post('/dino', {
            name: this.state.name,
            height: this.state.height,
            weight: this.state.weight,
            era: this.state.era,
            diet: this.state.diet
        })
            .then((response) => {
                this.setState({ dinosaurs: response.data.dinos })

            })
            .catch(function (error) {
                console.log(error);
            });
    }

    submitEdit(event) {
        event.preventDefault()
        //BUILD UPDATED DINOSAUR

        let updatedDino = {
            id: this.state.dinoToEdit.id,
            name: this.state.name.length ? this.state.name : this.state.dinoToEdit.name,
            height: this.state.height.length ? this.state.height : this.state.dinoToEdit.height,
            weight: this.state.weight.length ? this.state.weight : this.state.dinoToEdit.weight,
            era: this.state.era.length ? this.state.era : this.state.dinoToEdit.era,
            diet: this.state.diet.length ? this.state.diet : this.state.dinoToEdit.diet
        }
        this.updateDino(updatedDino)
        this.setState({
            dinoToEdit: {
                id: -1,
                name: "",
                height: "",
                weight: "",
                era: "",
                diet: "",
            },
            name: "",
            height: "",
            weight: "",
            era: "",
            diet: "",
            //reset the name 
        })
    }

    componentDidMount() {
        axios.get('/dino')
            .then((response) => {
                this.setState({ dinosaurs: response.data.dinos })
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    displayHabitats(e) {
        if (e.target.value) {
            axios.get('/dino/habitat/' + e.target.value)
                .then((response) => {
                    
                    this.setState({ dinosaurs: response.data.dinos })
                })
                .catch(function (error) {
                    console.log(error);
                });
        }

    }
    render() {
        return (
            <Router>
                <div>
                    <div>
                        <Navbar color="faded" light expand="md">
                            <NavbarBrand href="/">DinosaurCRUD 2018</NavbarBrand>
                            <NavbarToggler onClick={this.toggle} />
                            <Collapse isOpen={this.state.isOpen} navbar>
                                <Nav className="ml-auto" navbar>
                                    <NavItem>
                                        <Link to="/">Home</Link>
                                    </NavItem>
                                    <NavItem>
                                        <Link to="/display">Display</Link>
                                    </NavItem>

                                    <NavItem>
                                        <Link to="/create">Create</Link>
                                    </NavItem>
                                    <NavItem>
                                        <Link to="/habitat">Habitat</Link>
                                    </NavItem>
                                </Nav>
                            </Collapse>
                        </Navbar>
                    </div>

                    {/*<Route exact path="/" component={DinoSlides} /> */}

                    <Route path="/display"
                        render={() => <DisplayDinoForm
                            dinosaurs={this.state.dinosaurs}
                            dinoToEdit={this.state.dinoToEdit}

                            handleChange={this.handleChange}
                            readDino={this.readDino}
                            deleteDino={this.deleteDino}
                            editDino={this.editDino}
                            updateDino={this.updateDino}
                            submitEdit={this.submitEdit}
                        />}
                    />
                    <Route path="/create"
                        render={() => <CreateDinoForm
                            dinosaurs={this.state.dinosaurs}

                            readDino={this.readDino}
                            deleteDino={this.deleteDino}
                            handleChange={this.handleChange}
                            submitCreate={this.submitCreate}
                        />}
                    />
                    <Route path="/habitat"
                        render={() => <HabitatDinoForm
                            dinosaurs={this.state.dinosaurs}
                            handleChange={this.handleChange}
                            displayHabitats={this.displayHabitats}
                        />}
                    />

                </div>
            </Router>
        );
    }
};





