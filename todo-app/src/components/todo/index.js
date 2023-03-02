import {useState,useEffect} from "react";

import "./styles.css"

import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

function Contacts(){
    const [contacts,setContacts]=useState([
        {
            todotext:'Learn JavaScript',
            isChecked:true
        }, {
            todotext:'Learn React',
            isChecked:false
        }, {
            todotext:'Have a life!',
            isChecked:false
        }
    ])

    const [status,setStatus]=useState("All")
    return (
        <section className="todoapp">
            <Header addContact={setContacts} contacts={contacts}></Header>
            <Main contacts={contacts} addContact={setContacts} status={status}></Main>
            <Footer contacts={contacts} addContact={setContacts} status={status} setStatus={setStatus}></Footer>
        </section>
    )


}


export default Contacts

