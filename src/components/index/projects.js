import React from 'react'
import ProjectCard from './project-card';
import { Container, Row, Col } from 'reactstrap'

const Works = () => (
    <div className='IndexProjects'>
        <Container>
            <Row>
                <Col md='12'>
                    <h2>My Projects</h2>
                    <p>Here are some examples of some projects I've worked on!</p>
                </Col>
            </Row>
            <Row className='row-eq-height'>
                <ProjectCard
                    name='Prosoft Engineering, Inc.'
                    desc='Company website built completely from the ground up, featuring many landing and product pages, an eCommerce solution, and more.'
                    buttonText='Visit Website'
                    link='https://www.prosofteng.com/'
                    tags={['Jekyll', 'Bootstrap', 'SASS', 'JQuery', 'Wordpress', 'WooCommerce']}
                />
                <ProjectCard
                    name='Stock vs Trend'
                    desc='Web application that allows you to directly compare Stock pricing and Google Trends data!'
                    link='https://github.com/gabenunez/StockvsTrend'
                    tags={['React', 'Redux', 'Node.js', 'Axios']}
                    liveProject='https://stockvstrend.herokuapp.com/'
                />
                <ProjectCard
                    name='Codex (Discord Bot)'
                    desc='Dungeons &amp; Dragons discord bot I worked on, which provides Spell Lookups through an API and dice rolling!'
                    link='https://github.com/gabenunez/codex'
                    tags={['Discord.js', 'Node.js']}
                />
            </Row>
        </Container>
    </div>
)

export default Works;
