import React from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import CreateDinoForm from './CreateDinoForm.js';
import DisplayDinoForm from './DisplayDinoForm.js';
import DinoSlides from './Carousel.js'

export default class Dinos extends React.Component {
    constructor() {
        super()
        this.state = {
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
        let newDinos = this.state.dinosaurs.filter(dinosaur => dinosaur.id !== id)
        this.setState({ dinosaurs: newDinos })
        localStorage.setItem("dinoStorage", JSON.stringify(newDinos));
    }

    editDino(dino) {
        //this is when the button is clicked to populate edit fields
        this.setState({ dinoToEdit: dino })
    }

    updateDino(newDino) {
        let newDinoObj = this.state.dinosaurs.map((oldDino) => {
            if (oldDino.id === newDino.id) {
                return newDino;
            }
            else {
                return oldDino;
            }
        })
        this.setState({ dinosaurs: newDinoObj })
        localStorage.setItem("dinoStorage", JSON.stringify(newDinoObj));
    }

    submitCreate(event) {
        event.preventDefault();
        let currentId = 0;
        if (this.state.dinosaurs.length > 0) {
            currentId = this.state.dinosaurs[this.state.dinosaurs.length - 1].id
        }

        let newDino = { id: currentId + 1, name: this.state.name, height: this.state.height, weight: this.state.weight, era: this.state.era, diet: this.state.diet }
        let theDinos = this.state.dinosaurs.slice()
        theDinos.push(newDino)
        this.setState({ dinosaurs: theDinos })
        localStorage.setItem("dinoStorage", JSON.stringify(theDinos));

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
        let initialDinosaurs = []
        initialDinosaurs = JSON.parse(localStorage.getItem("dinoStorage"));
        if (initialDinosaurs) { if (initialDinosaurs.length === 0) { initialDinosaurs = 0 } } // make sure its not an empty array
        if (!initialDinosaurs) {
            initialDinosaurs = [
                { id: 0, name: 'Parasaurolophus', height: '16ft', weight: '2268 kg', era: 'Late Cretaceous', diet: 'Herbivore' },

                { id: 1, name: 'Brachiosaurus', height: '31ft', weight: '35000 kg', era: 'Late Jurassic', diet: 'Herbivore' },

                { id: 2, name: 'Gallimimus', height: '6ft', weight: '440 kg', era: 'Late Cretaceous', diet: 'Insectivorous' },

                { id: 3, name: 'Dilophosaurus', height: '6ft', weight: '283 kg', era: 'Early Jurassic', diet: 'Scavenger' },

                { id: 4, name: 'Triceratops', height: '9ft', weight: '10886 kg', era: 'Late Cretaceous', diet: 'Herbivore' },

                { id: 5, name: 'Tyrannosaurus', height: '12ft', weight: '7257 kg', era: 'Late Cretaceous', diet: 'Carnivore' },

                { id: 6, name: 'Velociraptor', height: '2ft', weight: '15 kg', era: 'Late Cretaceous', diet: 'Carnivore' }

            ];
        }
        this.setState({ dinosaurs: initialDinosaurs })
    }
    render() {
        return (
            <Router>
                <div>
                    <div>
                        <Navbar color="light" light expand="md">
                            <NavbarBrand href="/">DinosaurCRUD 2018</NavbarBrand>
                            <NavbarToggler onClick={this.toggle} />
                            <Collapse isOpen={this.state.isOpen} navbar>
                                <Nav className="ml-auto" navbar>
                                    <UncontrolledDropdown nav inNavbar>
                                        <DropdownToggle nav caret>
                                            Options
                                        </DropdownToggle>
                                        <DropdownMenu right>
                                            <Link to="/">
                                                <DropdownItem>
                                                    Home
                                                </DropdownItem>
                                            </Link>
                                            <DropdownItem divider />
                                            <Link to="/display">
                                                <DropdownItem>
                                                    DisplayDinos
                                                </DropdownItem>
                                            </Link>
                                            <Link to="/create">
                                                <DropdownItem>
                                                    Create
                                                </DropdownItem>
                                            </Link>
                                        </DropdownMenu>
                                    </UncontrolledDropdown>
                                </Nav>
                            </Collapse>
                        </Navbar>
                    </div>

                    <Route exact path="/" component={DinoSlides} />

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
                        
                        handleChange={this.handleChange}
                        submitCreate={this.submitCreate}
                        />} 
                        />
                </div>
            </Router>
        );
    }
};





