import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table } from 'react-bootstrap';
import RegisterModal from './RegisterModal';
import UpdateModal from './UpdateModal';

function StudentList() {
    const [students, setStudents] = useState([]);
    const [selectedIds, setSelectedIds] = useState([]);
    const [showRegister, setShowRegister] = useState(false);
    const [editingStudent, setEditingStudent] = useState(null);

    const fetchData = () => {
        axios.get("/student")
            .then(res => setStudents(res.data))
            .catch(err => console.log(err));
    };

    useEffect(() => {
        fetchData();
    }, []);

    const toggleCheckbox = (id) => {
        setSelectedIds(prev =>
            prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
        );
    };

    const deleteSelected = () => {
        selectedIds.forEach(id => {
            axios.delete(`/student/delete?id=${id}`)
                .then(fetchData)
                .catch(err => console.log(err));
        });
        setSelectedIds([]);
    };

    return (
        <div>
            <h1>학생 관리 페이지</h1>
            <div className="right">
                <button onClick={() => setShowRegister(true)}>학생 등록</button>
                <button onClick={deleteSelected} disabled={selectedIds.length === 0}>선택 삭제</button>
            </div>

            <Table>
                <thead className="table-dark">
                    <tr>
                        <th> </th>
                        <th>번호</th>
                        <th>이름</th>
                        <th>연락처</th>
                        <th>이메일</th>
                        <th>상태</th>
                        <th>상세보기</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((student, index) => (
                        <tr key={student.studentId}>
                            <td>
                                <input
                                    type="checkbox"
                                    checked={selectedIds.includes(student.studentId)}
                                    onChange={() => toggleCheckbox(student.studentId)}
                                />
                            </td>
                            <td>{index + 1}</td>
                            <td>{student.name}</td>
                            <td>{student.phone}</td>
                            <td>{student.email}</td>
                            <td>정상</td>
                            <td>
                                <button onClick={() => setEditingStudent(student)}>보기</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>

            {showRegister && (
                <RegisterModal
                    onClose={() => setShowRegister(false)}
                    onRegister={fetchData}
                />
            )}

            {editingStudent && (
                <UpdateModal
                    student={editingStudent}
                    onClose={() => setEditingStudent(null)}
                    onUpdate={fetchData}
                />
            )}
        </div>
    );
}

export default StudentList;
