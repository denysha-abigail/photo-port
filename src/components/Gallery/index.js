import React from 'react';
// import PhotoList component in Gallery
import PhotoList from '../PhotoList';
import { capitalizeFirstLetter } from '../../utils/helpers';

// Gallery function gets the name and description from an object, rather than from hardcoded placeholder values
// props is replaced with currentCategory as a parameter and then destructured with name and description properties 
// *** COMPONENTS ARE JUST FUNCTIONS ***; the only difference is that they return JSX and may use React Hooks
function Gallery({ currentCategory }) {
    // declare a new object called currentCategory and set its name and description to values for the Commercial page
    // use capitalizeFirstLetter() helper function to capitalize the name value when it's rendered; reminder: it must be imported before we can use it
    // to get the category variable from PhotoList to work, we must pass down the currentCategory.name as a prop into the Photolist component from Gallery
    const { name, description } = currentCategory;
    
    return (
        <section>
            <h1 data-testid="h1tag">{capitalizeFirstLetter(name)}</h1>
            <p>{description}</p>
            <PhotoList category={currentCategory.name} />
        </section>
    );
}

export default Gallery;