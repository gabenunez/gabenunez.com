import React from 'react'
import { Col } from 'reactstrap'

class ProjectCard extends React.Component {
    formatTags(tags) {
        const listItems = tags.map((tag) =>
            <span key={tag}>{tag}</span>
        );

        return listItems
    }

    render() {
        return (
            <Col md='4' className='project-col'>
                <div className='card h-100'>
                    <div className='card-body d-flex flex-column'>
                        <h5 className='card-title'>{this.props.name}</h5>
                        <p className='card-text'>{this.props.desc}</p>
                        <div className='mt-auto'>
                            <a href={this.props.link} className='btn btn-info'>{this.props.buttonText ? this.props.buttonText : 'View Github Project'}</a>
                            <div className='works-tags'>
                                {this.props.tags ? this.formatTags(this.props.tags) : ''}
                            </div>
                        </div>
                    </div>
                </div>
            </Col>
        )
    }

}

export default ProjectCard;