import React from 'react';
import Modal from 'react-responsive-modal';

class DnDmodal extends React.Component {
  state = {
    open: false,
  };

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  render() {
    const { open } = this.state;
    return (
        <span>
            <span onClick={this.onOpenModal}>{this.props.text}</span>
            <Modal open={open} onClose={this.onCloseModal} center>
                <iframe style={{marginBottom: 0, marginTop: 30}} width='300' height='225'
                src="https://www.youtube.com/embed/zng5kRle4FA?rel=0&autoplay=1" frameBorder="0" allowFullScreen></iframe>
                <p className='text-center'>Ohohoh! You found this, enjoy!</p>
            </Modal>
        </span>
    );
  }
}

export default DnDmodal;