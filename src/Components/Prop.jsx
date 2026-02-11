import React, { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Prop1 from "./Prop1.jsx";
function Prop(){
    
    const [data,setdata]=useState([]);
    const navigate=useNavigate();
    useEffect(()=>
        axios.get('http://localhost:3000/emp')
        .then((res)=>
        {
            setdata(res.data)
            console.log(res.data);
            navigate('/practice')
        }).catch((err)=>{
            console.log(err);
        }),[]);
    let emp_obj=[
    {
        eno:101,
        ename:'nani',
        esal:45000,
        edep:'IT'
    },
    {
        eno:102,
        ename:'ravi',
        esal:55000,
        edep:'HR'
    },
    {
        eno:103,
        ename:'kiran',
        esal:65000,
        edep:'Finance'
    
    },
    {
        eno:104,
        ename:'sai',
        esal:75000,
        edep:'Marketing'
    },{
        eno:105,
        ename:'manu',
        esal:85000,
        edep:'Sales'
    },
    {
        eno:106,
        ename:'anil',
        esal:95000,
        edep:'Admin',
    },
    {
        eno:107,
        ename:'vijay',
        esal:105000,
        edep:'Support',
    }
]

    return (
        <div className="w-full bg-gray-200 px-6 pt-32">
            <div className="flex flex-wrap gap-6 justify-start">
                {emp_obj.map((emp)=>
                    <Prop1 eno1={emp.eno} ename={emp.ename} esal={emp.esal} edep={emp.edep}/>)}
            </div> 
        </div>  
    )
}
export default Prop;
