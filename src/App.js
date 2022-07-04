// App.js is the root component, or the wrapper component, that houses all of the other components
// to effect any change on the application, we need to either modify this file or add components inside of it
// React components follow the PascalCase naming convention; this will help you quickly identify whether a function is a component of just a regular function
import React,  { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Gallery from './components/Gallery';


// inside the function, HTML is all that is returned; but in reality, it's not HTML but rather a language called JSX that essentially represents HTML in JavaScript
// normally, you can't add HTML to JavaScript without making it a string first
// the functions that return JSX (JavaScript XML) are document.createElement(JSX); the way React uses JSX behind the scenes is similar to document.createElement()
// JSX -> syntax extension system to JavaScript that  makes React easier to write -> arguments: takes HTML element you want to create, props, and its children (any child element between opening and closing tag of that element)
// lift state from Nav to the parent component, App.js
function App() {
  // initialize the category state as an array of a few objects; we could use a regular array rather than an array inside useState, but who chose to use the useState hook so that we can have the option to change the categories at some point in the future
  const [categories] = useState([
    {
      name: 'commercial',
      description: 'Photos of grocery stores, food trucks, and other commercial projects',
    },
    { name: 'portraits', description: 'Portraits of people in my life' },
    { name: 'food', description: 'Delicious delicacies' },
    { name: 'landscape', description: 'Fields, farmhouses, waterfalls, and the beauty of nature' },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    // React.createElement("div", {}, [
    // React.createElement("h1", {}, "Ginger")
    // React.createElement("p", {}, "breed: Brittany Spaniel")
    // ])
    // React components must ALWAYS return a single parent JSX element; however, this element may have many children elements
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
      ></Nav>
      <main>
        <div>
          <Gallery currentCategory={currentCategory}></Gallery>
        <About></About>
        </div>        
      </main>
    </div>
  );
}

export default App;
