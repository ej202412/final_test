import React, { useState } from "react";
import { Button, ButtonGroup, Form, Row, Col } from "react-bootstrap";

type StatusType = "WORK" | "T_QUIT";
type ConditionType = "STUDENT" | "CLASS";

const StudentSearchForm = () => {
  const [status, setStatus] = useState<StatusType>("WORK");
  const [condition, setCondition] = useState<ConditionType>("STUDENT");
  const [keyword, setKeyword] = useState("");

  const handleSearch = () => {
    console.log({ status, condition, keyword });
    // TODO: 백엔드 API 호출
  };

  return (
    <Form className="p-3 border rounded" style={{ maxWidth: 600 }}>
      {/* 상태 선택 버튼 */}
      <Form.Group as={Row} className="mb-3" controlId="statusSelect">
        <Form.Label column sm={2}>상태</Form.Label>
        <Col sm={10}>
          <ButtonGroup>
            <Button 
              variant={status === "WORK" ? "primary" : "outline-primary"}
              onClick={() => setStatus("WORK")}
            >
              재원
            </Button>
            <Button 
              variant={status === "T_QUIT" ? "primary" : "outline-primary"}
              onClick={() => setStatus("T_QUIT")}
            >
              퇴원
            </Button>
          </ButtonGroup>
        </Col>
      </Form.Group>

      {/* 조건 선택 라디오 */}
      <Form.Group as={Row} className="mb-3" controlId="conditionSelect">
        <Form.Label column sm={2}>검색 조건</Form.Label>
        <Col sm={10}>
          <Form.Check 
            inline
            type="radio"
            label="학생명"
            name="condition"
            value="STUDENT"
            checked={condition === "STUDENT"}
            onChange={() => setCondition("STUDENT")}
          />
          <Form.Check 
            inline
            type="radio"
            label="수업명"
            name="condition"
            value="CLASS"
            checked={condition === "CLASS"}
            onChange={() => setCondition("CLASS")}
          />
        </Col>
      </Form.Group>

      {/* 검색어 입력 */}
      <Form.Group as={Row} className="mb-3" controlId="keywordInput">
        <Form.Label column sm={2}>
          {condition === "STUDENT" ? "학생명" : "수업명"}
        </Form.Label>
        <Col sm={8}>
          <Form.Control 
            type="text"
            placeholder={
              condition === "STUDENT" ? "학생명을 입력하세요" : "수업명을 입력하세요"
            }
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
        </Col>
        <Col sm={2}>
          <Button variant="success" onClick={handleSearch}>검색</Button>
        </Col>
      </Form.Group>
    </Form>
  );
};

export default StudentSearchForm;
