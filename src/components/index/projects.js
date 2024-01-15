import React from 'react'
import ProjectCard from './project-card'
import { Container, Row, Col } from 'reactstrap'

const Works = () => (
  <div className="IndexProjects">
    <Container>
      <Row>
        <Col md="12">
          <h2>My Projects</h2>
          <p>Here are some examples of some projects I've worked on!</p>
        </Col>
      </Row>
      <Row className="row-eq-height">
        <ProjectCard
          name="Zinus.com"
          desc="Completely written from the ground up, as the sole developer, I created this masterpiece! :)"
          archivedProject="https://web.archive.org/web/20221001053203/https://www.zinus.com/"
          tags={['React', 'Node.js', 'Express', 'HTML', 'CSS']}
        />
        <ProjectCard
          name="ImageFisher 🎣"
          desc="A Zendesk app that runs a reverse image search on all image attachments from the requester of a ticket."
          link="https://github.com/gabenunez/imagefisher/"
          tags={['Preact', 'Node.js', 'Web Scraping', 'HTML', 'CSS']}
        />
        <ProjectCard
          name="Trendies.fyi"
          desc="Web application that allows you to directly compare Stock pricing and Google Trends data!"
          link="https://github.com/gabenunez/Trendies.fyi"
          tags={['Next.js', 'React', 'Node.js', 'REST APIs']}
          liveProject="https://trendies.fyi/"
        />
      </Row>
      <Row className="row-eq-height">
        <ProjectCard
          name="Slice O' Pizza 🍕"
          desc="Full stack app that gets all the latest and greatest pizza newsletters on the same page so you can find the best deal!"
          link="https://github.com/gabenunez/slice/"
          tags={['React', 'Node.js', 'PostgreSQL']}
        />
      </Row>
    </Container>
  </div>
)

export default Works
