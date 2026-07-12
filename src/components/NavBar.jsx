import { Button, Col, Image, Row } from "antd";
import "../styles/NavBar.css";
import FlowLineLogo from "../assets/list.png";
import { PlusSquareFilled } from "@ant-design/icons";
import { useLocation, useNavigate } from "react-router";

const Navbar = ({ onAddTask }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const currRoute = location.pathname;
  return (
    <Row className="navbar-container">
      <Col
        className="logo"
        xs={{ span: 12, order: 1 }}
        md={{ span: 7, order: 1 }}
        xl={{ span: 8, order: 1 }}
      >
        <Image width={50} src={FlowLineLogo} alt="Flowline Logo" />
        <div>Flowline</div>
      </Col>
      <Col
        className="navigate-tabs"
        xs={{ span: 24, order: 3 }}
        md={{ span: 12, order: 2 }}
        xl={{ span: 8, order: 2 }}
      >
        <div className="btn-wrapper">
          <Button
            className={`tab-btn all ${currRoute === "/" ? "active" : ""}`}
            size="medium"
            onClick={() => navigate("/")}
          >
            All Tasks
          </Button>
          <Button
            className={`tab-btn completed ${currRoute === "/completed" ? "active" : ""}`}
            size="medium"
            onClick={() => navigate("/completed")}
          >
            Completed Tasks
          </Button>
        </div>
      </Col>
      <Col
        className="new-task-btn-container"
        xs={{ span: 12, order: 2 }}
        md={{ span: 5, order: 3 }}
        xl={{ span: 8, order: 3 }}
      >
        <Button
          size="large"
          className="new-task-btn"
          type="primary"
          icon={<PlusSquareFilled />}
          onClick={onAddTask}
        >
          New
        </Button>
      </Col>
    </Row>
  );
};

export default Navbar;
