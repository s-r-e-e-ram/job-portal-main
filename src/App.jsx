import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import SearchSection from "./components/SearchSection";
import JobGrid from "./components/JobGrid";
import "./App.css";

function App() {
  const [jobData, setJobData] = useState(
    [
  {
    "id": 1,
    "company": "Amazon",
    "logo": "amazon",
    "title": "Full Stack Developer",
    "experience": "1-3 yr Exp",
    "location": "Mumbai",
    "jobType": "Full-time",
    "salary": "12 LPA",
    "postedTime": "24h Ago",
    "description": [
      "A user-friendly interface lets you browse stunning photos and videos",
      "Filter destinations based on interests and travel style, and create personalized"
    ]
  },
  {
    "id": 2,
    "company": "Tesla",
    "logo": "tesla",
    "title": "Node Js Developer",
    "experience": "1-3 yr Exp",
    "location": "Delhi",
    "jobType": "Part-time",
    "salary": "12 LPA",
    "postedTime": "24h Ago",
    "description": [
      "A user-friendly interface lets you browse stunning photos and videos",
      "Filter destinations based on interests and travel style, and create personalized"
    ]
  },
  {
    "id": 3,
    "company": "Swiggy",
    "logo": "swiggy",
    "title": "UX/UI Designer",
    "experience": "1-3 yr Exp",
    "location": "Bangalore",
    "jobType": "Full-time",
    "salary": "12 LPA",
    "postedTime": "24h Ago",
    "description": [
      "A user-friendly interface lets you browse stunning photos and videos",
      "Filter destinations based on interests and travel style, and create personalized"
    ]
  },
  {
    "id": 4,
    "company": "Amazon",
    "logo": "amazon",
    "title": "Full Stack Developer",
    "experience": "1-3 yr Exp",
    "location": "Hyderabad",
    "jobType": "Part-time",
    "salary": "12 LPA",
    "postedTime": "24h Ago",
    "description": [
      "A user-friendly interface lets you browse stunning photos and videos",
      "Filter destinations based on interests and travel style, and create personalized"
    ]
  },
  {
    "id": 5,
    "company": "Tesla",
    "logo": "tesla",
    "title": "Node Js Developer",
    "experience": "1-3 yr Exp",
    "location": "Mumbai",
    "jobType": "Full-time",
    "salary": "12 LPA",
    "postedTime": "24h Ago",
    "description": [
      "A user-friendly interface lets you browse stunning photos and videos",
      "Filter destinations based on interests and travel style, and create personalized"
    ]
  },
  {
    "id": 6,
    "company": "Swiggy",
    "logo": "swiggy",
    "title": "UX/UI Designer",
    "experience": "1-3 yr Exp",
    "location": "Delhi",
    "jobType": "Part-time",
    "salary": "12 LPA",
    "postedTime": "24h Ago",
    "description": [
      "A user-friendly interface lets you browse stunning photos and videos",
      "Filter destinations based on interests and travel style, and create personalized"
    ]
  },
  {
    "id": 7,
    "company": "Amazon",
    "logo": "amazon",
    "title": "Full Stack Developer",
    "experience": "1-3 yr Exp",
    "location": "Bangalore",
    "jobType": "Full-time",
    "salary": "12 LPA",
    "postedTime": "24h Ago",
    "description": [
      "A user-friendly interface lets you browse stunning photos and videos",
      "Filter destinations based on interests and travel style, and create personalized"
    ]
  },
  {
    "id": 8,
    "company": "Tesla",
    "logo": "tesla",
    "title": "Node Js Developer",
    "experience": "1-3 yr Exp",
    "location": "Hyderabad",
    "jobType": "Part-time",
    "salary": "12 LPA",
    "postedTime": "24h Ago",
    "description": [
      "A user-friendly interface lets you browse stunning photos and videos",
      "Filter destinations based on interests and travel style, and create personalized"
    ]
  }
]
  
  );
  const [locationFilter, setLocationFilter] = useState("");
  const [salary, setSalary] = useState([10, 200]);
  const [jobType, setJobType] = useState("");
  const [filteredRoles, setFilteredRoles] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  
  

  useEffect(() => {
    fetch("src/components/data.json")
      .then((res) => res.json())
      .then((data) => {
        setJobData(data);
      });

      sortUserPlugins
  }, []);

  return (
    <div className="App">
      <Header />
      <SearchSection jobData={jobData} setLocationFilter={setLocationFilter} salary={salary} filteredRoles={filteredRoles} searchTerm={searchTerm}
                     setSalary={setSalary} setJobType={setJobType} setFilteredRoles={setFilteredRoles} setSearchTerm={setSearchTerm}/>


      <JobGrid jobData={jobData} locationFilter={locationFilter} salary={salary} jobType={jobType} filteredRoles={filteredRoles} searchTerm={searchTerm}
               setLocationFilter={setLocationFilter} setSalary={setSalary} setJobType={setJobType} setSearchTerm={setSearchTerm} />
    </div>
  );
}

export default App;
