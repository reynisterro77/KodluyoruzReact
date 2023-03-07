//ThmeContextte yaptığımız olaydan sonra import işlemleri yapmıyoruz
// import {useContext} from "react";
// import ThemeContext from "../context/ThemeContext";
// ----------------------------------------------------------

//tek işlemde bitiriyoruz
import {useTheme} from "../context/ThemeContext";

function Header(){
    // const {theme,setTheme}=useContext(ThemeContext)

    //ThmeContextte yaptığımız olaydan sonra import işlemi yaptık
    const {theme,setTheme}=useTheme()

    return (
        <div>
            Active Theme:{theme}
            <br/>
            <button onClick={()=>setTheme(theme==='light'?"dark":'light')}>Change theme</button>
        </div>
    )
}

export default Header;






