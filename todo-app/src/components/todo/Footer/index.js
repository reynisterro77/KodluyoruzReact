import {useState,useEffect} from "react";

function Footer({contacts,addContact,status,setStatus}){

    // console.log(contacts)

    const [countFalse,setCountFalse]=useState(0);
    const [countTrue,setCountTrue]=useState(0);


    const activeButton=()=>{
        const array=contacts.filter(item=>item.isChecked)
        addContact(array)
    }

    const onClick=(e)=>{
        setStatus(e.target.name)
    }

    useEffect(() =>{
        setCountFalse(0)
        setCountTrue(0)
        contacts.map((item)=>{
            if(item.isChecked){
                setCountTrue(n=> n+1)
            }else {
                setCountFalse(n=> n+1)
            }
        })
    },[contacts])



    return (
        <footer className="footer">
            <span className="todo-count">
			<strong>{status==="All"?contacts.length:'' || status==="Active"?countTrue:countFalse} </strong>
			items left
		</span>

            <ul className="filters">
                <li>
                    <a href="#/" name="All" className={status==="All"?"selected":""} onClick={onClick}>All</a>
                </li>
                <li>
                    <a href="#/" name="Active" className={status==="Active"?"selected":""} onClick={onClick}>Active</a>
                </li>
                <li>
                    <a href="#/" name="Completed" className={status==="Completed"?"selected":""} onClick={onClick}>Completed</a>
                </li>
            </ul>

            <button className={`clear-completed ${countFalse === 0 ? "hidden" : ""} `} onClick={activeButton} >
                Clear completed
            </button>
        </footer>
    )
}

export default Footer

