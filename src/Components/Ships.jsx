import React from 'react'
let redShip ="", blueShip = "",greenShip = "";
export default function() {
  
  let shipBodyColor
  
  const sizes = [2, 3, 4, 5]//ships with different sizes
  for (let i = 0; i < sizes.length(); i++) {
    let color = Color(sizes[i])//giving the ship at index i, a color
     
    for (let j = 0; j < sizes[i]; j++) {//
        shipBodyColor = color
    }
    let allocateToShip = Ships(shipBodyColor);
    shipBodyColor =""
  }
  return (
    <p className="ships">
      {color}
    </p>)
}

function Color(size) {

  let choice = ""
  switch (size) {
    case 2:
      choice += "🟩"//green
      break;
    case 3:
      choice += "🟦"//blue
      break;
    case 5:
      choice += "🟥"//red
      break;
    default:
      break;
  }
  return choice;

}
function Ships(color){
  switch(color){
    case "🟩":
      greenShip += color
  }
  
}