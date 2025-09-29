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
    "salary": 87,
    "currency": "k",
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
    "salary": 134,
    "currency": "k",
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
    "salary": 65,
    "currency": "k",
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
    "salary": 199,
    "currency": "k",
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
    "salary": 48,
    "currency": "k",
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
    "salary": 113,
    "currency": "k",
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
    "salary": 152,
    "currency": "k",
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
    "salary": 29,
    "currency": "k",
    "postedTime": "24h Ago",
    "description": [
      "A user-friendly interface lets you browse stunning photos and videos",
      "Filter destinations based on interests and travel style, and create personalized"
    ]
  },
{
    "id": 9,
    "company": "Google",
    "logo": "google",
    "title": "Frontend Developer",
    "experience": "2-4 yr Exp",
    "location": "Bangalore",
    "jobType": "Full-time",
    "salary": 92,
    "currency": "k",
    "postedTime": "12h Ago",
    "description": [
      "Develop and maintain responsive web applications",
      "Collaborate with UX/UI team to improve user experience"
    ]
  },
  {
    "id": 10,
    "company": "Microsoft",
    "logo": "microsoft",
    "title": "Backend Developer",
    "experience": "3-5 yr Exp",
    "location": "Mumbai",
    "jobType": "Part-time",
    "salary": 175,
    "currency": "k",
    "postedTime": "3d Ago",
    "description": [
      "Design and implement scalable backend APIs",
      "Work with database optimization and cloud services"
    ]
  },
  {
    "id": 11,
    "company": "Facebook",
    "logo": "facebook",
    "title": "Data Analyst",
    "experience": "1-2 yr Exp",
    "location": "Delhi",
    "jobType": "Full-time",
    "salary": 68,
    "currency": "k",
    "postedTime": "1d Ago",
    "description": [
      "Analyze datasets and provide actionable insights",
      "Prepare visualizations and reports for stakeholders"
    ]
  },
  {
    "id": 12,
    "company": "Flipkart",
    "logo": "flipkart",
    "title": "UI/UX Designer",
    "experience": "2-3 yr Exp",
    "location": "Hyderabad",
    "jobType": "Contract",
    "salary": 120,
    "currency": "k",
    "postedTime": "6h Ago",
    "description": [
      "Design intuitive and user-friendly web/mobile interfaces",
      "Collaborate with frontend developers to implement designs"
    ]
  },
  {
    "id": 13,
    "company": "Netflix",
    "logo": "netflix",
    "title": "DevOps Engineer",
    "experience": "3-6 yr Exp",
    "location": "Bangalore",
    "jobType": "Full-time",
    "salary": 144,
    "currency": "k",
    "postedTime": "2d Ago",
    "description": [
      "Manage cloud infrastructure and CI/CD pipelines",
      "Monitor system performance and ensure uptime"
    ]
  },
  {
    "id": 14,
    "company": "Adobe",
    "logo": "adobe",
    "title": "Product Manager",
    "experience": "4-7 yr Exp",
    "location": "Delhi",
    "jobType": "Full-time",
    "salary": 198,
    "currency": "k",
    "postedTime": "5h Ago",
    "description": [
      "Lead product development from ideation to launch",
      "Coordinate with engineering, design, and marketing teams"
    ]
  },
  {
    "id": 15,
    "company": "Paytm",
    "logo": "paytm",
    "title": "Mobile App Developer",
    "experience": "2-4 yr Exp",
    "location": "Mumbai",
    "jobType": "Freelance",
    "salary": 55,
    "currency": "k",
    "postedTime": "1w Ago",
    "description": [
      "Develop functional Android and iOS applications",
      "Integrate APIs and maintain app performance"
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
