// logic for images; child component of the Gallery component that will now handle the photo rendering logic
// since we are using useState to set the default values for the array of photos, we need to import it as well
// we'll use the useState Hook in the PhotoList component to manage the current photo state and make this data accessible to the Modal component through props
import React, { useState } from 'react';
import Modal from '../Modal';

const PhotoList = ({ category }) => {
  // create an array for photos before return statement
  const [photos] = useState([
    {
      name: 'Grocery aisle',
      category: 'commercial',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Grocery booth',
      category: 'commercial',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Building exterior',
      category: 'commercial',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Restaurant table',
      category: 'commercial',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Cafe interior',
      category: 'commercial',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Cat green eyes',
      category: 'portraits',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Green parrot',
      category: 'portraits',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Yellow macaw',
      category: 'portraits',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Pug smile',
      category: 'portraits',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Pancakes',
      category: 'food',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Burrito',
      category: 'food',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Scallop pasta',
      category: 'food',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Burger',
      category: 'food',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Fruit bowl',
      category: 'food',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Green river',
      category: 'landscape',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Docks',
      category: 'landscape',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Panoramic village by sea',
      category: 'landscape',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Domestic landscape',
      category: 'landscape',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Park bench',
      category: 'landscape',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
  ]);

  // we need to make it so that only photos with the selected category appear
  // we need to add a filterMethod 
  // we're going through each photo in the photos array, trying to find every photo that matches the category that was selected by the user; if a photo matches the condition, it is returned in an array and assigned to currentPhotos; then we can map the currentPhotos array to render each photo that matches the category selected by the user
  const currentPhotos = photos.filter((photo) => photo.category === category);
  const [currentPhoto, setCurrentPhoto] = useState();
  // we want to conditionally render the modal based on whether an image has been clicked; we set the initial state of isModalOpen to false, because we don't want the modal to open until a user has clicked on an image
  const [isModalOpen, setIsModalOpen] = useState(false);

  // pass the image and index data as props—to allow the modal to render the image
  const toggleModal = (image, i) => {
    // we updated the current photo state using the setCurrentPhoto function with the data retrieved through the click event
    // we used the spread operator here to add the index: i key value pair to the current photo state
    setCurrentPhoto({...image, index: i});
    setIsModalOpen(true);
  }

  // map over the images in PhotoList without having to import each one at the top
  // alt attribute = used for accessibility user-assistance devices, such as screen readers, so the image's name was assigned
  // key attribute = also assigned the image's name; must be a unique string; absence of this unique key will cause an error message
  // src attribute = assigned the require expression; though not common practice, we can take advantage of the incremental naming of the images by using i
  // default property = where the image has been saved; to render the image, the default property myst be invoked
  return (
    <div>
      {isModalOpen && <Modal currentPhoto={currentPhoto} />}
      <div className="flex-row">
        {currentPhotos.map((image, i) => (
          <img
            src={require(`../../assets/small/${category}/${i}.jpg`)}
            alt={image.name}
            className="img-thumbnail mx-1"
            onClick={() => toggleModal(image, i)}
            key={image.name}
          />
        ))}
      </div>
    </div>
  );
};

// above: in React, we'll use the onClick attribute and assign a click handler function to capture the individual photo data
// we added the event listener attribute to each <img> element in each category and assigned the toggleModal function to handle the click event; we passed in the current image and i as arguments; the image object represents the element in the photos array, and the i will render the image

// modified <Modal currentPhoto={currentPhoto} /> to {isModalOpen && <Modal currentPhoto={currentPhoto} />} in order to render the modal if the isModalOpen value is true

export default PhotoList;