import { useState } from "react";
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import CaseStudiesGrid from './../components/CaseStudiesGrid';
import axios from "axios";

const CaseStudies = () => {

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

    return(
        <>
        <Navbar/>
        <CaseStudiesGrid caseStudies={caseStudies}/>
        </>
    )
}
export default CaseStudies;