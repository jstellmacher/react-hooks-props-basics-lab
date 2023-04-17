import React from "react";
import Links from "./Links"

function About({bio, github, linkedin}) {
  //! destructured
  return (
    <div id="about">
      <h2>About Me</h2>
      
      {/* condition ? if : else */}
      {!bio || bio === "" ? null : <p>{bio}</p>}

      {/* || this is the logical OR operator this means true only if both expressions are true, otherwise false...! bio = the NOT operator returns true for a false expression and false for a true expression */}
      {/* Left side: !bio is not passed down || or bio is empty if null else you put bio prop into <p> tag  */}
      
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      {/* !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */}
      {<Links github={github} linkedin={linkedin} />}
    </div>
  );
}

export default About;
