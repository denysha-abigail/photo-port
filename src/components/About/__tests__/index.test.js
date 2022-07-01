// we need react to enable the components to function properly so we can test them
import React from 'react';
// the render function will render the component; Jest creates a simulated DOM in a Node.js environment to approximate the DOM (no component is actually visibly rendered)
// the cleanup function will remove the components from the DOM to prevent memory leaking, as well as data collisions between tests that could corrupt test results
import { render, cleanup } from '@testing-library/react';
// jest-dom offers access to custom matchers that are used to test DOM elements
import '@testing-library/jest-dom/extend-expect';
// import the component we will be testing (the About component)
import About from '..';

// configure the testing environment by adding a utility function to keep things clean; call the cleanup function using the afterEach global function from Jest
// this will ensure that after each test, we won't have any leftover memory data that could give us false results
afterEach(cleanup);

// use the describe function to declare the component we're testing
describe('About component', () => {
    // renders About test
    // first test: baseline to verify that the component is rendering
    // use it function and a string to declare what is being tested as first argument and callback function that runs the test as second argument
    // this is where we'll use the render function to render the About component using JSX (test can also be used interchangeably with it to create a test)
    it('renders', () => {
        render(<About/>);
    });

    // second test
    it('matches snapshot DOM node structure', () => {
        // render About
        // user asFragment function to return a snapshot of the About component
        const { asFragment } = render(<About/>);
        // use expect function with a matcher to assert something about a value; use toMatchSnapshot matcher to assert that snapshots will match
        expect(asFragment()).toMatchSnapshot();
    });
})
