import React from "react";
import './dropdown.styles.css'
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { selectBreeds } from "../../redux/dog/dog.selector";

const Dropdown = ({ breeds }) => {
    return (
        <div className="dropdown">
            <div className="form-floating w-auto p-3">
                <select className="form-select" id="floatingSelect" aria-label="Floating label select example">
                    <option selected>Random</option>
                    {
                        breeds.map()
                    }
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
                <label for="floatingSelect">Select a Breed</label>
            </div>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    breeds: selectBreeds
})

export default connect(mapStateToProps)(Dropdown)