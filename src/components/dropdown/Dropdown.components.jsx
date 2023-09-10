import React from "react";

const Dropdown = ({ breeds }) => {
    return (
        <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Select Breed
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                {
                    breeds.map((breed) => {
                        return <div class="dropdown-item">{breed}</div>
                    })
                }
            </div>
        </div>
    )
}

export default Dropdown