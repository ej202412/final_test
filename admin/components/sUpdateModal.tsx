import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.css";
import api from '../../../api';


interface Status{
    status: string;
    statusName: string;
}

function UpdateModal({ student, show, onClose, onUpdate }) { //기존에 저장된 학생 정보 전달받음
    const [form, setForm] = useState({ ...student });
    const [status, setStatus] = useState<Status[]>([]);
    const storeName = student.storeName;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm(form => ({ ...form, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const formObject = Object.fromEntries(formData.entries());
        const studentId = student.studentId;
        api.patch(`/students/${studentId}`, formObject)
            .then((res) => {
                console.log(res.data);
                onUpdate();
                onClose();
            })
            .catch(err => console.log(err));
    };

    useEffect(()=>{
        setForm({ ...student });
        
    }, [student]);
    
    return (
        <Modal show={show} onHide={onClose}>
            <Modal.Header closeButton>
                <Modal.Title>학생 정보 수정</Modal.Title>
            </Modal.Header>
            <Form onSubmit={handleSubmit}>
                <Modal.Body>
                    <Form.Group className="mb-3">
                        <Form.Label>지점명</Form.Label>
                        <Form.Control name="storeName" onChange={handleChange} value={storeName} readOnly/>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>이름</Form.Label>
                        <Form.Control name="name" onChange={handleChange} defaultValue={form.name} required/>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>전화번호</Form.Label>
                        <Form.Control name="phone" onChange={handleChange} defaultValue={form.phone} required/>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>상태</Form.Label>
                        <Form.Select name="status" onChange={handleChange} defaultValue={form.statusName} required>
                            <option value="STUDY">재원</option>
                            <option value="S_QUIT">퇴원</option>  
                        </Form.Select>                        
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button type="submit" variant="primary">수정</Button>
                </Modal.Footer>
            </Form>
        </Modal>
    );
}

export default UpdateModal;