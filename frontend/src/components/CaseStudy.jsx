const CaseStudy = ({ caseStudy }) => {
    return (
      <div className="card h-100" style={{ width: "100%" }}>
        <img src={caseStudy.imgSrc} className="card-img-top" alt={caseStudy.title} />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{caseStudy.title}</h5>
          <p className="card-text">{caseStudy.subtitle}</p>
          <div className="mt-auto">
            <a href="#" className="btn btn-primary">Read More</a>
          </div>
        </div>
      </div>
    );
  };
  
  export default CaseStudy;