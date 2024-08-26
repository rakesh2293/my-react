import React from "react";
import ReactDOM from "react-dom/client";

// React Element
// const heading = React.createElement("h1",{id:"heading"},"My React Element"); 

// JSK React ( Transplied before it reaches the JS engine) => PARCEL - Babel

// JSK => Babel Transplied it to React.createElement => ReactElement-JS Object => HTMLELement(render)
const jsxHeading =(<h1 className="heading">My React in JSX </h1>)

// React Component
// Class Based Components - OLD
// Functional Components - NEW
//React Functional Component

const TileComponent = () => {
    return <h1 className="heading">Here is Tile Functional Component</h1>
}


const title = (
    <h1>Here is Tile Element</h1>
)


// Below is the Component Composition works 
const HeadingComponent =() => {
    return (<div id="container">
        <TileComponent/> 
        <h2>{100+200}</h2>
        {title}
        <h1>My React in JSX</h1>
        </div>)
}



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />)


