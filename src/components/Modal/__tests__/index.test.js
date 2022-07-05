import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Modal from '..';

const mockToggleModal = jest.fn();

const currentPhoto = { 
    name: 'Park bench',
    category: 'landscape',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    index: 4
}

afterEach(cleanup);

describe('Modal component', () => {
    // renders Modal
    it('renders', () => {
        render(<Modal currentPhoto={currentPhoto} onClose={mockToggleModal} />);
    });

    it('matches snapshot DOM node structure', () => {
        const { asFragment } = render(<Modal currentPhoto={currentPhoto} onClose={mockToggleModal} />);
        expect(asFragment()).toMatchSnapshot();
    })
});

describe('Click Event', () => {
    it('calls onClose handler', () => {
        // Arrange: Render Modal
        const { getByText } = render(<Modal currentPhoto={currentPhoto} onClose={mockToggleModal} />);

        // Act: Simulate click event
        fireEvent.click(getByText('Close this modal'));

        // Assert: Expected matcher
        expect(mockToggleModal).toHaveBeenCalledTimes(1);
    });
});