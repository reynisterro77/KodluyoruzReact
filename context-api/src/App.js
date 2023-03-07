//Componentler arasında veriye erişmek

import './App.css';
import Button from "./components/Button";

// import ThemeContext from "./context/ThemeContext";

import {ThemeProvider} from "./context/ThemeContext";
import Header from "./components/Header";
import Container from "./components/Container";
import {UserProvider} from "./context/UserContext";


function App() {
  //ThemeContext.Provider burada tanımlama zorunda değil ThemeContexttede tanımalna bilir
  // return <ThemeContext.Provider value="dark">
  //   <Button></Button>
  // </ThemeContext.Provider>


  return (//bu kullanım daha iyi
      // <ThemeProvider>
      //     <Header></Header>
      //     <hr/>
      //   <Button></Button>
      // </ThemeProvider>

    <ThemeProvider>
        <UserProvider>
            <Container></Container>
        </UserProvider>
    </ThemeProvider>
  )
}

export default App;
