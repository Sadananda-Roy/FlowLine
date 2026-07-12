import { Button, Col, Image, Row } from "antd";
import "../styles/NavBar.css";
import FlowLineLogo from "../assets/FlowLineLogo_Large.png";
import { PlusSquareFilled } from "@ant-design/icons";
import { useLocation, useNavigate } from "react-router";

const Navbar = ({ onAddTask }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const currRoute = location.pathname;
  return (
    <Row className="navbar-container">
      <Col className="logo">
        <Image width={60} src={FlowLineLogo} alt="Flowline Logo" />
        <h1>Flowline</h1>
      </Col>
      <Col className="navigate-tabs">
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
      </Col>
      <Col>
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
