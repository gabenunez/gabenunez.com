import React from 'react'
import { Jumbotron, Container, Row, Col } from 'reactstrap'
import Link from 'gatsby-link'
import {Helmet} from "react-helmet";

const NotFoundPage = () => (
  <Container className='align-items-center h-100'>

    <Helmet>
      <title>404 | Gabe Nunez</title>
      <meta name="description" content="404 Page... Sorry :(... maybe this page will exist one day?" />
      <meta name="robots" content="noindex" />
    </Helmet>

    <Row>
      <Col md='12' className='text-center'>
        <div className='error-box'>
          <h1>404 NOT FOUND</h1>
          <p>Maybe... just maybe... you should <Link
          to="/">go to the homepage?</Link></p>
        </div>
      </Col>
    </Row>
  </Container>
)

export default NotFoundPage
