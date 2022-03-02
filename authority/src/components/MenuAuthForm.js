import React, { useState, useEffect } from "react";
import { API_URL } from "../utils/api";
import axios from "axios";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
function MenuAuthForm() {
  const [formData, setFormData] = useState({
    programCode: "",
    programKorea: "",
    programEnglish: "",
    programName: "",
  });

  useEffect(() => {
    axios
      .get(API_URL + "/program")
      .then((response) => {
        setFormData(response.data);
      })
      .catch((err) => {});
  }, []);

  return (
    <>
      <InputGroup>
        <InputGroup.Text id="basic-addon1">{"프로그램 코드"}</InputGroup.Text>
        <Form.Control
          type="text"
          value={formData.programCode}
          aria-label="Username"
          aria-describedby="basic-addon1"
          style={{ border: "1px solid #e7e1e1", marginRight: "10px" }}
          onChange={(e) => {}}
        />
      </InputGroup>
      <InputGroup>
        <InputGroup.Text id="basic-addon1">
          {"다국어 설정(한국어)"}
        </InputGroup.Text>
        <Form.Control
          type="text"
          value={formData.programKorea}
          aria-label="Username"
          aria-describedby="basic-addon1"
          style={{ border: "1px solid #e7e1e1", marginRight: "10px" }}
          onChange={(e) => {}}
        />
        <InputGroup.Text id="basic-addon1">
          {"다국어 설정(영어)"}
        </InputGroup.Text>
        <Form.Control
          type="text"
          value={formData.programEnglish}
          aria-label="Username"
          aria-describedby="basic-addon1"
          style={{ border: "1px solid #e7e1e1", marginRight: "10px" }}
          onChange={(e) => {}}
        />
      </InputGroup>
      <InputGroup>
        <InputGroup.Text id="basic-addon1">{"프로그램명"}</InputGroup.Text>
        <Form.Control
          type="text"
          value={formData.programName}
          aria-label="Username"
          aria-describedby="basic-addon1"
          style={{ border: "1px solid #e7e1e1", marginRight: "10px" }}
          onChange={(e) => {}}
        />
      </InputGroup>
    </>
  );
}

export default MenuAuthForm;
