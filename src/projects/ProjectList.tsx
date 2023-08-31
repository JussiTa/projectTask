import React, { useState } from 'react';
import { Project } from './Project';
import ProjectCard from './ProjectCard';
import ProjectForm from './ProjectForm';


interface ProjectListProps {
  projects: Project[];
  onSave: (project: Project) => void;
}

function ProjectList({ projects, onSave }: ProjectListProps) {
    const [projectBeingEdited, setProjectBeingedited] = useState({})
    const handleEdit= (project: Project) =>{
        setProjectBeingedited(project);
    }; 
    const cancelEditing = () => {
        setProjectBeingedited({})
     };

     


  return(
    <div className='row'>
        {projects.map((project) =>(
            <div key= {project.id} className='cols-sm'>
               {project === projectBeingEdited ? (
                <ProjectForm
                    project={project}
                 onSave={onSave}
                 onCancel={cancelEditing}
                />
               ):(
                <ProjectCard project={project} onEdit={handleEdit}></ProjectCard>
               )
               }
              
            </div>

        ))}

   
    </div>
  );
}

export default ProjectList;