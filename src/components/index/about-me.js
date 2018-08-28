import React from 'react'
import { Container, Row, Col } from 'reactstrap'

import me from '../../images/me.jpg'

const IndexAboutMe = () => (
    <div className='IndexAboutMe'>
        <Container>
            <Row>
                <Col md='4' className='order-md-12'>
                    <img src={me} 
                        className='mx-auto d-block img-fluid' 
                        style={{borderRadius: '50%'}}
                        alt='Me, Gabe Nunez' 
                    />
                    <p className='text-center'><i>Hey, that's me!</i></p>
                </Col>
                <Col md='8' className='order-md-1'>
                <h2>A bit about me.</h2>
                <p>I've always had an obsession with computers, in fact, I still have a very distinct childhood memory when I burned my first CD using Rhapsody (Honestly, I couldn't stop smiling because of the pure excitement).</p>

                <p>As time went on in my life, another aspect of computing came into play, the internet. At the time (probably age 12 or so), I was fascinated with the real time feedback it provided from all across the world. From then on, I knew I wanted to be part of it and create something that was my own.</p>

                <p>Through the years, I created a couple blobs using Wordpress, Co-Operated an IRC Network, started my own eSports organization, and learned everything I could to make the things I dreamed of possible.</p>

                <p><strong>Fast Forward to Today:</strong> I have now been working as a web developer for 5+ years using the magic of HTML, CSS, PHP (mostly for Wordpress), and Javascript to serve millions of online users.</p>

                <p>And... I haven't stopped learning or figuring things out! I have learned React, SEO, A/B testing, how to use analytical tools, and new techniques to optimize web pages.</p>

                <p><strong><i>TLDR: I love the internet and everything it represents and have either created or helped create two handfuls of different online services, sometimes just for fun. I have an urge to continue learning new web technologies and want to leave an impact on the world around me using that knowledge.</i></strong> </p>
            
                </Col>
            </Row>
        </Container>
    </div>
)

export default IndexAboutMe;
