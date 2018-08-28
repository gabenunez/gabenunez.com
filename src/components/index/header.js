import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import Popup from 'react-youtube-modal'

import me from '../../images/me.jpg'

const IndexHeader = () => (
    <div className='IndexHeader'>
        <Container>
            <Row>
                <Col md='12' className='index-header-content'>
                    <h1>Hey there, I'm Gabe!</h1>
                    <p>By day, I'm a web developer and student in the San Francisco Bay Area. By night, I'm still a web developer (who of course fancies the little things in life, like spending time with my Girlfriend 👫 and Dungeons &amp; Dragons 🎲).</p>
                </Col>
            </Row>
            <Row>
                <Col md='12' className='index-header-content'>
                    <h5>Email me business inquiries and memes: <a href='mailto:gabe@gabenunez.com'>gabe@gabenunez.com</a></h5>
                </Col>
            </Row>
        </Container>
    </div>
)

export default IndexHeader;
