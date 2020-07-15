import React from "react";
import PropTypes from "prop-types";

import { Row, Col } from "react-bootstrap";
import EthicsContent from "components/EthicsContent";
import SectionHeader from "components/SectionHeader";
import PageSection from "components/PageSection";
import "./Ethics.scss";

const Ethics = ({ className, frontmatter }) => {
  if (!frontmatter) {
    return null;
  }

  const {
    anchor,
    header: rootHeader,
    subheader: rootSubHeader,
    content: rootContent,
    ethicsContent,
  } = frontmatter;

  return (
    <PageSection className={className} id={anchor}>
      <Row>
        <SectionHeader header={rootHeader} subheader={rootSubHeader} />
      </Row>
      <Row>
        {ethicsContent.map(({ header, ...tmProps }) => (
          <Col sm={4} key={header}>
            <EthicsContent header={header} {...tmProps} />
          </Col>
        ))}
      </Row>
      <Row>
        <Col lg={8} className="mx-auto text-center">
          <p className="large text-muted">{rootContent}</p>
        </Col>
      </Row>
    </PageSection>
  );
};

Ethics.propTypes = {
  className: PropTypes.string,
  frontmatter: PropTypes.object,
};

Ethics.defaultProps = {
  className: null,
  frontmatter: null,
};

export default Ethics;
