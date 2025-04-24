import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, ButtonGroup, Col, Form, Row, Table } from 'react-bootstrap';
import RegisterModal from './components/sRegisterModal';
import UpdateModal from './components/sUpdateModal';
import api from '../../api';
import HistoryModal from './components/sHistoryModal';


interface Student{ // interface 생성하여 type 지정
    studentId: number;
	name: string;
	storeName: string;
	phone: string;
	status: string;
    statusName: string;
    classNames: string;
    classId: number;
    className: string;
    teacherId: number;
    teacherName: string;
    startdate: string;
    enddate: string;
    starttime: string;
    endtime: string;
}

// 검색 조건 상태값 관리를 위한 union type 정의
type StatusType = "STUDY" | "S_QUIT";
type ConditionType = null | "STUDENT" | "CLASS";

function StudentList() {
    const [students, setStudents] = useState<Student[]>([]);
    const [showRegister, setShowRegister] = useState(false);
    const [editingStudent, setEditingStudent] = useState<Student|null>(null);
    const [selectedStudent, setSelectedStudent] = useState<Student|null>(null);
    const storeName = "Seoul"; // localStorage.setItem("storeNum", payload.storeNum); > localStorage.getItem("storeNum");
    const [status, setStatus] = useState<StatusType>("STUDY"); //초기값은 재원생
    const [condition, setCondition] = useState<ConditionType>(null); //초기값은 선택
    const [keyword, setKeyword] = useState("");


    //해당 지점의 학생 리스트 가져오기
    const fetchData = () => {
        api.get(`/students?storeName=${storeName}`)
            .then(res => {
                console.log(res.data);
                setStudents(res.data);
            })
            .catch(err => console.log(err));
    };

    const handleSearch = () => {
        console.log({ status, condition, keyword });
        // 백엔드 API 호출 경로 다시 생각해보기
        api.get(`/students?status=${status}&condition=${condition}&keyword=${keyword}`)
        .then(res=>{
            console.log(res.data);
            setStudents(res.data);
        })
        .catch(err=>console.log(err));
      };    

    useEffect(() => {
        fetchData();
    }, [showRegister, editingStudent, selectedStudent]);

    return (
        <div>
            <h2>학생 관리</h2>
            <h1>학생 목록</h1>
            <div className="d-flex align-items-center">
            <Form>
                <div className="d-flex align-items-center">
                {/* 재원/퇴원 버튼 */}
                <ButtonGroup>
                    <Button
                    variant={status === "STUDY" ? "primary" : "outline-primary"}
                    onClick={() => setStatus("STUDY")}
                    >
                    재원
                    </Button>
                    <Button
                    variant={status === "S_QUIT" ? "primary" : "outline-primary"}
                    onClick={() => setStatus("S_QUIT")}
                    >
                    퇴원
                    </Button>
                </ButtonGroup>

                {/* 검색 조건 drop-down 선택 */}
                <div className="d-flex align-items-center">
                    <Form.Select name="condition">
                        <option value="">선택</option>
                        <option value="STUDENT" onClick={() => setCondition("STUDENT")}>학생명</option>
                        <option value="CLASS" onClick={() => setCondition("CLASS")}>수업명</option>
                    </Form.Select>
                </div>

                {/* 검색어 keyword 입력 */}
                <Form.Control
                    type="text"
                    placeholder={condition === "STUDENT" ? "학생명을 입력하세요" : "수업명을 입력하세요"}
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                    style={{ maxWidth: "200px" }}
                />

                {/* 검색 버튼 */}
                <Button variant="success" onClick={handleSearch}>검색</Button>
                </div> 
            </Form>

                <Button variant="outline-dark" onClick={() => setShowRegister(true)}>학생 등록</Button>
            </div>

            <Table>
                <thead className="table-dark">
                    <tr>  
                        <th>번호</th>
                        <th>지점명</th>
                        <th>이름</th>
                        <th>전화번호</th>
                        {}
                        <th>현재 수강 수업</th>
                        <th>수강 이력</th>
                        <th>정보 수정</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((student, index) => (
                        <tr key={student.studentId}>
                            <td>{index + 1}</td>
                            <td>{student.storeName}</td>
                            <td>{student.name}</td>
                            <td>{student.phone}</td>
                            <td>{student.classNames}</td>
                            <td>
                                <button onClick={() => setSelectedStudent(student)}>보기</button>
                            </td>
                            <td>
                                <button onClick={() => setEditingStudent(student)}>수정</button>
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

            {editingStudent && (
                <UpdateModal
                    student={editingStudent}
                    show={true}
                    onClose={() => setEditingStudent(null)}
                    onUpdate={fetchData}
                />
            )}

            {selectedStudent && (
                <HistoryModal
                    student={selectedStudent}
                    show={true}
                    onClose={() => setSelectedStudent(null)}
                />
            )}


        </div>
    );
}

export default StudentList;