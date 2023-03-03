import React from 'react'

export default function() {

  const sizes = [2, 3, 2, 5]
  for (let i = 0; i < sizes.length(); i++) {
    let color = Color(sizes[i])
    for (let j = 0; j < sizes[i]; j++) {
      document.getElementByClassName("ships").textContent = color;
    }
  }
  return (
    <p className="ships">
      <span>
      </span>
    </p>)
}

function Color(size) {

  let choice = ""
  switch (size) {
    case 2:
      choice += "green"
      break;
    case 3:
      choice += "blue"
      break;
    case 5:
      choice += "red"
      break;
    default:
      break;
  }
  return choice;

}