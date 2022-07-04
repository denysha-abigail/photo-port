// App.js is the root component, or the wrapper component, that houses all of the other components
// to effect any change on the application, we need to either modify this file or add components inside of it
// React components follow the PascalCase naming convention; this will help you quickly identify whether a function is a component of just a regular function
import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Gallery from './components/Gallery';
import ContactForm from './components/Contact';


// inside the function, HTML is all that is returned; but in reality, it's not HTML but rather a language called JSX that essentially represents HTML in JavaScript
// normally, you can't add HTML to JavaScript without making it a string first
// the functions that return JSX (JavaScript XML) are document.createElement(JSX); the way React uses JSX behind the scenes is similar to document.createElement()
// JSX -> syntax extension system to JavaScript that  makes React easier to write -> arguments: takes HTML element you want to create, props, and its children (any child element between opening and closing tag of that element)
// lift state from Nav to the parent component, App.js
function App() {
  // set the initial value of contactSelected to false; this is to prevent the contact form from showing when a user initially navigates to the homepage; the Gallery will display instead
  // with contactSelected, we can establish a conditional statement to render the Gallery and About components when this value is false and the ContactForm component when true
  const [contactSelected, setContactSelected] = useState(false);
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
    // whenever a user selects Contact in the navigation bar. This can be accomplished in the Nav component, where the Contact menu item resides
    // passing the getter and setter functions into the Nav component will allow this component to modify the state in the App component, which will conditionally render based on the user's selection
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      <main>
        {!contactSelected ? (
          <>
            <Gallery
              currentCategory={currentCategory}
            ></Gallery>
            <About></About>
          </>
        ) : (
          <ContactForm></ContactForm>
        )}
      </main>
    </div>
  );
}

// above: equivalent to -->
// if(!contactSelected) {
  // <>
    // <Gallery currentCategory={currentCategory}></Gallery>
    // <About></About>
  // </> 
    // } else {
    // <ContactForm></ContactForm>
// }
// if the contactSelected is false, the Gallery and About components should be rendered, but if contactedSelected is true, the ContactForm component should be rendered
// <> --> React fragments—a shorthand abbreviation for <React.Fragment></React.Fragment>
export default App;
