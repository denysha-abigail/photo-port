// when that form data is maintained by the state of the component, we call it a controlled component. When the data is retrieved, then submitted directly from the DOM, we call it an uncontrolled component; in React, the advantage of a controlled component is that the data can be validated or manipulated using JavaScript, offering better control over the data but also requiring more time to develop
// to sync the form data of the user input with the component's state, we'll apply the useState hook
import React, { useState } from 'react';

function ContactForm() {
    // develop a controlled component to do client-side validation; hook below will manage the form data
    // a feature of this hook is the ability to initialize the values of the state; in this case, we want to clear the input fields on the component loading; thus, we'll set the initial state to empty strings
    // formState will have three key-value pairs to represent the three user inputs: name, email, and message.
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    // destructure the formState object into its named properties, name, email, and message
    const { name, email, message } = formState;
    // his function will sync the internal state of the component formState with the user input from the DOM; the onChange event listener will ensure that the handleChange function fires whenever a keystroke is typed into the input field for name
    // we're using the setFormState function to update the formState value for the name property; we assign the value taken from the input field in the UI with e.target.value and assign this value to the property formState.name; we use the spread operator, ...formState, so we can retain the other key-value pairs in this object; without the spread operator, the formState object would be overwritten to only contain the name: value key pair
    function handleChange(e) {
        // setFormState({...formState, name: e.target.value })
        // the name property of target in the preceding expression actually refers to the name attribute of the form element; this attribute value matches the property names of formState (name, email, and message) and allows us to use [ ] to create dynamic property names
        setFormState({ ...formState, [e.target.name]: e.target.value })
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
                    <input type="text" defaultValue={name} onChange={handleChange} name="name" />
                </div>
                <div>
                    <label htmlFor="email">Email address:</label>
                    <input type="email" defaultValue={email} name="email" onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" defaultValue={message} onChange={handleChange} rows="5" />
                </div>
                <button type="submit">Submit</button>
            </form>
        </section>
    )
}

export default ContactForm;