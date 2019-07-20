import React from 'react';
import { FaLink } from 'react-icons/fa';

const Portfolio = ({ data }) => {
    const { projects } = data;
    const renderProjects = projects.map((project) => {
        const projectImage = `/images/${project.image}`;
        return (
            <div key={project.title} className="columns portfolio-item">
                <div className="item-wrap">
                    <a href={project.url} title={project.title}>
                        <img alt={project.title} src={projectImage} />
                        <div className="overlay">
                            <div className="portfolio-item-meta">
                                <h5>{project.title}</h5>
                                <p>{project.category}</p>
                            </div>
                        </div>
                        <div className="link-icon"><i className="fa"><FaLink/></i></div>
                    </a>
                </div>
            </div>
        )
    });

    return (
        <section id="portfolio">
            <div className="row">
                <div className="twelve columns collapsed">
                    <h1>Check Out Some of My Works.</h1>
                    <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                        {renderProjects}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;