import { Link } from "react-router-dom";
import location from "../assets/icons/Location.png";
import money from "../assets/icons/money.png";
import { useEffect, useState } from "react";

const FeaturedJob = () => {
  const [jobs, setJobs] = useState([]);
  const [jobLength, setJobLength] = useState(2);

  useEffect(() => {
    fetch("./jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);

  return (
    <div>
      {console.log(jobLength)}
      <h2 className='text-4xl font-bold text-center mb-5'>Featured Jobs</h2>
      <p className='text-gray-500 text-center'>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique in
        facilis asperiores.
      </p>

      <section className='my-20 grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-10'>
        {jobs.slice(0, jobLength).map((job) => (
          <div key={job.id} className='border p-5 rounded-xl'>
            <img className='w-24' src={job.logo} alt='' />
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

            <div>
              <Link to={`/job/${job.id}`}>
                <button className='bg-gradient-to-r from-cyan-400 to-blue-600 text-white px-6 py-2 rounded-lg'>
                  View Details
                </button>
              </Link>
            </div>
          </div>
        ))}
      </section>

      <div className={`text-center ${jobLength === jobs.length && "hidden"}`}>
        <button
          onClick={() => setJobLength(jobLength + 2)}
          className='bg-gradient-to-r from-cyan-400 to-blue-600 text-white px-6 py-2 rounded-lg'
        >
          See all Jobs
        </button>
      </div>
    </div>
  );
};

export default FeaturedJob;
