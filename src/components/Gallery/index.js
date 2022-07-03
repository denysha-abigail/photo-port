import React from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';
import photo from '../../assets/small/commercial/0.jpg';

// Gallery function gets the name and description from an object, rather than from hardcoded placeholder values
function Gallery(props) {
    // declare a new object called currentCategory and set its name and description to values for the Commercial page
    // use capitalizeFirstLetter() helper function to capitalize the name value when it's rendered; reminder: it must be imported before we can use it
    const currentCategory = {
        name: "commercial",
        description:
            "Photos of grocery stores, food trucks, and other commercial projects"
    };
    // display image from small commercial folder for the Gallery page
    return (
        <section>
            <h1>{capitalizeFirstLetter(currentCategory.name)}</h1>
            <p>{currentCategory.name}</p>
            <div>
                <img 
                    src={photo}
                    alt="Commercial Example"
                    className="img-thumbnail mx-1"
                />
            </div>
        </section>
    );
}

export default Gallery;