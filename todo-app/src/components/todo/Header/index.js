import {useState,useEffect} from "react";

const initialFormValues={todotext:"",isChecked:true}

function Header({addContact,contacts}){
    const [form,setForm]=useState(initialFormValues)

    useEffect(() => {
        setForm(initialFormValues);
    },[])
    useEffect(()=>{
        setForm(initialFormValues);
    },[contacts])

    const onChangeInput=(e)=>{
        setForm({...form,[e.target.name]:e.target.value})
    }

    const onSubmit=(e)=>{
        e.preventDefault();
        // console.log(e.target.todotext.value)
        if (form.todotext===''){
            return false;
        }

        addContact([...contacts,form])
    }
    return (
        <header className="header">
            <h1>todos</h1>
            <form onSubmit={onSubmit}>
                <input name="todotext" className="new-todo" value={form.todotext} placeholder="What needs to be done?" onChange={onChangeInput} autoFocus/>
            </form>
        </header>
    )
}



export default Header
