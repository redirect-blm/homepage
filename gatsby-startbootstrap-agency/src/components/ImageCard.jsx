import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import { Container, Card } from "react-bootstrap";
// import Image from "components/Image";
import "./ImageCard.scss";


// Add a background image to the hero box by uncommenting: 
  // import Image 
  // the parameters in the ImageCard function
  // the image tag (remember to remove the {} around the image tag as these just allow for comments in jsx) 
  // ImageCard.proptypes corresponding to the parameters
  // ImageCard.defaultProps correspoinding to the parameters 
// Add your desired background image to assets/images


const ImageCard = ({ className, header, subheader, extraInfo/* , imageFileName, imageAlt */ }) => {
  return (
    <Card className={clsx("image-card bg-dark text-white text-center", className)}>
      {
      // <Image className="image" fileName={imageFileName} alt={imageAlt || header || subheader} />
      }
      <Card.ImgOverlay className="no-padding">
        <Container>
          <div className="intro-text">
            <div className="intro-lead-in">{subheader}</div>
            <div className="intro-heading text-uppercase">{header}</div>
            {extraInfo}
          </div>
        </Container>
      </Card.ImgOverlay>
    </Card>
  );
};

ImageCard.propTypes = {
  className: PropTypes.string,
  // imageFileName: PropTypes.string,
  // imageAlt: PropTypes.string,
  header: PropTypes.string,
  subheader: PropTypes.string,
  extraInfo: PropTypes.any,
};

ImageCard.defaultProps = {
  className: null,
  // imageFileName: null,
  // imageAlt: null,
  header: "",
  subheader: "",
  extraInfo: null,
};

export default ImageCard;
