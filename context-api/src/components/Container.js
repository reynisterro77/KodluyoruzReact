import {useContext} from "react";
import Header from "./Header";
import Button from "./Button";

//ThmeContextte yaptığımız olaydan sonra import işlemleri yapmıyoruz
// import ThemeContext from "../context/ThemeContext";
// ----------------------------------------------------------


import Profile from "./Profile";
import {useTheme} from "../context/ThemeContext";

function Container(){

    // const {theme}=useContext(ThemeContext)
    // console.log(theme)

    //ThmeContextte yaptığımız olaydan sonra import işlemi yaptık
    const {theme,setTheme}=useTheme()

    return (
        <div className={`app ${theme}`}>
            <Header></Header>
            <hr/>
            <Button></Button>
            <hr/>
            <Profile></Profile>
        </div>
    )
}

export default Container







