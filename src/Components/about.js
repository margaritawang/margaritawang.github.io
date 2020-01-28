import React from 'react';
import Margarita from '../images/1571475410.jpg';
import {FaDownload} from "react-icons/fa";
import { Flex, Box, Link, Image, Button } from "rebass";

export default () => (
        <Flex id="about" bg="primary">
                <Box width={1/3} className="three columns">
                    <Image src={Margarita} alt="Margarita Profile Pic" sx={{
    width: [ '100%', '50%' ],
    borderRadius: '50%',
  }}/>
                </Box>
                <Box width={2/3} className="nine columns main-col">
                    <h2>About Me</h2>

                    <p>Experience in building full-stack web apps, familiar with JavaScript, Ruby, Matlab, C and SQL. I meditate by building virtual architectures, creating smoother user interface and solving new problems each day. A dedicated team player and a solution-oriented team leader. Kept awake by coffee, quality food, pep talks and ideas that fuel imagination.</p>
                    <h2>Contact Details</h2>
                    <Flex>
                    <Box width={1/2}>
                                <span>Margarita Wang</span><br />
                                <span>
                                    San Francisco, California
                   </span><br />
                                <span>4159104137</span><br />
                                <span>margaritaawang@gmail.com</span>
                        </Box>
                        <Box width={1/2}>
                            <Link href="https://resume.creddle.io/resume/2wzomyp8z1o" target="_blank" rel="noopener noreferrer"><Button variant="primary"><i><FaDownload/></i>Download Resume</Button></Link>
                        </Box>
                    </Flex>     
                </Box>
        </Flex>
    );