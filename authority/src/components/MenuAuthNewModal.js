import React, { useState , useEffect} from "react";
import Modal from "react-bootstrap/Modal";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { API_URL } from "../utils/api";

function MenuAuthNewModal(props) {
  const [formData, setFormData] = useState({
    menuIndexNo: "",
    gradeIndexNo: "",
    searchAuthority: "",
    saveAuthority: "",
    excelAuthority: "",
    deleteAuthority: "",
    fn1Authority: "",
    fn2Authority: "",
    fn3Authority: "",
    fn4Authority: "",
    fn5Authority: "",
  });
  useEffect(()=>{
    setFormData({...formData,menuIndexNo:props.menuIndexNo})
  },[props.menuIndexNo])
  return (
    <Modal
      show={props.show}
      onHide={props.onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>신규저장</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <InputGroup>
          <InputGroup.Text id="basic-addon1">
            {"권한 그룹 인덱스 번호"}
          </InputGroup.Text>
          <Form.Control
            type="text"
            value={formData.gradeIndexNo}
            aria-label="Username"
            aria-describedby="basic-addon1"
            style={{ border: "1px solid #e7e1e1", marginRight: "10px" }}
            onChange={(e) => {
              setFormData({ ...formData, gradeIndexNo: e.target.value });
            }}
          />
        </InputGroup>
        <InputGroup>
          <InputGroup.Text id="basic-addon1">{"검색권한"}</InputGroup.Text>
          <Form.Control
            type="text"
            value={formData.searchAuthority}
            aria-label="Username"
            aria-describedby="basic-addon1"
            style={{ border: "1px solid #e7e1e1", marginRight: "10px" }}
            onChange={(e) => {
              setFormData({ ...formData, searchAuthority: e.target.value });
            }}
          />
        </InputGroup>
        <InputGroup>
          <InputGroup.Text id="basic-addon1">{"저장권한"}</InputGroup.Text>
          <Form.Control
            type="text"
            value={formData.saveAuthority}
            aria-label="Username"
            aria-describedby="basic-addon1"
            style={{ border: "1px solid #e7e1e1", marginRight: "10px" }}
            onChange={(e) => {
              setFormData({ ...formData, saveAuthority: e.target.value });
            }}
          />
        </InputGroup>
        <InputGroup>
          <InputGroup.Text id="basic-addon1">{"엑셀권한"}</InputGroup.Text>
          <Form.Control
            type="text"
            value={formData.excelAuthority}
            aria-label="Username"
            aria-describedby="basic-addon1"
            style={{ border: "1px solid #e7e1e1", marginRight: "10px" }}
            onChange={(e) => {
              setFormData({ ...formData, excelAuthority: e.target.value });
            }}
          />
        </InputGroup>
        <InputGroup>
          <InputGroup.Text id="basic-addon1">{"삭제권한"}</InputGroup.Text>
          <Form.Control
            type="text"
            value={formData.deleteAuthority}
            aria-label="Username"
            aria-describedby="basic-addon1"
            style={{ border: "1px solid #e7e1e1", marginRight: "10px" }}
            onChange={(e) => {
              setFormData({ ...formData, deleteAuthority: e.target.value });
            }}
          />
        </InputGroup>
        <InputGroup>
          <InputGroup.Text id="basic-addon1">{"기타권한1"}</InputGroup.Text>
          <Form.Control
            type="text"
            value={formData.fn1Authority}
            aria-label="Username"
            aria-describedby="basic-addon1"
            style={{ border: "1px solid #e7e1e1", marginRight: "10px" }}
            onChange={(e) => {
              setFormData({ ...formData, fn1Authority: e.target.value });
            }}
          />
        </InputGroup>
        <InputGroup>
          <InputGroup.Text id="basic-addon1">{"기타권한2"}</InputGroup.Text>
          <Form.Control
            type="text"
            value={formData.fn2Authority}
            aria-label="Username"
            aria-describedby="basic-addon1"
            style={{ border: "1px solid #e7e1e1", marginRight: "10px" }}
            onChange={(e) => {
              setFormData({ ...formData, fn2Authority: e.target.value });
            }}
          />
        </InputGroup>
        <InputGroup>
          <InputGroup.Text id="basic-addon1">{"기타권한3"}</InputGroup.Text>
          <Form.Control
            type="text"
            value={formData.fn3Authority}
            aria-label="Username"
            aria-describedby="basic-addon1"
            style={{ border: "1px solid #e7e1e1", marginRight: "10px" }}
            onChange={(e) => {
              setFormData({ ...formData, fn3Authority: e.target.value });
            }}
          />
        </InputGroup>
        <InputGroup>
          <InputGroup.Text id="basic-addon1">{"기타권한4"}</InputGroup.Text>
          <Form.Control
            type="text"
            value={formData.fn4Authority}
            aria-label="Username"
            aria-describedby="basic-addon1"
            style={{ border: "1px solid #e7e1e1", marginRight: "10px" }}
            onChange={(e) => {
              setFormData({ ...formData, fn4Authority: e.target.value });
            }}
          />
        </InputGroup>
        <InputGroup>
          <InputGroup.Text id="basic-addon1">{"기타권한5"}</InputGroup.Text>
          <Form.Control
            type="text"
            value={formData.fn5Authority}
            aria-label="Username"
            aria-describedby="basic-addon1"
            style={{ border: "1px solid #e7e1e1", marginRight: "10px" }}
            onChange={(e) => {
              setFormData({ ...formData, fn5Authority: e.target.value });
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
            const sendData = new FormData();
            sendData.append(
              "menuGrade",
              new Blob([JSON.stringify(formData)], { type: "application/json" })
            );

            axios
              .post(API_URL + "/menuGrade", sendData, {
                headers: { "content-type": "multipart/form-data" },
              })
              .then((result) => {props.onHide()})
              .catch((err) => {});
          }}
        >
          신규 저장
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default MenuAuthNewModal;
