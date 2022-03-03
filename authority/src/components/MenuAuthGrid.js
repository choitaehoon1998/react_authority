import React, { useState, useEffect } from "react";
import { DataGrid } from "axui-datagrid";
import "axui-datagrid/style.css";
import { API_URL } from "../utils/api";
import axios from "axios";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import MenuAuthNewModal from "./MenuAuthNewModal";
import MenuAuthUpdateModal from "./MenuAuthUpdateModal";
import "bootstrap/dist/css/bootstrap.css";

function MenuAuthGrid(props) {
  const [gridData, setGridData] = useState([]);
  const [targetData, setTargetData] = useState({});
  const [changeModalShow, setChangeModalShow] = useState(false);
  const [newModalShow, setNewModalShow] = useState(false);

  const handleChangeModalClose = () => setChangeModalShow(false);
  const handleChangeModalShow = () => setChangeModalShow(true);

  const handleNewModalClose = () => setNewModalShow(false);
  const handleNewModalShow = () => setNewModalShow(true);

  useEffect(() => {
    axios
      .get(API_URL + "/menuGrade/"+props.menuIndexNo)
      .then((response) => {
        setGridData(response.data);
      })
      .catch((err) => console.log(err));
  }, [props.menuIndexNo]);

  const columns = [
    { key: "gradeIndexNo", width: 100, label: "권한그룹명", align: "center" },
    {
      key: "searchAuthority",
      width: 150,
      label: "검색권한",
      align: "center",
    },
    {
      key: "saveAuthority",
      label: "저장권한",
      align: "center",
    },
    {
      key: "excelAuthority",
      label: "엑셀권한",
      align: "center",
    },
    {
      key: "deleteAuthority",
      label: "삭제권한",
      align: "center",
    },
    {
      key: "fn1Authority",
      width: 150,
      label: "기타권한1",
      align: "center",
    },
    {
      key: "fn2Authority",
      width: 150,
      label: "기타권한2",
      align: "center",
    },
    {
      key: "fn3Authority",
      width: 150,
      label: "기타권한3",
      align: "center",
    },
    {
      key: "fn4Authority",
      width: 150,
      label: "기타권한4",
      align: "center",
    },
    {
      key: "fn5Authority",
      width: 150,
      label: "기타권한5",
      align: "center",
    },
  ];

  const ldata = [];

  for (let i = 0; i < gridData.length; i++) {
    ldata.push({ value: gridData[i] });
  }

  return (
    <>
      <ButtonGroup aria-label="Basic example">
        <Button
          variant="outline-primary"
          onClick={() => {
            if (Object.keys(targetData).length === 0) {
              alert("수정할 목록을 선택해주세요");
            } else {
              handleChangeModalShow();
            }
          }}
        >
          수정
        </Button>
        <Button
          variant="outline-primary"
          onClick={() => {
            setTargetData({});
            handleNewModalShow();
          }}
        >
          신규
        </Button>
      </ButtonGroup>

      <MenuAuthNewModal
        show={newModalShow}
        onHide={handleNewModalClose}
        menuIndexNo = {props.menuIndexNo}
      ></MenuAuthNewModal>

      <MenuAuthUpdateModal
        show={changeModalShow}
        onHide={handleChangeModalClose}
        targetData={targetData}
        setTargetData={setTargetData}
        menuIndexNo = {props.menuIndexNo}
      ></MenuAuthUpdateModal>

      <DataGrid
        width={800}
        height={500}
        style={{ fontSize: "12px" }}
        columns={columns}
        data={ldata}
        dataLength={gridData.length}
        options={{}}
        onClick={({ item }) => {
          setTargetData(item.value);
        }}
      />
    </>
  );
}

export default MenuAuthGrid;
