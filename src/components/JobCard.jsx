import React from "react";
import "./JobCard.css";

const JobCard = ({ job }) => {
  const getCompanyLogo = (logo) => {
    const logos = {
      amazon: (
        <div className="company-logo amazon-logo">
          <img
            src="/assets/images/amazon.png"
            alt="Amazon Logo"
            className="company-icon"
          />
        </div>
      ),
      tesla: (
        <div className="company-logo tesla-logo">
          <img
            src="/assets/images/tesla.png"
            alt="Tesla Logo"
            className="company-icon"
          />
        </div>
      ),
      swiggy: (
        <div className="company-logo swiggy-logo">
          <img
            src="/assets/images/swiggy.png"
            alt="Swiggy Logo"
            className="company-icon"
          />
        </div>
      ),
      google: (
        <div className="company-logo google-logo">
          <img
            src="/assets/images/google.png"
            alt="google Logo"
            className="company-icon"
          />
        </div>
      ),
      microsoft: (
        <div className="company-logo microsoft-logo">
          <img
            src="/assets/images/microsoft.png"
            alt="microsoft Logo"
            className="company-icon"
          />
        </div>
      ),
      facebook: (
        <div className="company-logo facebook-logo">
          <img
            src="/assets/images/facebook.png"
            alt="facebook Logo"
            className="company-icon"
          />
        </div>
      ),
      flipkart: (
        <div className="company-logo flipkart-logo">
          <img
            src="/assets/images/flipkart.png"
            alt="flipkart Logo"
            className="company-icon"
          />
        </div>
      ),
      netflix: (
        <div className="company-logo netflix-logo">
          <img
            src="/assets/images/netflix.png"
            alt="netflix Logo"
            className="company-icon"
          />
        </div>
      ),
      adobe: (
        <div className="company-logo adobe-logo">
          <img
            src="/assets/images/adobe.png"
            alt="adobe Logo"
            className="company-icon"
          />
        </div>
      ),
      paytm: (
        <div className="company-logo paytm-logo">
          <img
            src="/assets/images/paytm.png"
            alt="paytm Logo"
            className="company-icon"
          />
        </div>
      ),
    };

    return (
      logos[logo] || (
        <div className="company-logo default-logo">
          <img
            src="/assets/images/default-logo.png"
            alt="Default Logo"
            className="company-icon"
          />
        </div>
      )
    );
  };

  return (
    <div className="job-card">
      <div>
      <div className="job-card-header">
        <div className="company-logo-container">{getCompanyLogo(job.logo)}</div>
        <div className="posted-time">{job.postedTime}</div>
      </div>

      <h3 className="job-title">{job.title}</h3>

      <div className="job-details">
        <div className="detail-item">
          
          <img src="assets/images/exeperience.png" alt="" />
          <span>{job.experience}</span>
        </div>

        <div className="detail-item">
          <img src="assets/images/onsite.png" alt="" />
          <span>{job.location}</span>
        </div>

        <div className="detail-item">
          <img src="assets/images/salary.png" alt="" />
          <span>{job.salary}{job.currency} /M</span>
        </div>
      </div>

      <div className="job-description">
        {job.description.map((desc, index) => (
          <div key={index} className="description-item">
            <span className="bullet">•</span>
            <span>{desc}</span>
          </div>
        ))}
      </div>
      </div>

      <button className="apply-btn">Apply Now</button>
    </div>
  );
};

export default JobCard;
