import React from 'react'
import { useState } from 'react';
function ToyBox() {
    const [toys, setToys]= useState(["Teddybear", "racecar"]);
    const newToys = ["doll", "Puzzle", "Bike"];
    const addToy = (newThing) => {
        setToys(oldtoys => [...oldtoys, ...newThing]);
    }

  return (
    <div>ToyBox
        <h2>MY TOYS</h2>
        <ul>
            {toys.map(toy => <li>{toy}</li>)}
        </ul>
        <button onClick={() => addToy(newToys)}>addToy</button>
    </div>
  )  
}

export default ToyBox
