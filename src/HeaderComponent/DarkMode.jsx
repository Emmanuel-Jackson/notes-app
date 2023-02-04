import React, { useState, useEffect } from "react";
import Brightness4Icon from '@material-ui/icons/Brightness4';
import Brightness5Icon from '@material-ui/icons/Brightness5';
import { IconButton } from '@material-ui/core';

function DarkMode() {
  const [darkMode, setDarkMode] = useState(false);
//Add switch
  useEffect(() => {
    const json = localStorage.getItem("site-dark-mode");
    const currentMode = JSON.parse(json);
    if (currentMode) {
      setDarkMode(true);
    } else {
      setDarkMode(false);
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
    const json = JSON.stringify(darkMode);
    localStorage.setItem("site-dark-mode", json);
    
  }, [darkMode]);
  return (
    <div>
    {darkMode ? (
      <>
      <IconButton onClick={() => setDarkMode(!darkMode)}>
        <Brightness5Icon variant='outlined' color='primary' size="small"/>
      </IconButton>
      </>
    ) : (
      <>
      <IconButton onClick={() => setDarkMode(!darkMode)}>
      <Brightness4Icon variant='outlined' color='primary' size="small"/>
      </IconButton>
      </>
    )}
    </div>
  );
}

export default DarkMode;
