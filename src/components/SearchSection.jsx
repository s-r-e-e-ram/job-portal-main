import React, { useEffect, useState } from "react";
import "./SearchSection.css";

const SearchSection = ({jobData, setLocationFilter, salary, setSalary, setJobType, filteredRoles, setFilteredRoles ,searchTerm, setSearchTerm }) => {

  const [isFocused, setIsFocused] = useState(false);


  useEffect(()=>{
    if(!searchTerm.trim()){
      setFilteredRoles([]);
      return
    }

    try{
      const regex = new RegExp(searchTerm, "i");
      const matches = jobData.map(job=>job.title).filter(title => regex.test(title));

      setFilteredRoles([...new Set(matches)]);

      console.log(filteredRoles)
    }
    catch(err){
      console.log("invalid reges", err )
      setFilteredRoles([]);
    }

  },[searchTerm, jobData])

  const handleLocationChange = (e) => {
    setLocationFilter(e.target.value);
  };
  
  const handleJobTypeChange = (e)=>{
    setJobType(e.target.value);
    console.log(e.target.value);
  }

  const handleSalaryChange = (e) => {
    const index = parseInt(e.target.dataset.index);
    const value = parseInt(e.target.value);
    const newSalary = [...salary];

    if (index === 0) {
      // min slider cannot cross max
      newSalary[0] = Math.min(value, newSalary[1] - 1);
    } else {
      // max slider cannot cross min
      newSalary[1] = Math.max(value, newSalary[0] + 1);
    }

    setSalary(newSalary);
  };

  return (
    <section className="search-section">
      <div className="container">
        {/* <div className="search-form"> */}
        <div className="search-field">
          <div className="search-input-container">
            <img src="assets/images/search.png" alt="" />
            <input
              type="text"
              placeholder="Search By Job Title, Role"
              className="search-input"
              value={searchTerm}
              onChange={(e)=>setSearchTerm(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
            />
          </div>

          {
            isFocused && filteredRoles.length > 0 && ( 
                <div className="dropDown">
                  {
                    filteredRoles.map((item, index)=>(
                      <p onMouseDown={()=>setSearchTerm(item)} key={index}>
                        {item}
                        </p>
                    ))
                  }
                </div>
            )
          }
        </div>

        <div className="location-field">
          <div className="location-input-container">
            <img src="assets/images/location.png" alt="" />
            <select onChange={handleLocationChange} className="location-select">
              <option value="">Preferred Location</option>
              <option>Mumbai</option>
              <option>Delhi</option>
              <option>Bangalore</option>
              <option>Hyderabad</option>
            </select>
            <svg
              className="dropdown-icon"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <polyline points="6,9 12,15 18,9"></polyline>
            </svg>
          </div>
        </div>

        <div className="job-type-field">
          <div className="job-type-container">
            <img src="assets/images/jobtype.png" alt="" />

            <select className="job-type-select" onChange={handleJobTypeChange}>
              <option className="dropt-down-options" value="">Job type</option>
              <option className="dropt-down-options" value="Full-time">Full Time</option>
              <option className="dropt-down-options" value="Part-time">Part Time</option>

              {/* <option className="dropt-down-options" value="">Contract</option>
              <option className="dropt-down-options" value="">Freelance</option> */}

            </select>
            <svg
              className="dropdown-icon"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <polyline points="6,9 12,15 18,9"></polyline>
            </svg>
          </div>
        </div>
        {/* </div> */}

        <div className="salary-filter">
          <div className="salary-header">
            <span className="salary-label">Salary Per Month</span>
            <span className="salary-range">
              <span>₹{salary[0]}k</span>
              <p>-</p>
              <span>₹{salary[1]}k</span>
            </span>
          </div>
          {/* <div className="salary-slider">
            <input
              type="range"
              min="10"
              max="200"
              value={salary[0]}
              data-index="0"
              onChange={handleSalaryChange}
              className="slider slider-min"
            />
            <input
              type="range"
              min="10"
              max="200"
              value={salary[1]}
              data-index="1"
              onChange={handleSalaryChange}
              className="slider slider-max"
            />
            <div className="slider-track">
              <div 
                className="slider-range"
                style={{
                  left: `${(salary[0] - 10) / (200 - 10) * 100}%`,
                  width: `${(salary[1] - salary[0]) / (200 - 10) * 100}%`
                }}
              ></div>
            </div>
          </div> */}
          <div className="salary-slider">
            <input
              type="range"
              min="10"
              max="200"
              value={salary[0]}
              data-index="0"
              onChange={handleSalaryChange}
              className="slider slider-min"
            />
            <input
              type="range"
              min="10"
              max="200"
              value={salary[1]}
              data-index="1"
              onChange={handleSalaryChange}
              className="slider slider-max"
            />
            <div className="slider-track">
              <div
                className="slider-range"
                style={{
                  left: `${((salary[0] - 10) / (200 - 10)) * 100}%`,
                  width: `${((salary[1] - salary[0]) / (200 - 10)) * 100}%`,
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
  // };
};

export default SearchSection;
