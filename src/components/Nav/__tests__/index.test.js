import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from '..';

const categories = [
    { name: 'portraits', description: 'Portraits of people in my life' }
]
const mockCurrentCategory = jest.fn();
const mockSetCurrentCategory = jest.fn();

afterEach(cleanup);

describe('Nav component', () => {
    // baseline test
    it('renders', () => {
        // we can use these mock functions as props for the Nav component to render
        render(<Nav
            categories={categories}
            setCurrentCategory={mockSetCurrentCategory}
            currentCategory={mockCurrentCategory}
        />);
    });

    // snapshot test
    it('matches snapshot', () => {
        const { asFragment } = render(<Nav 
            categories={categories}
            setCurrentCategory={mockSetCurrentCategory}
            currentCategory={mockCurrentCategory}
            />);
        // assert value comparison
        expect(asFragment()).toMatchSnapshot();
    });
});

// describe function is not absolutely necessary for the test to run; it is used to organize tests into sections that are typically labeled with the element being tested
// the test below will check if the emoji has been inserted into the <h2> element in the Nav component
describe('emoji is visible', () => {
    it('inserts emoji into the h2', () => {
        // arrange
        // query to return the element containing the emoji
        const { getByLabelText } = render(<Nav 
            categories={categories}
            setCurrentCategory={mockSetCurrentCategory}
            currentCategory={mockCurrentCategory}
            />);
        // assert
        // query the element by its aria-label to test the emoji's accessibility
        expect(getByLabelText('camera')).toHaveTextContent('📸');
    });
});

// check to see if some of our links are visible; this way we can ensure that the users can navigate properly to different parts of the application
describe('links are visible', () => {
    it('inserts text into the links', () => {
        // arrange
        // verify that the text content is being inserted into the <a> tags (i.e. that the links are visible to users); use getByTestId method; similar to an id attribute, we will add a data-testid to the <a> element; also similar to the getElementById DOM method, we will use the getByTestId method to return the DOM element
        const { getByTestId } = render(<Nav 
            categories={categories}
            setCurrentCategory={mockSetCurrentCategory}
            currentCategory={mockCurrentCategory}
            />);
        // assert
        // assert the valid outcomes using the matcher toHaveTextContent
        expect(getByTestId('link')).toHaveTextContent('Oh Snap!');
        expect(getByTestId('about')).toHaveTextContent('About me');
        // above: two expect statements asserts that both links must have their text contents inserted; if either assertion fails, the test will fail
    });
});