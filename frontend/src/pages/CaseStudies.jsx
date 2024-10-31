import { useState } from "react";
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import CaseStudiesGrid from './../components/CaseStudiesGrid';
import axios from "axios";

const CaseStudies = () => {

    // Pagination
    const [caseStudies, setCaseStudies] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const itemsPerPage = 3;

    // Filtering
    const [category, setCategory] = useState("");

    // Sorting
    const [sortBy, setSortBy] = useState("title");

    useEffect(() => {
      const fetchCaseStudies = async () => {
        try {
          const response = await axios.get(`http://localhost:5000/api/case-studies?page=${currentPage}&limit=${itemsPerPage}&category=${category}&sortBy=${sortBy}`);
          setCaseStudies(response.data.caseStudies);
          setTotalPages(response.data.totalPages);
          console.log(response.data);
        } catch (error) {
          console.error(error)
      }
    }
    fetchCaseStudies();
    },[currentPage,category,sortBy]);

    const goToPreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const goToNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };



    return(
        <>
        <Navbar/>
        <select className="form-select" aria-label="Default select example" value={category} onChange={(e) => setCategory(e.target.value)}>
            <option selected>Categories</option>
            <option value="Cybersecurity">Cybersecurity</option>
            <option value="HealthTech">HealthTech</option>
            <option value="PharmaTech">PharmaTech</option>
            <option value="Finance">Finance</option>
            <option value="Retail">Retail</option>
        </select>
        <br/>
        <br/>
        <select className="form-select" aria-label="Default select example" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option selected>Sort by</option>
            <option value="title">Title</option>
            <option value="subtitle">Subtitle</option>
        </select>
        <CaseStudiesGrid caseStudies={caseStudies}/>
        
        <nav aria-label="Page navigation example" className="d-flex justify-content-center mt-4">
                <ul className="pagination">
                    <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
                        <button className="page-link" onClick={goToPreviousPage}>Previous</button>
                    </li>
                    <li className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}>
                        <button className="page-link" onClick={goToNextPage}>Next</button>
                    </li>
                </ul>
            </nav>
      </>
    )
}
export default CaseStudies;