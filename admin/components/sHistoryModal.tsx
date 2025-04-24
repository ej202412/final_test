import React, { useEffect, useState } from 'react';
import "bootstrap/dist/css/bootstrap.css";
import api from '../../../api';
import { Modal, Table } from 'react-bootstrap';

interface ClassHistory{ // interface 생성하여 type 지정
    studentId: number;
	name: string;
	
    classId: number;
    className: string;
    
    teacherName: string;
    startdate: string;
    enddate: string;
    starttime: string;
    endtime: string;
}

function HistoryModal(student, show, onClose) {
    const [histories, setHistories] = useState<ClassHistory[]>([]);
    const studentId = student.studentId;
    useEffect(()=>{
        api.get(`students/class?studentId=${studentId}`)
        .then(res=>{
            console.log(res.data);
            setHistories(res.data);
        })
        .catch(err=>console.log(err));
    }, []);
    return (
        <Modal show={show} onHide={onClose}>
            <Modal.Header closeButton>
                <Modal.Title><strong>{student.name}</strong> 학생 수강 이력</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Table>
                    <thead>
                        <tr>
                            <th>번호</th>
                            <th>수업명</th>
                            <th>강사명</th>
                            <th>수강기간</th>
                            <th>수강시간</th>
                        </tr>
                    </thead>
                    <tbody>
                        {histories.map((history, index) => (
                            <tr key={history.classId}>
                                <td>{index + 1}</td>
                                <td>{history.className}</td>
                                <td>{history.teacherName}</td>
                                <td>{history.startdate} - {history.enddate}</td>
                                <td>{history.starttime} - {history.endtime}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Modal.Body>
            <Modal.Footer>

            </Modal.Footer>
        </Modal>
    );
}

export default HistoryModal;