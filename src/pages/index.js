import React from 'react'
import IndexHeader from '../components/index/header';
import IndexAboutMe from '../components/index/about-me';
import IndexProjects from '../components/index/projects';
import Footer from '../components/footer';

const IndexPage = () => (
  <div className='index-root'>
    <IndexHeader />
    <IndexAboutMe />
    <IndexProjects />
    <Footer />
  </div>
)

export default IndexPage;