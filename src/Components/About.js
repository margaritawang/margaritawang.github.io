import React from 'react';
import Margarita from '../images/1571475410.jpg';
import {FaDownload} from "react-icons/fa";

const About = ({data}) => {
    const {name, bio, address, phone, email, resumeDownload} = data;

    return (
        <section id="about">
            <div className="row">
                <div className="three columns">
                    <img className="profile-pic" src={Margarita} alt="Tim Baker Profile Pic" />
                </div>
                <div className="nine columns main-col">
                    <h2>About Me</h2>

                    <p>{bio}</p>
                    <div className="row">
                        <div className="columns contact-details">
                            <h2>Contact Details</h2>
                            <p className="address">
                                <span>{name}</span><br />
                                <span>
                                    {address.city} {address.state}, {address.zip}
                   </span><br />
                                <span>{phone}</span><br />
                                <span>{email}</span>
                            </p>
                        </div>
                        <div className="columns download">
                            <p>
                                <a href={resumeDownload} className="button" target="_blank"><i><FaDownload/></i>Download Resume</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;