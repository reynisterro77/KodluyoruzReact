import {useState} from "react";

function Main({contacts,addContact,status}){


    return (
        <section className="main">
            <input className="toggle-all"  type="checkbox" />
            <label htmlFor="toggle-all" onClick={()=>{
               contacts.map((item,i)=> {
                   let array = [...contacts]
                   if (array[i].isChecked===true){
                       array[i].isChecked=false;
                   }
                   addContact(array)
               })


            }}>
                Mark all as complete
            </label>

            <ul className="todo-list">

                {contacts.map((item,i)=>{

                    if (status==="All"){

                        return (
                            <li className={item.isChecked?'':'completed'} key={i}>
                                <div className="view">
                                    <input className="toggle" checked={!item.isChecked} type="checkbox" onChange={()=>{
                                        let array=[...contacts]
                                        array[i].isChecked=!array[i].isChecked;
                                        addContact(array)
                                    }}/>
                                    <label>{item.todotext}</label>
                                    <button className="destroy" onClick={()=>{
                                        let array2=[...contacts];
                                        array2=array2.filter((value)=>{
                                            return value!==array2[i];
                                        })
                                        // console.log(array2)
                                        addContact(array2);
                                    }}></button>
                                </div>
                            </li>
                        )
                    }
                    else if(status==="Active"){
                        if (item.isChecked){
                            return (
                                <li className={item.isChecked?'':'completed'} key={i}>
                                    <div className="view">
                                        <input className="toggle" checked={!item.isChecked} type="checkbox" onChange={()=>{
                                            let array=[...contacts]
                                            array[i].isChecked=!array[i].isChecked;
                                            addContact(array)
                                        }}/>
                                        <label>{item.todotext}</label>
                                        <button className="destroy" onClick={()=>{
                                            let array2=[...contacts];
                                            array2=array2.filter((value)=>{
                                                return value!==array2[i];
                                            })
                                            console.log(array2)
                                            addContact(array2);
                                        }}></button>
                                    </div>
                                </li>
                            )
                        }
                    }
                    else if(status==="Completed"){
                        if (!item.isChecked){
                            return (
                                <li className={item.isChecked?'':'completed'} key={i}>
                                    <div className="view">
                                        <input className="toggle" checked={!item.isChecked} type="checkbox" onChange={()=>{
                                            let array=[...contacts]
                                            array[i].isChecked=!array[i].isChecked;
                                            addContact(array)
                                        }}/>
                                        <label>{item.todotext}</label>
                                        <button className="destroy" onClick={()=>{
                                            let array2=[...contacts];
                                            array2=array2.filter((value)=>{
                                                return value!==array2[i];
                                            })
                                            console.log(array2)
                                            addContact(array2);
                                        }}></button>
                                    </div>
                                </li>
                            )
                        }
                    }

                })}


            </ul>
        </section>
    )
}

export default Main
