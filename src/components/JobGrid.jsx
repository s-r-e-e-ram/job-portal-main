import React, { useEffect, useState } from 'react';
import JobCard from './JobCard';
import './JobGrid.css';

const JobGrid = ({ jobData, locationFilter, salary, jobType, filteredRoles, setLocationFilter, setSalary, setJobType, setSearchTerm}) => {

  const clearFilters = ()=>{
    setSalary([10,200]);
    setLocationFilter("");
    setJobType("");
    setSearchTerm("");
  }

  const filteredJobs = jobData?.filter((job) => {
  if (!(job.salary >= salary[0] && job.salary <= salary[1])) {
    return false;
  }

  if (locationFilter && job.location !== locationFilter) {
    return false;
  }

  if (jobType && job.jobType !== jobType) {
    return false;
  }

  if (filteredRoles.length > 0 && !filteredRoles.includes(job.title)) {
    return false;
  }

  return true; 
});


  return (
    <section className="job-grid-section">
      <div className="container">
        <div className="job-grid">
          {filteredJobs?.length > 0 ? (
            filteredJobs?.map((job) => <JobCard key={job.id} job={job} />)
          ) : (
            <div className='no-job-found'>
              <p>No jobs found</p>
              <p onClick={clearFilters} className='clear-filter'>Clear filters</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default JobGrid;