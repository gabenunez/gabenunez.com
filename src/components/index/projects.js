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
                    name='ImageFisher 🎣'
                    desc='A Zendesk app that runs a reverse image search on all image attachments from the requester of a ticket.'
                    link='https://github.com/gabenunez/imagefisher/'
                    tags={['Preact', 'Node.js', 'Web Scraping', 'HTML', 'CSS']}
                />
                <ProjectCard
                    name='Stock vs Trend'
                    desc='Web application that allows you to directly compare Stock pricing and Google Trends data!'
                    link='https://github.com/gabenunez/StockvsTrend'
                    tags={['React', 'Redux', 'Node.js', 'Axios']}
                    liveProject='https://stockvstrend.herokuapp.com/'
                />
                <ProjectCard
                    name='Prosoft Engineering, Inc.'
                    desc='Company website built completely from the ground up, featuring many landing and product pages, an eCommerce solution, and more.'
                    buttonText='Visit Website'
                    link='https://web.archive.org/web/20190703082343/https://www.prosofteng.com/'
                    tags={['Jekyll', 'Bootstrap', 'SASS', 'JQuery', 'Wordpress', 'WooCommerce']}
                />
            </Row>
        </Container>
    </div>
)

export default Works;
