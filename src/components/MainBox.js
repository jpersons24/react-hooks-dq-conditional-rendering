import React, { useState } from "react";
import MenuBar from "./MenuBar";
import { Profile, Photos, Cocktails, Pokemon } from "./pages";


// *****  STATE WORKFLOW *****
// 1. do we need state for this feature?
// YES - in the MainBox
// MainBox needs that state -> determine what child to render
  // MainBox has that state -> can pass it down to child components
  // also -> closest common parent between sibling elements
// MenuBar needs that state -> change state in the parent, set the active menu
// 2. set up initial state
  // what is good initial value for state? "Profile"
// 3. set up component to render based on state
// 4. find a way to update state dynamically based on user interaction

// ***** INVERSE DATA FLOW *****
// 1. define event handler in child component
// 2. define callback function in parent component
// 3. pass callback function as prop to child
// 4. call the callback function in event handler within child component


function MainBox() {
  const [selectedItem, setSelectedItem] = useState("Profile")

  /*
    Replace the code below! Depending on what menu item is selected in the menu, 
    I should render either a Profile, Photos, Cocktails, or Pokemon component.
    Think of a way to track which menu item was selected. 
    - Which component should have state? 
    - Which component should have methods to control state? 
    - Where should these methods be called?
  */

  // const detailsToDisplay = <div>Hi, I'm a div!</div>;
  let detailsToDisplay
  if (selectedItem === "Profile") {
    detailsToDisplay = <Profile />
  } else if (selectedItem === "Photos") {
    detailsToDisplay = <Photos />
  } else if (selectedItem === "Cocktails") {
    detailsToDisplay = <Cocktails />
  } else {
    detailsToDisplay = <Pokemon />
  }

  function handleMenuClick(newSelection) {
    setSelectedItem(newSelection)
  }

  return (
    <div>
      <MenuBar selectedItem={selectedItem} onMenuClick={handleMenuClick}/>
      {detailsToDisplay}
    </div>
  );
}

export default MainBox;
