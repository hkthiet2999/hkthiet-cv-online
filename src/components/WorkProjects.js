import React, { Component } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './WorkProjects.css';

class WorkProjects extends Component {
    render() {
        const { projects } = this.props.resumeData;
        return (
            <section id="portfolio">
                <h1><span>Side Projects</span></h1>
                <div className="row">
                    <div className="twelve columns collapsed">
                        <div className="project-cards-container">
                            {projects.map(project => (
                                <div className="project-card" key={project.id}>
                                    <div className="project-content">
                                        <h3 className="project-title">{project.title}</h3>
                                        <ul>
                                            {
                                                project.descriptions && project.descriptions.map((description) => (
                                                <li>
                                                    {description}
                                                </li>
                                                ))
                                            }
                                        </ul>
                                        <div className="project-tech-stack">
                                            {
                                                project.techStack && project.techStack.map((tech) => (
                                                    <span className="tech-item">{tech}</span>
                                                ))
                                            }
                                        </div>
                                        
                                        <div className="project-footer">
                                            <div className="project-links">
                                                {project.github && (
                                                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                                                        <FaGithub size={20}/> GitHub
                                                    </a>
                                                )}
                                                {project.live && (
                                                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                                                        <FaExternalLinkAlt size={20}/> Live Demo
                                                    </a>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default WorkProjects;
