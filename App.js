import React from "react";
import ReactDOM from "react-dom/client";

const parent =React.createElement("div",
    {id:"parent"},
    [
        React.createElement("div",{id:"child1"},
            [React.createElement("h1",{},"I'm an H1 Tag"),React.createElement("h2",{},"I'm an H2 Tag")]),
        React.createElement("div",{id:"child2"},
            [React.createElement("h1",{},"I'm an H1 Tag"),React.createElement("h2",{},"I'm an H2 Tag")])
    ]
)
// To Overcome above Complex code we introduce JSX
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(parent)