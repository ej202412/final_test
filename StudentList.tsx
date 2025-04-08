import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table } from 'react-bootstrap';

function StudentList(props) {

    const [students, setStudents] = useState([]); //전체 학생 리스트
    
    const fetchData = ()=>{
        axios.get("/student")
        .then(res=>
            console.log(res.data)
            //setStudents([...students, res.data])
        )
        .catch(err=>console.log(err));
    }

    const RegisterModal = 

    useEffect(()=>{
        fetchData();
    }, [])

    return (
        <div>
            <h1>학생 관리 페이지</h1>
        
            <div className="right">
                <button>
                학생 등록
                </button>
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
                    <tr>
                        <td>
                            <input type="checkbox" className="checkbox" />
                        </td>
                        <td>1</td>
                        <td>1</td>
                        <td>1</td>
                        <td>1</td>
                        <td>1</td>
                        <td>1</td>
                    </tr>
                   
                    
                </tbody>
            </Table>

            </div>
    
    );
}

export default StudentList;