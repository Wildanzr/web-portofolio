import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="flex flex-col items-center justify-center w-full h-full gap-5 lg:h-screen gradient-linear-reverse lg:flex-row lg:justify-between"
    >
      <div className="container mx-auto p-5 w-full h-full grid grid-cols-1 lg:grid-cols-2 gap-10 lg:items-center lg:justify-center">
        <p>About</p>
      </div>
    </section>
  );
};

export default About;
