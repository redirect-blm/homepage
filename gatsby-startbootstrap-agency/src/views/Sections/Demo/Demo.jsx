import React from "react";
import PropTypes from "prop-types";

import { Row, Col } from "react-bootstrap";
import DemoContent from "components/DemoContent";
import SectionHeader from "components/SectionHeader";
import PageSection from "components/PageSection";
import "./Demo.scss";

const Demo = ({ className, frontmatter }) => {
  if (!frontmatter) {
    return null;
  }

  const {
    anchor,
    header: rootHeader,
    subheader: rootSubHeader,
    content: rootContent,
    demoContent,
  } = frontmatter;

  return (
    <PageSection className={className} id={anchor}>
      <Row>
        <SectionHeader header={rootHeader} subheader={rootSubHeader} />
      </Row>
      <Row>
        {demoContent.map(({ header, ...tmProps }) => (
          <Col sm={4} key={header}>
            <DemoContent header={header} {...tmProps} />
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

Demo.propTypes = {
  className: PropTypes.string,
  frontmatter: PropTypes.object,
};

Demo.defaultProps = {
  className: null,
  frontmatter: null,
};

export default Demo;
