// App.js is the root component, or the wrapper component, that houses all of the other components
// to effect any change on the application, we need to either modify this file or add components inside of it
// React components follow the PascalCase naming convention; this will help you quickly identify whether a function is a component of just a regular function
import React from 'react';
import About from './components/About';
import Nav from './components/Nav';
import Gallery from './components/Gallery';


// inside the function, HTML is all that is returned; but in reality, it's not HTML but rather a language called JSX that essentially represents HTML in JavaScript
// normally, you can't add HTML to JavaScript without making it a string first
// the functions that return JSX (JavaScript XML) are document.createElement(JSX); the way React uses JSX behind the scenes is similar to document.createElement()
// JSX -> syntax extension system to JavaScript that  makes React easier to write -> arguments: takes HTML element you want to create, props, and its children (any child element between opening and closing tag of that element)
function App() {
  return (
    // React.createElement("div", {}, [
    // React.createElement("h1", {}, "Ginger")
    // React.createElement("p", {}, "breed: Brittany Spaniel")
    // ])
    // React components must ALWAYS return a single parent JSX element; however, this element may have many children elements
    <div>
      <Nav></Nav>
      <main>
        <Gallery></Gallery>
        <About></About>
      </main>
    </div>
  );
}

export default App;
