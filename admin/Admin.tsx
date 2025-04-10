import { useNavigate } from "react-router-dom";


function Admin() {

    const navigate = useNavigate();

    return (
        <div>
            <h1>학원 관리자 페이지</h1>
            <button onClick={()=>{
                navigate("/students");
            }}>학생관리</button>
            <button onClick={()=>{
                navigate("/teachers");
            }}>강사관리</button>
        </div>
    );
}

export default Admin;