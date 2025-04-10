// components/RegisterModal.tsx

import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.css";

function RegisterModal({ show, onClose, onRegister }) {
    
    const handleSubmit = (e) => {
        e.preventDefault(); //폼 제출 방지
        const formData = new FormData(e.target);
        const formObject = Object.fromEntries(formData.entries());
        console.log(formObject);
        axios.post('/api/students', formObject)
            .then(res => {
                console.log(res);
                onRegister();
                onClose();
            })
            .catch(err => console.log(err));
    };

    return (
        <Modal show={show} onHide={onClose}> {/* 모달 닫힐 때 부모 컴포넌트에서 실행될 함수 onClose */}
            <Modal.Header closeButton> {/* 닫기 버튼 누르면 onHide 호출 */}
                <Modal.Title>학생 등록</Modal.Title>
            </Modal.Header>
            <Form onSubmit={handleSubmit}> {/* 폼에 함수 연결 */}
                <Modal.Body>
                    <Form.Group className="mb-3">
                        <Form.Label>지점번호</Form.Label>
                        <Form.Control name="storeNum" value="1" />
                        {/* storenum 받아오기 */}
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>이름</Form.Label>
                        <Form.Control name="name" placeholder="이름을 입력하세요" required />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>전화번호</Form.Label>
                        <Form.Control name="phone" placeholder="전화번호를 입력하세요" required />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>이메일</Form.Label>
                        <Form.Control name="email" type="email" placeholder="이메일을 입력하세요" required />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>수강 수업</Form.Label>
                        <Form.Select name="class_Id" required> {/* StudentDto 의 필드와 같게 */}
                            <option value="">수업을 선택하세요</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            {/* 클래스 리스트 받아오기 */}
                        </Form.Select>
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button type="submit" variant="primary">등록</Button> {/* 여기에 onClick 등록하지 않음 */}
                    <Button variant="secondary" onClick={onClose}>취소</Button>
                </Modal.Footer>
            </Form>
        </Modal>
    );
}

export default RegisterModal;