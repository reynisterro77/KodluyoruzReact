//UserContexte yaptığüımız işlemlerden sonra son durum böyle start
// -----------------------------------------------------------
// import {useContext, useState} from "react";
import {useState} from "react";

// import UserContext from "../context/UserContext";

import {useUser} from "../context/UserContext"

// -----------------------------------------------------------
//UserContexte yaptığüımız işlemlerden sonra son durum böyle end


function Profile(){

    // const {user,setUser}=useContext(UserContext)

//UserContexte yaptığüımız işlemlerden sonra son durum böyle start
    const {user,setUser}=useUser();
// ------------------------------------------------- end

    const [loading,setLoading]=useState(false)

    const handleLogin=()=>{
        setLoading(true)
        setTimeout(()=>{
            setUser({id:1,username:'mkara',bio:'lorem ipsum dolar'})
            setLoading(false)
        },1000)
    }

    const handleLogout=()=>{
        setUser(null);
    }


    return (

        <div>
            {
                !user && (
                <button onClick={handleLogin}>{loading ? 'loading...':'Login'}</button>
                )
            }
            <br/>
            <code>{JSON.stringify(user)}</code>
            <br/>
            {
                user && <button onClick={handleLogout}>Logout</button>
            }
        </div>

    )
}

export default Profile;






