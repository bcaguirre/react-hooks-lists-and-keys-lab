import React from "react";
import ProjectList from "./ProjectList";

//ProjectItem
//The ProjectItem component should get a prop of technologies passed down from ProjectList. 
//For each element in this array of technologies, create a <span> tag that displays the name of the technology.

function ProjectItem({ name, about, technologies }) {
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        <span key={ProjectList.id}>{technologies}</span>
        {/* render a <span> for each technology in the technologies array */}
      </div>
    </div>
  );
}

export default ProjectItem;
