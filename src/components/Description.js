import React from "react";
import { states } from "./App.js"

console.log(states)

function getSates1(name) {

    let stateObj = states.find(val => {
        return val.name === name
    })

    return stateObj.description || ""

}


function getCitiesOfStates1(state, name) {

    let currentState = states.find((val) => {

        return val.name === state
    })

    if (!currentState) {
        return ""
    }

    let cityObj = currentState.city.find((val) => {
        return val.name === name

    })
    if (!cityObj) {
        return ""
    }

    return cityObj.description || ""
}



function getLandMarks1(state, city, name) {
    let currentState = states.find((val) => {

        return val.name == state
    })

    if (!currentState) {
        return ""
    }

    let currnetCity = currentState.city.find((val) => {
        return val.name == city
    })


    if (!currnetCity) {
        return ""
    }

    let landmark = currnetCity.landmarks.find((val) => {
       return val.name ===name
    })
    if (!landmark) {
        return ""
    }

    return landmark.description || ""
}


const Description = ({ stateName, cityName, landmarkName }) => {

console.log(landmarkName);



    return (
        <div>
            <div className="state-description">
                <p>{getSates1(stateName)}</p>

            </div>
            <div className="city-description">

                <p>{getCitiesOfStates1(stateName, cityName)}</p>

            </div>


            <div className="landmark-description" >
                <p>{getLandMarks1(stateName, cityName, landmarkName)}</p>
            </div>
        </div>
    )
}

export default Description