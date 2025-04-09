import React, { useState } from 'react';
import axios from 'axios';

function UpdateModal({ student, onClose, onUpdate }) {
    const [form, setForm] = useState({ ...student });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = () => {
        axios.patch('/student/edit', form)
            .then(() => {
                onUpdate();    // 목록 다시 불러오기
                onClose();     // 모달 닫기
            })
            .catch(err => console.log(err));
    };

    return (
        <div className="modal">
            <h3>학생 정보 수정</h3>
            <input name="name" value={form.name} onChange={handleChange} placeholder="이름" />
            <input name="phone" value={form.phone} onChange={handleChange} placeholder="전화번호" />
            <input name="email" value={form.email} onChange={handleChange} placeholder="이메일" />
            <input name="storenum" value={form.storenum} onChange={handleChange} placeholder="스토어넘" />
            <input name="classId" value={form.classId} onChange={handleChange} placeholder="클래스 ID" />
            <button onClick={handleSubmit}>수정</button>
            <button onClick={onClose}>닫기</button>
        </
