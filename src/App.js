import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
import React, {useState} from 'react';
import Alert from './components/Alert';

function App() {
  const [mode, setMode] = useState('light');

  const themeBucket = {
    light:{ bg:'white', color:'black'},
    dark:{ bg:'#042743', color:'white'},
    blue:{ bg:'blue', color:'white'},
    indigo:{ bg:'indigo', color:'white'}
  };
  const [theme, setTheme] = useState({
      light:{ bg:'white', color:'black'}
  });
  const [alert, setAlert] = useState(null);

  const showAlert = (msg, type) => {
      setAlert({msg, type});
      setTimeout(() => {
        setAlert(null);
      },2000)
  }

  const toggleMode = () => {
    if(mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert('Dark mode enable', 'warning');
    }else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode enable', 'success');
    }
  }

  const setThemeColor = (theme) => {
      document.body.style.backgroundColor = themeBucket[theme].bg;
      setMode(theme);
      showAlert('Theme color '+theme, 'warning');
  }

  return (
    <>
      <Navbar title="Text Utils" aboutus="About us" mode={mode} themeBucket={themeBucket} toggleMode={toggleMode} setThemeColor={setThemeColor} />
      <Alert alert={alert} />
      <div className="container">
        {/* <About/> */}
        <TextForm heading="Enter text to analyse below" showAlert={showAlert} mode={mode} themeBucket={themeBucket} />
      </div>
      
    </>
  );
}

export default App;
