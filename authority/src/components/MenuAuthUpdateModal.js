import React from "react";
import Modal from "react-bootstrap/Modal";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { API_URL } from "../utils/api";

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
          <InputGroup.Text id="basic-addon1">{"검색권한"}</InputGroup.Text>
          <Form.Control
            type="text"
            value={props.targetData.searchAuthority}
            aria-label="Username"
            aria-describedby="basic-addon1"
            style={{ border: "1px solid #e7e1e1", marginRight: "10px" }}
            onChange={(e) => {
              props.setTargetData({
                ...props.targetData,
                searchAuthority: e.target.value,
              });
            }}
          />
        </InputGroup>
        <InputGroup>
          <InputGroup.Text id="basic-addon1">{"저장권한"}</InputGroup.Text>
          <Form.Control
            type="text"
            value={props.targetData.saveAuthority}
            aria-label="Username"
            aria-describedby="basic-addon1"
            style={{ border: "1px solid #e7e1e1", marginRight: "10px" }}
            onChange={(e) => {
              props.setTargetData({
                ...props.targetData,
                saveAuthority: e.target.value,
              });
            }}
          />
        </InputGroup>
        <InputGroup>
          <InputGroup.Text id="basic-addon1">{"엑셀권한"}</InputGroup.Text>
          <Form.Control
            type="text"
            value={props.targetData.excelAuthority}
            aria-label="Username"
            aria-describedby="basic-addon1"
            style={{ border: "1px solid #e7e1e1", marginRight: "10px" }}
            onChange={(e) => {
              props.setTargetData({
                ...props.targetData,
                excelAuthority: e.target.value,
              });
            }}
          />
        </InputGroup>
        <InputGroup>
          <InputGroup.Text id="basic-addon1">{"삭제권한"}</InputGroup.Text>
          <Form.Control
            type="text"
            value={props.targetData.deleteAuthority}
            aria-label="Username"
            aria-describedby="basic-addon1"
            style={{ border: "1px solid #e7e1e1", marginRight: "10px" }}
            onChange={(e) => {
              props.setTargetData({
                ...props.targetData,
                deleteAuthority: e.target.value,
              });
            }}
          />
        </InputGroup>
        <InputGroup>
          <InputGroup.Text id="basic-addon1">{"기타권한1"}</InputGroup.Text>
          <Form.Control
            type="text"
            value={props.targetData.fn1Authority}
            aria-label="Username"
            aria-describedby="basic-addon1"
            style={{ border: "1px solid #e7e1e1", marginRight: "10px" }}
            onChange={(e) => {
              props.setTargetData({
                ...props.targetData,
                fn1Authority: e.target.value,
              });
            }}
          />
        </InputGroup>
        <InputGroup>
          <InputGroup.Text id="basic-addon1">{"기타권한2"}</InputGroup.Text>
          <Form.Control
            type="text"
            value={props.targetData.fn2Authority}
            aria-label="Username"
            aria-describedby="basic-addon1"
            style={{ border: "1px solid #e7e1e1", marginRight: "10px" }}
            onChange={(e) => {
              props.setTargetData({
                ...props.targetData,
                fn2Authority: e.target.value,
              });
            }}
          />
        </InputGroup>
        <InputGroup>
          <InputGroup.Text id="basic-addon1">{"기타권한3"}</InputGroup.Text>
          <Form.Control
            type="text"
            value={props.targetData.fn3Authority}
            aria-label="Username"
            aria-describedby="basic-addon1"
            style={{ border: "1px solid #e7e1e1", marginRight: "10px" }}
            onChange={(e) => {
              props.setTargetData({
                ...props.targetData,
                fn3Authority: e.target.value,
              });
            }}
          />
        </InputGroup>
        <InputGroup>
          <InputGroup.Text id="basic-addon1">{"기타권한4"}</InputGroup.Text>
          <Form.Control
            type="text"
            value={props.targetData.fn4Authority}
            aria-label="Username"
            aria-describedby="basic-addon1"
            style={{ border: "1px solid #e7e1e1", marginRight: "10px" }}
            onChange={(e) => {
              props.setTargetData({
                ...props.targetData,
                fn4Authority: e.target.value,
              });
            }}
          />
        </InputGroup>
        <InputGroup>
          <InputGroup.Text id="basic-addon1">{"기타권한5"}</InputGroup.Text>
          <Form.Control
            type="text"
            value={props.targetData.fn5Authority}
            aria-label="Username"
            aria-describedby="basic-addon1"
            style={{ border: "1px solid #e7e1e1", marginRight: "10px" }}
            onChange={(e) => {
              props.setTargetData({
                ...props.targetData,
                fn5Authority: e.target.value,
              });
            }}
          />
        </InputGroup>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.onHide}>
          Close
        </Button>
        <Button
          variant="primary"
          onClick={() => {
            axios
              .put(API_URL + "/menuGrade", props.targetData)
              .then((result) => {props.onHide()})
              .catch((e) => {});
          }}
        >
          권한 수정
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default MenuAuthUpdateModal;
