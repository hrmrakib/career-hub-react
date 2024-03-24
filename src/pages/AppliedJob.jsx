import { useEffect } from "react";
import location from "../assets/icons/Location.png";
import money from "../assets/icons/money.png";
import { useLoaderData } from "react-router-dom";
import { getJobApplication } from "../utils/localStorage";

const AppliedJob = () => {
  const jobs = useLoaderData();

  useEffect(() => {
    const getStoredJobs = getJobApplication();

    if (jobs.length > 0) {
      const jobsApplied = jobs.filter((job) => getStoredJobs.includes(job.id));
      console.log(jobsApplied);
    }
  }, []);

  return (
    <div className='w-[80%] mx-auto'>
      <h2 className='text-4xl font-bold text-center my-5'>Applied Job</h2>

      <div className='flex bg-gray-100 rounded-md p-2 ml-auto w-max'>
        <select className='' name='' id=''>
          <option value='Filter By'>Name</option>
          <option value='Filter By'>Area</option>
          <option value='Filter By'>Type</option>
        </select>
      </div>

      <section className=''>
        <div className='my-20 grid grid-cols-1 gap-4 lg:gap-10'>
          {jobs.map((job) => (
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
