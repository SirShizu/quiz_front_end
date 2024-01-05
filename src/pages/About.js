import React from "react";
import { Container } from "react-bootstrap"; // Import Jumbotron and Container from react-bootstrap

const About = () => {
  return (
    <div>
      <Container className="mt-4">
        <h1>About Us</h1>
        <p>
          This is a simple example of an About page using Bootstrap's Jumbotron.
          Customize this section to provide information about your company or
          project.
        </p>
      </Container>
    </div>
  );
};

export default About;
