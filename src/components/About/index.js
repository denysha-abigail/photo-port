import React from 'react';
import coverImage from "../../assets/cover/cover-image.jpg";

function About() {
    // to add a class to a tag, you need to call the class attribute className because class is already a keyword in JavaScript
    // you can use the {} syntax in JSX to use JavaScript
    return (
        <section className="my-5">
            <h1 id="about">Who am I?</h1>
            <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover"/>
        </section>
    );
}

export default About;