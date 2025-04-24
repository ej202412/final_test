// components/RegisterModal.tsx

import React, { useEffect, useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.css";
import api from '../../../api';

interface Status{
    status: string;
    statusName: string;
}

function RegisterModal({ show, onClose, onRegister }) {
    const storeName='Seoul';
    const [status, setStatus] = useState<Status[]>([]);
    /*강사의 상태값 가져오기
    const fetchStatus = ()=>{
        api.get(`/teachers/class?storeName=${storeName}`)
        .then(res=>{
            console.log(res.data);
            setStatus(res.data);
            
        })
        .catch(err=>console.log(err));
    }
    
    useEffect(()=>{
        fetchStatus();
    }, [onClose]);
    */
    const handleSubmit = (e) => {
        e.preventDefault(); //폼 제출 방지
        const formData = new FormData(e.target);
        const formObject = Object.fromEntries(formData.entries());
        console.log(formObject);
        api.post('/teachers', formObject)
            .then(res => {
                console.log(res.data);
                onRegister();
                onClose();
            })
            .catch(err => console.log(err));
    };

    return (
        <Modal show={show} onHide={onClose}> {/* 모달 닫힐 때 부모 컴포넌트에서 실행될 함수 onClose */}
            <Modal.Header closeButton> {/* 닫기 버튼 누르면 onHide 호출 */}
                <Modal.Title>강사 정보 등록</Modal.Title>
            </Modal.Header>
            <Form onSubmit={handleSubmit}> {/* 폼에 함수 연결 */}
                <Modal.Body>
                    <Form.Group className="mb-3">
                        <Form.Label>지점명</Form.Label>
                        <Form.Control name="storeName" value={storeName} readOnly />
                        {/* storename 가져오기 */}
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>이름</Form.Label>
                        <Form.Control name="name" placeholder="이름을 입력하세요" required />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>생년월일</Form.Label>
                        {/*<input type="date" />*/}
                        <Form.Control name="birth" placeholder="생년월일을 입력하세요" required />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>전화번호</Form.Label>
                        <Form.Control name="phone" placeholder="전화번호를 입력하세요" required />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>상태</Form.Label>
                        <Form.Select name="status" required>
                            <option value="">상태를 선택하세요</option>
                            <option value="WORK">재직</option>
                            <option value="T_QUIT">퇴직</option>
                        </Form.Select>
                    </Form.Group>
                    
                    <Form.Group className="mb-3">
                        <Form.Label>급여</Form.Label>
                        <Form.Control name="salary" placeholder="급여를 입력하세요" required />
                    </Form.Group>

                </Modal.Body>
                <Modal.Footer>
                    <Button type="submit" variant="primary">등록</Button> {/* 등록 버튼에 onClick 등록하지 않음 */}
                </Modal.Footer> {/* 폼 안에 버튼 포함 */}
            </Form>
        </Modal>
    );
}

export default RegisterModal;