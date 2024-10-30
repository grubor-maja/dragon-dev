
import './App.css'
import Navbar from './components/Navbar'
import { useState } from 'react'
import { useEffect } from 'react';
import axios from 'axios';

function App() {

  const [caseStudies, setCaseStudies] = useState([]);

  useEffect(() => {
    const fetchCaseStudies = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/case-studies');
        setCaseStudies(response.data);
        console.log(response.data);
      } catch (error) {
        console.error(error)
    }
  }
  fetchCaseStudies();
  },[]);

  return (
    <>
      <Navbar/>
    </>
  )
}

export default App
