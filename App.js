// const heading = React.createElement("h1", {id:"heading"}, "Hello From React!")
// const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(heading)

/**
 * <div id="parent">
 *  <div id="child1">
 *      <h1>I'm an H1 Tag</h1>
 *      <h2>I'm an H2 Tag</h2>
 *  </div>
 *  <div id="child2">
 *      <h1>I'm an H1 Tag</h1>
 *      <h2>I'm an H2 Tag</h2>
 *  </div>
 * </div>
 */
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