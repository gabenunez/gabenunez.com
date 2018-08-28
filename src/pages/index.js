import React from 'react'
import IndexHeader from '../components/index/header';
import IndexAboutMe from '../components/index/about-me';
import IndexProjects from '../components/index/projects';

const IndexPage = () => (
  <div className='index-root'>
    <IndexHeader />
    <IndexAboutMe />
    <IndexProjects />
  </div>
)

export default IndexPage;