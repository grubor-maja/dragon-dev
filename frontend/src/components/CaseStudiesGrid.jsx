import CaseStudy from "./CaseStudy";

const CaseStudiesGrid = ({caseStudies}) => {
return (
    <>
    <div className="case-studies">
        {caseStudies.map((caseStudy,index) => (
            <CaseStudy caseStudy={caseStudy}/>
        ))}
    </div>
    </>
)
}
export default CaseStudiesGrid;