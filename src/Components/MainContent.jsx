import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import Certificate from "../Components/Certificate";

import "./Components-style/MainContent.css";
import linkedInImg from "../assets/icons/linkedin.svg";
import github from "../assets/icons/github.svg";
import my_image from "../assets/Images/my_image.jpeg";

import Resume from "../assets/Resume/Resume.pdf";

const MainContent = () => {
  const resumeUrl = Resume;
  const resumeDownloader = () => {
    const link = document.createElement("a");

    link.href = resumeUrl;
    link.download = "Christin V Ealiyas Resume.pdf";

    if ("download" in link) {
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      window.open(resumeUrl, "_blank");
    }
  };

  return (
    <>
      <Container fluid>
        <Row>
          <Col xxl={7} xl={7} lg={7} md={7} sm={7}>
            <div className="main-content-div">
              <div className="heading">
                <h3>Christin V Ealiyas</h3>
              </div>
              <div className="about">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Eveniet dolorem non, laboriosam accusantium rem quasi
                  excepturi nihil necessitatibus omnis alias doloremque nobis
                  dolore iure iusto rerum molestias debitis aperiam pariatur
                  adipisci neque corrupti commodi? Inventore accusantium quam
                  ipsum facere illo illum hic impedit esse necessitatibus
                  veritatis, alias ipsam et soluta.
                </p>
              </div>
              <div className="footer">
                <div className="icons-routes">
                  <a
                    href="https://www.linkedin.com/in/christinealiyas/"
                    target="_blank">
                    <img
                      src={linkedInImg}
                      alt="Linked In"
                      className="icon-image"
                    />
                  </a>
                  <a href="https://github.com/ChristinEaliyas" target="_blank">
                    <img src={github} alt="Linked In" className="icon-image" />
                  </a>
                </div>
                <div className="download-cv">
                  <button onClick={resumeDownloader}>
                    <span>Download Resume</span>
                  </button>
                </div>
              </div>
            </div>
            <Certificate />
          </Col>
          <Col xxl={5} xl={5} lg={5} md={5} sm={5}>
            <div className="image-wrapper">
              <img src={my_image} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default MainContent;
