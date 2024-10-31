import CaseStudy from "./CaseStudy";

const CaseStudiesGrid = ({ caseStudies }) => {
    return (
      <div className="container">
        <div className="row gx-5">
          {caseStudies.map((caseStudy, index) => (
            <div key={index} className="col-md-4 mb-4" >
              <CaseStudy caseStudy={caseStudy} />
            </div>
          ))}
        </div>
      </div>
    );
  };
export default CaseStudiesGrid;