import CaseStudy from "./CaseStudy";

const CaseStudies = ({caseStudies}) => {
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
export default CaseStudies;