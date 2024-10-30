const CaseStudy = ({caseStudy}) => {
 return(
    <>
    <div className="card" style={{width: "26rem"}}>
        <img src={caseStudy.imgSrc} className="card-img-top" alt={caseStudy.title}/>
        <div className="card-body">
            <h5 className="card-title">{caseStudy.title}</h5>
            <p className="card-text">{caseStudy.subtitle}</p>
            <a href="#" className="btn btn-primary">Read More</a>
        </div>
    </div>
    </>
 );
}
export default CaseStudy;