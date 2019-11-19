import React from 'react';
import axios from 'axios';
import BrandonTextRegular from '../fonts/BrandonText-Regular.otf';
import BrandonTextMedium from '../fonts/BrandonText-Medium.otf';
import BrandonTextBold from '../fonts/BrandonText-Bold.otf';
import GalleryImage from './GalleryImage.jsx';
import ImageModal from './ImageModal.jsx';

const GlobalStyle = styled.createGlobalStyle`
  @font-face {
    font-family: Brandon-Text-Regular;
    src: url('${BrandonTextRegular}') format('opentype');
  }
  @font-face {
    font-family: Brandon-Text-Medium;
    src: url('${BrandonTextMedium}') format('opentype');
  }
  @font-face {
    font-family: Brandon-Text-Bold;
    src: url('${BrandonTextBold}') format('opentype');
  }
`;

const Gallery = window.styled.div`
  width: fit-content;
  height: fit-content;
  display: flex;
  margin-left: auto;
  margin-right: auto;
  background-color: #2d333f;
`;

class BannerGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      modal: null,
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.changeLeftModal = this.changeLeftModal.bind(this);
    this.changeRightModal = this.changeRightModal.bind(this);
  }

  componentDidMount() {
    let url = window.location.pathname;
    let restaurant = url.slice(1, -1);
    axios.get(`http://localhost:5000/api/restaurants/${restaurant}/images`)
      .then((res) => {
        this.setState({
          images: res.data
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  openModal(image) {
    this.setState({ modal: image });
  }

  closeModal(image) {
    this.setState({ modal: null });
  }

  changeLeftModal() {
    let images = this.state.images;
    let modal = this.state.modal;

    for (var i = 0; i < images.length; i++) {
      if (images[i].id === modal.id) {
        if (images[i - 1] !== undefined) {
          this.setState({ modal: images[i - 1] });
        }
      }
    }
  }

  changeRightModal() {
    let images = this.state.images;
    let modal = this.state.modal;

    for (var i = 0; i < images.length; i++) {
      if (images[i].id === modal.id) {
        if (images[i + 1] !== undefined) {
          this.setState({ modal: images[i + 1] });
        }
      }
    }
  }

  render() {
    return (
      <Gallery>
        <GlobalStyle />
        {this.state.modal &&
          <ImageModal
            image={this.state.modal}
            closeModal={this.closeModal}
            changeRightModal={this.changeRightModal}
            changeLeftModal={this.changeLeftModal}
          />
        }
        <div>
          {
            this.state.images.slice(0, 2).map((image, i) =>
              <GalleryImage
                key={i}
                imageSize={'small'}
                image={image}
                openModal={this.openModal}
              />)
          }
        </div>
        {
          this.state.images.slice(2, 4).map((image, i) =>
            <GalleryImage
              key={i}
              imageSize={'small'}
              image={image}
              openModal={this.openModal}
            />)
        }
        <div>
          {
            this.state.images.slice(4, 6).map((image, i) =>
              <GalleryImage
                key={i}
                imageSize={'small'}
                image={image}
                openModal={this.openModal}
              />)
          }
        </div>
        {
          this.state.images.slice(6, 8).map((image, i) =>
            <GalleryImage
              key={i}
              imageSize={'small'}
              image={image}
              openModal={this.openModal}
            />)
        }
        <div>
          {
            this.state.images.slice(8, 10).map((image, i) =>
              <GalleryImage
                key={i}
                imageSize={'small'}
                image={image}
                openModal={this.openModal}
              />)
          }
        </div>
        {
          this.state.images.slice(10, 12).map((image, i) =>
            <GalleryImage
              key={i}
              imageSize={'small'}
              image={image}
              openModal={this.openModal}
            />)
        }
        {/* {
          this.state.images.slice(9, 10).map((image, i) =>
            <GalleryImage
              key={i}
              imageSize={'small'}
              image={image}
              openModal={this.openModal}
            />)
        }
        {
          this.state.images.slice(10, 11).map((image, i) =>
            <GalleryImage
              key={i}
              imageSize={'small'}
              image={image}
              openModal={this.openModal}
            />)
        }
        {
          this.state.images.slice(11, 12).map((image, i) =>
            <GalleryImage
              key={i}
              imageSize={'small'}
              image={image}
              openModal={this.openModal}
            />)
        } */}
      </Gallery>
    );
  }
}

export default BannerGallery;