import React from 'react';

function Nav() {
    const categories = [
        {
            name: "commercial",
            description:
                "Photos of grocery stores, food trucks, and other commercial projects",
        },
        { name: "portraits", description: "Portraits of people in my life" },
        { name: "food", description: "Delicious delicacies" },
        {
            name: "landscape",
            description: "Fields, farmhouses, waterfalls, and the beauty of nature",
        },
    ];

    function categorySelected(name) {
        console.log(`${name} clicked`)
    }

    // map over the categories array after the Contact link
    // whenever we map over anything in JSX, the outermost element must have a key attribute that's set to be something unique; this helps React keep tract of items in the virtual DOM
    // browser uses DOM to keep track of everything in the webpage from text and color to lines and images; the DOM doesn't just include html tags, it also includes all kinds of information required to display the page like styles, colors, line widths, and positions (all the things we control with css)
    // virtual DOM or VDOM saves us from the continuous reflows and repaints; while the browser keeps track of the actual DOM, React has its own version: the virtual DOM
    // React doesn't need to rely on the browser to recalculate and repaint the entire page after every style or content update; instead, React keeps tracks of the updates itself and memory in the virtual DOM, so when you use React to update the color or size of 50 elements on your page, React makes a list of all those changes and updates them in the virtual DOM; shortly after, React sends a whole batch of those 50 changes all at once to the browser; instead of recalculating the DOM 50 times and then redrawing the page 50 times, the browser only has to do ONE reflow and ONE paint; this means that the broswer does less work and the user doesn't have to wait for a lot of reflows and paints
    // the virtual DOM allows us to build rich, complex front-end applications without having to fret over broswer performance
    return (
        <header>
            <h2>
                <a data-testid="link" href="/">
                    <span role="img" aria-label="camera"> 📸</span>Oh Snap!
                </a>
            </h2>
            <nav>
                <ul className="flex-row">
                    <li className="mx-2">
                        <a data-testid="about" href="#about">
                            About me
                        </a>
                    </li>
                    <li>
                        <span>Contact</span>
                    </li>
                    {categories.map((category) => (
                        <li
                            className="mx-1"
                            key={category.name}
                        >
                            <span onClick={() => categorySelected(category.name)}>
                                {category.name}
                            </span>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}

// above: provide a function name to onClick() that will be defined somewhere above the return statement; the onClick() attribute is expecting a callback function declaration; it's important that we wrap it in a function declaration rather than just calling categorySelected(category.name), which would cause the function to get called whenever the component renders as well

export default Nav;