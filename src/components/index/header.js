import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import DnDmodal from './dnd-modal'

const IndexHeader = () => (
  <div className="IndexHeader">
    <Container>
      <Row>
        <Col md="12" className="index-header-content">
          <h1>
            Hey there, I'm Gabe! <br className="d-md-none" />
            <span>(and I'm currently working at ▲ Vercel )</span>
          </h1>

          <p>
            By day, I'm a Customer Success Engineer in the San Francisco Bay
            Area. By night, I'm still an Engineer (who of course fancies the
            little things in life, like playing{' '}
            <DnDmodal text="Dungeons &amp; Dragons 🎲" />
            ).
          </p>
        </Col>
      </Row>
      <Row>
        <Col md="12" className="index-header-content">
          <h5>
            Email me business inquiries and memes:{' '}
            <a href="mailto:gabe@gabenunez.com">gabe@gabenunez.com</a>
          </h5>
          <h6>
            Other fantastic links:{' '}
            <a href="https://github.com/gabenunez/">Github</a> |{' '}
            <a href="https://www.linkedin.com/in/gabenunez/">LinkedIn</a>
          </h6>
        </Col>
      </Row>
    </Container>
  </div>
)

export default IndexHeader
