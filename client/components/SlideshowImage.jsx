import React from 'react';
import ImageFooter from './ImageFooter.jsx';

const Image = window.styled.img`
  width: 526px;
  margin: 0 32px 0 32px;
`;

const SlideshowImage = ({ image, openReportImagePopup }) => {
  const ImageContainer = styled.div`
    margin: ${image.user_submit ? '0 0 14px 0' : '14px 0 14px 0'}
  `;

  return (
    <ImageContainer image={image}>
      <Image src={image.image_url}></Image>
      <ImageFooter
        image={image}
        openReportImagePopup={openReportImagePopup}
      />
    </ImageContainer>
  );
};

export default SlideshowImage;