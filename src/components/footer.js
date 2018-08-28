import React from 'react'
import { Container, Row, Col } from 'reactstrap'

const Footer = () => (
    <div className='footer'>
        <Container>
            <Row>
                <Col md='12' className='text-center'>
                    <p>&copy; {new Date().getFullYear()} Gabe Nu&ntilde;ez - Thanks for reaching the footer :D</p>
                </Col>
            </Row>
        </Container>
    </div>
)

export default Footer;
