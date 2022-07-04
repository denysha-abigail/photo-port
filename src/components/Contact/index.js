// when that form data is maintained by the state of the component, we call it a controlled component. When the data is retrieved, then submitted directly from the DOM, we call it an uncontrolled component; in React, the advantage of a controlled component is that the data can be validated or manipulated using JavaScript, offering better control over the data but also requiring more time to develop
// to sync the form data of the user input with the component's state, we'll apply the useState hook
import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

function ContactForm() {
    // develop a controlled component to do client-side validation; hook below will manage the form data
    // a feature of this hook is the ability to initialize the values of the state; in this case, we want to clear the input fields on the component loading; thus, we'll set the initial state to empty strings
    // formState will have three key-value pairs to represent the three user inputs: name, email, and message.
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    // destructure the formState object into its named properties, name, email, and message
    const { name, email, message } = formState;
    // note that the initial state of the errorMessage is an empty string
    const [errorMessage, setErrorMessage] = useState('');
    // his function will sync the internal state of the component formState with the user input from the DOM; the onChange event listener will ensure that the handleChange function fires whenever a keystroke is typed into the input field for name
    // we're using the setFormState function to update the formState value for the name property; we assign the value taken from the input field in the UI with e.target.value and assign this value to the property formState.name; we use the spread operator, ...formState, so we can retain the other key-value pairs in this object; without the spread operator, the formState object would be overwritten to only contain the name: value key pair
    function handleChange(e) {
        // allow validation of the form data before syncing the form data with the state, formState
        // target the email <input> element, validate the value of the email input field by using the validateEmail function (which returns a Boolean: true if valid and false if invalid), and store that return value in a constant called isValid
        // this conditional statement says if the <input> is email, then validate the value of that input field with the validateEmail function and assign its return to isValid
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);

            // isValid conditional statement
            // the error message is assigned to a string based on the isValid value
            // i.e. if the email entry is valid, the error message is assigned to an empty string
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                setErrorMessage('');
            }
            // handle the message and name form elements with an else clause of the parent conditional statement that targeted the email form element
            // we're checking the message and name form element values; the nested conditional statement checks whether the values of these elements are blank; if the input values are blank, an error message is assigned to errorMessage; if not, errorMessage is set to empty string, meaning that there's no error
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        };
        // setFormState({...formState, name: e.target.value })
        // the name property of target in the preceding expression actually refers to the name attribute of the form element; this attribute value matches the property names of formState (name, email, and message) and allows us to use [ ] to create dynamic property names
        // wrap setter function setFormState in a conditional so that the state only updates if the form data has passed the quality tests
        // the conditional statement only allows the state to update with the user input if there is no error message
        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
        }

    }

    // we'll prevent the default action of the form Submit button and then log the formState object on the Submit button click
    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }

    // create DOM elements in the contact form using JSX
    // add each form element wrapped in a <div>
    // due to keywords reserved in JavaScript, we need to replace the for attribute in the <label> element to htmlFor, just as class had to be changed to className
    return (
        <section>
            <h1>Contact me</h1>
            <form id="contact-form" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" defaultValue={name} onBlur={handleChange} name="name" />
                </div>
                <div>
                    <label htmlFor="email">Email address:</label>
                    <input type="email" defaultValue={email} name="email" onBlur={handleChange} />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" defaultValue={message} onBlur={handleChange} rows="5" />
                </div>
                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
                <button type="submit">Submit</button>
            </form>
        </section>
    )
}

// above: the errorMessage is the equivalent as:
// if(errorMessage) {
    // <div>
    // <p className="error-text">{errorMessage}</p>
    // </div>
// }

// if errorMessage has a truthy value, the <div> block will render; if errorMessage doesn't have an error message, the following <div> block doesn't render; the && operator—known as the AND operator—is being used here as a short circuit; if the first value resolves to true, the second expression is evaluated
// with the onChange attribute, the error message displays as soon as the first letter is typed inside the email field; the onBlur attribute will fire the event once the user has changed focus from the input field, thus allowing the user to finish their entry before validating their input

export default ContactForm;

// in React we can create a single-page application that leverages the JavaScript environment in which we created the markup; a single-page application, or SPA, is a web application or website that interacts with the web browser by dynamically rewriting the current webpage, in place of the default method of the browser loading entirely new pages; this approach allows for a more fluid UI because the page doesn't have to be reloaded each time; React allows for conditional rendering and can replace a portion of the webpage based on the user's selection