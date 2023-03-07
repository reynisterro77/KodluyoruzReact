//ThmeContextte yaptığımız olaydan sonra import işlemleri yapmıyoruz
// import {useContext} from "react";
// import ThemeContext from "../context/ThemeContext";
// ----------------------------------------------------------

//tek işlemde bitiriyoruz
import {useTheme} from "../context/ThemeContext";

function Button(){
    // const data=useContext(ThemeContext)
    // const {theme,setTheme}=useContext(ThemeContext)

//ThmeContextte yaptığımız olaydan sonra import işlemi yaptık
    const {theme,setTheme}=useTheme()
    // console.log(data)

    return (
        <div>
            Active Thme :{theme}
            <br/>
            <button onClick={()=>setTheme(theme==='light'?"dark":"light")}>Change Theme</button>
        </div>
    )
}

export default Button;






