import { useEffect, useState } from "react";
import location from "/assets/icons/Location.png";
import money from "/assets/icons/money.png";
import { useLoaderData } from "react-router-dom";
import { getJobApplication } from "../utils/localStorage";

const AppliedJob = () => {
  const jobs = useLoaderData();
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [displayJobs, setDisplayJobs] = useState([]);

  useEffect(() => {
    const getStoredJobs = getJobApplication();

    if (jobs.length > 0) {
      // const jobsApplied = jobs.filter((job) => getStoredJobs.includes(job.id));

      const jobsApplied = [];
      for (const id of getStoredJobs) {
        const job = jobs.find((job) => job.id === id);
        if (job) {
          jobsApplied.push(job);
        }
      }
      setDisplayJobs(jobsApplied);
      setAppliedJobs(jobsApplied);
      // console.log(jobs, jobsApplied);
    }
  }, [jobs]);

  const handleFilter = (id) => {
    if (id === "All") {
      const allJobs = appliedJobs.filter((job) => job.remote_or_onsite === id);
      setDisplayJobs(allJobs);
    } else if (id === "Remote") {
      const allJobs = appliedJobs.filter((job) => job.remote_or_onsite === id);
      setDisplayJobs(allJobs);
    } else if (id === "Onsite") {
      const allJobs = appliedJobs.filter((job) => job.remote_or_onsite === id);
      setDisplayJobs(allJobs);
    }
  };

  return (
    <div className='w-[80%] mx-auto'>
      <h2 className='text-4xl font-bold text-center my-5' id='apply'>
        Applied Job
      </h2>

      <div className='dropdown flex justify-end'>
        <div
          tabIndex={0}
          role='button'
          className='btn m-1 bg-blue-500 text-white'
        >
          All
        </div>
        <ul
          tabIndex={0}
          className='dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52'
        >
          <li onClick={() => handleFilter("All")}>
            <a>All</a>
          </li>
          <li onClick={() => handleFilter("Remote")}>
            <a>Remote</a>
          </li>
          <li onClick={() => handleFilter("Onsite")}>
            <a>Onsite</a>
          </li>
        </ul>
      </div>

      <section className=''>
        <div className='my-20 grid grid-cols-1 gap-4 lg:gap-10'>
          {displayJobs.map((job) => (
            <div
              key={job.id}
              className='flex border px-5 py-1 rounded-xl items-center gap-8'
            >
              <div className='w-40 h-40 flex items-center'>
                <img className='' src={job.logo} alt='' />
              </div>

              <div className=''>
                <h2 className='text-2xl font-bold mt-5'>{job.job_title}</h2>
                <h3 className='text-xl font-medium text-gray-500 mb-3'>
                  {job.company_name}
                </h3>
                <div className='flex items-center gap-5 mb-4'>
                  <button className='btn btn-outline btn-primary'>
                    {job.remote_or_onsite}
                  </button>
                  <button className='btn btn-outline btn-primary'>
                    {job.job_type}
                  </button>
                </div>
                <div className='flex items-center gap-3 my-3'>
                  <p className='flex items-center gap-2'>
                    <img src={location} alt='' />
                    <span>{job.location}</span>
                  </p>
                  <p className='flex items-center gap-2'>
                    <img src={money} alt='' />
                    <span>{job.salary}</span>
                  </p>
                </div>
              </div>

              <button className='ml-auto bg-gradient-to-r from-cyan-400 to-blue-600 text-white px-6 py-2 rounded-lg'>
                View Details
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AppliedJob;
