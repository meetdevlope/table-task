import React from 'react';
import logo from './logo.svg';
import './App.css';
import Layout from './components/layout';
import Sidebar from './components/sidebar';
import {createTheme, ThemeProvider} from "@mui/material/styles";
import {
    RecoilRoot,
    atom,
    selector,
    useRecoilState,
    useRecoilValue,
  } from 'recoil';
const theme = createTheme({
    palette: {
        primary: {
            main: '#181789',
            light: 'rgba(24, 23, 137, 0.35)',
        }
    }
});
function App() {



  return (
    <RecoilRoot>
<ThemeProvider  theme={theme}>
          <div className="App" >
            <Layout></Layout></div>
      </ThemeProvider >
          </RecoilRoot>
      
  );
}

export default App;
