import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import nvidia from "../assets/icons/nvidia.png";

import "../Components/Components-style/Certificate.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
const Certificate = () => {
  return (
    <>
      <Row className="heading certificate-heading">
        <Col xxl={6} xl={6} lg={6} md={6} sm={6} xs={6}>
          <h2>Certificates</h2>
        </Col>
      </Row>
      <Row className="certificate">
        <Col xxl={6} xl={6} lg={6} md={6} sm={6} xs={6} className="content">
          <div className="logo">
            <a href="">
              <img src={nvidia} className="gradient-boder" />
            </a>
          </div>
        </Col>
        <Col xxl={6} xl={6} lg={6} md={6} sm={6} xs={6} className="content">
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
              sunt quos quaerat labore inventore earum a magni aliquid doloribus
              placeat?
            </p>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Certificate;
