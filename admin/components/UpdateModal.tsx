import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.css";

function UpdateModal({ student, show, onClose, onUpdate }) { //기존에 저장된 학생 정보 전달받음
    const [form, setForm] = useState({ ...student });

    useEffect(() => {
        setForm({ ...student });
    }, [student]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm(form => ({ ...form, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const formObject = Object.fromEntries(formData.entries());
        const id = student.student_Id;
        axios.patch(`/api/students/${id}`, formObject)
            .then((res) => {
                console.log(res);
                onUpdate();
                onClose();
            })
            .catch(err => console.log(err));
    };

    return (
        <Modal show={show} onHide={onClose} centered>
            <Modal.Header closeButton>
                <Modal.Title>학생 정보</Modal.Title>
            </Modal.Header>
            <Form onSubmit={handleSubmit}>
                <Modal.Body>
                    <Form.Group className="mb-3">
                        <Form.Label>이름</Form.Label>
                        <Form.Control
                            name="name"
                            onChange={handleChange}
                            defaultValue={form.name}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>전화번호</Form.Label>
                        <Form.Control
                            name="phone"
                            onChange={handleChange}
                            defaultValue={form.phone}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>이메일</Form.Label>
                        <Form.Control
                            name="email"
                            onChange={handleChange}
                            defaultValue={form.email}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>지점번호</Form.Label>
                        <Form.Control
                            name="storeNum"
                            onChange={handleChange}
                            defaultValue={form.storeNum}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label className="me-3">수업 선택</Form.Label>
                        <Form.Control
                            name="class_Id"
                            onChange={handleChange}
                            defaultValue={form.class_Id}
                        />
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button type="submit" variant="primary">수정</Button>
                    <Button variant="secondary" onClick={onClose}>취소</Button>
                </Modal.Footer>
            </Form>
        </Modal>
    );
}

export default UpdateModal;