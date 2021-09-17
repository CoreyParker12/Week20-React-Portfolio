import React from 'react';
import thisIsMe from '../../assets/me/Corey.JPG';

function About() {
  return (
    <section className="my-5">
      <div className="my-2-add">
          <img className="corey" src={thisIsMe} alt="Corey Parker"></img>
        <p>
        Welcome to my portfolio site. My name is Corey Parker, and I'm an electrical engineer in Atlanta, Georgia. I have experience in HTML, CSS, JS, and React. I am still learning and hope to continue working on larger projects in the future. Please enjoy some of my more recent work, and feel free to reach out if you are interested in any of my projects. Links to my Github and LinkedIn are in the footer of my site.
        </p>
      </div>
    </section>
  );
}

export default About;
