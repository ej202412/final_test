import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table } from 'react-bootstrap';
import RegisterModal from './components/tRegisterModal';
import UpdateModal from './components/tUpdateModal';
import api from '../../api';
import HistoryModal from './components/tHistoryModal';

interface Teacher{ // interface 생성하여 type 지정
    teacherId: number;
	name: string;
    birth: string;
    phone: string;
	storeName: string;
    salary: number;
    status: string;
    statusName: string;
    classNames: string;
    
    classId: number;
    className: string;
    studentCount: number;    
    startdate: string;
    enddate: string;
    starttime: string;
    endtime: string;
    
}

function TeacherList() {
    const [teachers, setTeachers] = useState<Teacher[]>([]);
    //const [selectedIds, setSelectedIds] = useState<number[]>([]);
    const [showRegister, setShowRegister] = useState(false);
    const [editingTeacher, setEditingTeacher] = useState<Teacher|null>(null);
    const [selectedTeacher, setSelectedTeacher] = useState<Teacher|null>(null);
    const storeName = "Seoul"; // localStorage.setItem("storeNum", payload.storeNum); > localStorage.getItem("storeNum");
    
    //해당 지점의 강사 리스트 가져오기
    const fetchData = () => {
        api.get(`/teachers?storeName=${storeName}`)
            .then(res => {
                console.log(res.data);
                setTeachers(res.data);
            })
            .catch(err => console.log(err));
    };

    useEffect(() => {
        fetchData();
    }, [showRegister, editingTeacher, selectedTeacher]);


    return (
        <div>
            <h2>강사 관리</h2>
            <h1>강사 목록</h1>
            <div>
                <div className="" style={{ float: 'left' }}>
                        <select>
                            <option value="">선택</option>
                            <option value="work">재직자</option>
                            <option value="teacherName">강사명</option>
                            <option value="className">수업명</option>
                            <option value="quit">퇴직자</option>
                        </select>

                        <input type="내용 입력" />
                        <button>검색</button>
                </div>        
                <button className="" style={{ float: 'right' }} onClick={() => setShowRegister(true)}>강사 등록</button>
            </div>
            <Table>
                <thead className="table-dark">
                    <tr>
                        <th>번호</th>
                        <th>지점명</th>
                        <th>이름</th>
                        <th>생년 월일</th>
                        <th>전화 번호</th>                        
                        <th>담당 수업</th>
                        <th>수업 이력</th>
                        <th>정보 수정</th>
                    </tr>
                </thead>
                <tbody>
                    { teachers.map((teacher, index) => (
                        <tr key={teacher.teacherId}>
                            <td>{index + 1}</td>
                            <td>{teacher.storeName}</td>
                            <td>{teacher.name}</td>
                            <td>{teacher.birth}</td>
                            <td>{teacher.phone}</td>
                            <td>{teacher.classNames}</td>
                            <td>
                                <button onClick={() => setSelectedTeacher(teacher)}>보기</button>
                            </td>
                            <td>
                                <button onClick={() => setEditingTeacher(teacher)}>수정</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>

            {showRegister && (
                <RegisterModal
                    show={true}
                    onClose={() => setShowRegister(false)}
                    onRegister={fetchData}
                />
            )}

            {editingTeacher && (
                <UpdateModal
                    teacher={editingTeacher}
                    show={true}
                    onClose={() => setEditingTeacher(null)}
                    onUpdate={fetchData}
                />
            )}

            {selectedTeacher && (
                <HistoryModal
                    teacher={selectedTeacher}
                    show={true}
                    onClose={() => setSelectedTeacher(null)}
                />
            )}
        </div>
    );
}

export default TeacherList;