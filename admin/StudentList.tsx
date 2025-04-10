import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table } from 'react-bootstrap';
import RegisterModal from './components/RegisterModal';
import UpdateModal from './components/UpdateModal';

interface Student{ // interface 생성하여 type 지정
    student_Id: number;
	name: string;
	storeNum: number;
	class_Id: number;
	phone: string;
	email: string;
}

function StudentList() {
    const [students, setStudents] = useState<Student[]>([]);
    const [selectedIds, setSelectedIds] = useState<number[]>([]);
    const [showRegister, setShowRegister] = useState(false);
    const [editingStudent, setEditingStudent] = useState<Student|null>(null);

    
    const fetchData = () => {
        axios.get("/api/students")
            .then(res => {
                console.log(res.data);
                setStudents(res.data);
            })
            .catch(err => console.log(err));
    };

    useEffect(() => {
        fetchData();
    }, [selectedIds, showRegister, editingStudent]);

    const toggleCheckbox = (id: number) => {
        setSelectedIds(prevState =>
            prevState.includes(id) ? prevState.filter(item => item !== id) : [...prevState, id]
        );
    };

    const deleteSelected = () => {
        selectedIds.forEach(id => {
            axios.delete(`/api/students/${id}`)
            .then(res=>{
                console.log(res);
                fetchData();
            })
            .catch(err => console.log(err));
        });
        setSelectedIds([]);
        
    };

    return (
        <div>
            <h1>학생 관리 페이지</h1>
            <div>
                { selectedIds.length === 0 ? 
                <button onClick={() => setSelectedIds([])}>전체 선택</button>
                    :
                <button onClick={() => setSelectedIds([])}>선택 취소</button>    
                }
                
                <button onClick={() => setShowRegister(true)}>학생 등록</button>
            </div>

            <Table>
                <thead className="table-dark">
                    <tr>
                        <th>선택</th>
                        <th>번호</th>
                        <th>이름</th>
                        <th>연락처</th>
                        <th>이메일</th>
                        <th>수강 수업</th>
                        <th>상세보기</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((student, index) => (
                        <tr key={student.student_Id}>
                            <td>
                                <input
                                    type="checkbox"
                                    checked={selectedIds.includes(student.student_Id)}
                                    onChange={() => toggleCheckbox(student.student_Id)}
                                />
                            </td>
                            <td>{index + 1}</td>
                            <td>{student.name}</td>
                            <td>{student.phone}</td>
                            <td>{student.email}</td>
                            <td>{student.class_Id}</td>
                            <td>
                                <button onClick={() => setEditingStudent(student)}>보기</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>

            <div>
                <button onClick={deleteSelected} disabled={selectedIds.length === 0}>선택 삭제</button>
            </div>

            {showRegister && (
                <RegisterModal
                    show={true}
                    onClose={() => setShowRegister(false)}
                    onRegister={fetchData}
                />
            )}

            {editingStudent && (
                <UpdateModal
                    student={editingStudent}
                    show={true}
                    onClose={() => setEditingStudent(null)}
                    onUpdate={fetchData}
                />
            )}
        </div>
    );
}

export default StudentList;