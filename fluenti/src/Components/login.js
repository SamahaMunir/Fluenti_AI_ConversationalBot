import React, { useState } from 'react';

const Login = () => {
    //datatypes
    const name= "samaha";
    const number= 121;
    const [isActive,setActive]=useState('true');
    const date= Date();
    //array
    const mood=['happy','sad','angry']
    //object
    const student={
        stName:"usama",
        stRollNo:12

    };
    //EventBinding
    const EventBinding = () =>{
        alert("hello samaha")
    }
    const StudentMsg = (msg) =>{
        alert(msg)
    }
    const onName = (event) =>{
        debugger;
        console.log(event.target.value)

    }
    //useState
    let LangName="Angular";

    const [Language,setName] = useState("Angular");

    const [enroll,setEnroll]=useState(123);

    const changeName = () =>{
        debugger;
        LangName="react";
    }

    const changeUseName = () =>{
        setName("React")
    }

    const changeEnroll = () =>{
        setEnroll(321);
    }

    const changeEnrollInput = (event) =>{
        setEnroll(event.target.value)
    }
    const changeState = (event) =>{
        setActive(event.target.checked)
    }
    //useState for obj and arrays

    const [employee,setEmployee]=useState(
        {
            id:12,
            dob:"march"
        }
    )
    const changeId = (event) =>{
        setEmployee(oldobj=>({...oldobj,id:event.target.value}))
    }
    const changedob = (event)=>{
        setEmployee(oldobj=>({...oldobj,dob:event.target.value}))
    }
    //arrays
    const [city,setCity]=useState(['lahore','karachi']);

    const [newcity,setAddcity]=useState("");

    const changeaddcity = (event) =>{
        setAddcity(event.target.value)
    } 

    const changecName=()=>{
        setCity(obj=>[...obj,newcity])
    }
    //conditional rendering
    const [div1,setdiv1]=useState(true);
    
    const showdiv = () =>{
        setdiv1(true)
    }
    const hidediv = () =>{
        setdiv1(false)
    }
    //map operator for array alement rendering in ReacJS
    const fruits = ['apple','peach','grape'];

    const studentArray =[
     {studentName:'samaha',roll:123},
     {studentName:'maha',roll:122},
     {studentName:'sam',roll:121},
     {studentName:'aha',roll:120},
    ]


    return (
        <div>
            <h1>i am login page</h1>
            {/* data binding*/}
            <input type='text' value={name}/>
            {/* event binding*/}   
            <button onClick={()=>EventBinding()} >HELOO</button>
            <button onClick={()=>StudentMsg('msg 1')}>Hi student 1</button>
            <input onChange={(event)=>onName(event)}/>
            <tr>
                <td>name - {name}</td>
                <td>number - {number}</td>
                <td>Active - {isActive ? 'isactive' : 'notactive'}</td>
                <td>mood - {mood.toString()}</td>
                <td>student name - {student.stName}</td>
                <td>Current Date - {date.toString()}</td>
            </tr>
            {/* use State*/}  
            <div>{LangName}</div>
            <button onClick={changeName}>Click to change</button>
            <div>{Language}</div>
            <button onClick={changeUseName}>Click to change</button>
            <div>{enroll}</div>
            <button onClick={changeEnroll}>click to reverse enroll</button>
            <input  type='text' onChange={(event)=>changeEnrollInput(event)}  />
            <div>{isActive ? 'active' : 'notactive'}</div>
            
            <input type='checkbox' onChange={(event)=>changeState(event)}/>
            {/* use State for obj and arrays*/}  

            <p>{JSON.stringify(employee)}</p>
            <input type='text' onChange={(event)=>changeId(event)}/>
            <input type='text' onChange={(event)=>changedob(event)}/>

            <p>{city}</p>
            <input type='text' onChange={(event)=>changeaddcity(event)}/>
            <input type='button' onClick={changecName}/>
            {/*conditional rendering*/} 
            <div>
                {
                    div1 &&   <div><h1>Div 1</h1></div>
                }
            </div>

            <button  onClick={showdiv}></button>
            <button  onClick={hidediv}></button>
            {/*map operator for array alement rendering in ReacJS*/} 

            <div>
              <ul>
                {
                    fruits.map((fruit)=>{
                        return(<li>{fruit}</li>)
                })}
              </ul>
            </div>

            <div>
                <select>
                    {
                        fruits.map((fruit)=>{
                            return(<option>{fruit}</option>)
                        })
                    }
                </select>
            </div>
            <div>
                <select>
                    {
                        studentArray.map((item)=>{
                            return(<option>{item.roll}</option>)
                        })
                    }
                </select>
            </div>
            <div>
                <table>
                    <thead>
                        <tr>
                        <td>Sr No</td>
                        <td>Name</td>
                        <td>Roll no</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            studentArray.map((item,index)=>{
                                return(
                                <tr>
                                    <td>{index+1}</td>
                                    <td>{item.studentName}</td>
                                    <td>{item.roll}</td>
                                </tr>
                            )
                            })
                        }
                    </tbody>
                </table>
            </div>
            

          

        </div>
    );
};

export default Login;