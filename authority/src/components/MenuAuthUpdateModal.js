import React from "react";
import Modal from "react-bootstrap/Modal";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function MenuAuthUpdateModal(props) {
  return (
    <Modal
      show={props.show}
      onHide={props.onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>권한 업데이트</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <InputGroup>
          <InputGroup.Text id="basic-addon1">{"권한 그룹명"}</InputGroup.Text>
          <Form.Control
            type="text"
            value={""}
            aria-label="Username"
            aria-describedby="basic-addon1"
            style={{ border: "1px solid #e7e1e1", marginRight: "10px" }}
            onChange={(e) => {}}
          />
        </InputGroup>
        <InputGroup>
          <InputGroup.Text id="basic-addon1">{"프로그램 코드"}</InputGroup.Text>
          <Form.Control
            type="text"
            value={""}
            aria-label="Username"
            aria-describedby="basic-addon1"
            style={{ border: "1px solid #e7e1e1", marginRight: "10px" }}
            onChange={(e) => {}}
          />
        </InputGroup>
        <InputGroup>
          <InputGroup.Text id="basic-addon1">{"프로그램 코드"}</InputGroup.Text>
          <Form.Control
            type="text"
            value={""}
            aria-label="Username"
            aria-describedby="basic-addon1"
            style={{ border: "1px solid #e7e1e1", marginRight: "10px" }}
            onChange={(e) => {}}
          />
        </InputGroup>
        <InputGroup>
          <InputGroup.Text id="basic-addon1">{"프로그램 코드"}</InputGroup.Text>
          <Form.Control
            type="text"
            value={""}
            aria-label="Username"
            aria-describedby="basic-addon1"
            style={{ border: "1px solid #e7e1e1", marginRight: "10px" }}
            onChange={(e) => {}}
          />
        </InputGroup>
        <InputGroup>
          <InputGroup.Text id="basic-addon1">{"프로그램 코드"}</InputGroup.Text>
          <Form.Control
            type="text"
            value={""}
            aria-label="Username"
            aria-describedby="basic-addon1"
            style={{ border: "1px solid #e7e1e1", marginRight: "10px" }}
            onChange={(e) => {}}
          />
        </InputGroup>
        <InputGroup>
          <InputGroup.Text id="basic-addon1">{"프로그램 코드"}</InputGroup.Text>
          <Form.Control
            type="text"
            value={""}
            aria-label="Username"
            aria-describedby="basic-addon1"
            style={{ border: "1px solid #e7e1e1", marginRight: "10px" }}
            onChange={(e) => {}}
          />
        </InputGroup>
        <InputGroup>
          <InputGroup.Text id="basic-addon1">{"프로그램 코드"}</InputGroup.Text>
          <Form.Control
            type="text"
            value={""}
            aria-label="Username"
            aria-describedby="basic-addon1"
            style={{ border: "1px solid #e7e1e1", marginRight: "10px" }}
            onChange={(e) => {}}
          />
        </InputGroup>
        <InputGroup>
          <InputGroup.Text id="basic-addon1">{"프로그램 코드"}</InputGroup.Text>
          <Form.Control
            type="text"
            value={""}
            aria-label="Username"
            aria-describedby="basic-addon1"
            style={{ border: "1px solid #e7e1e1", marginRight: "10px" }}
            onChange={(e) => {}}
          />
        </InputGroup>
        <InputGroup>
          <InputGroup.Text id="basic-addon1">{"프로그램 코드"}</InputGroup.Text>
          <Form.Control
            type="text"
            value={""}
            aria-label="Username"
            aria-describedby="basic-addon1"
            style={{ border: "1px solid #e7e1e1", marginRight: "10px" }}
            onChange={(e) => {}}
          />
        </InputGroup>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.onHide}>
          Close
        </Button>
        <Button variant="primary">권한 수정</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default MenuAuthUpdateModal;
