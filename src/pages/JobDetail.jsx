import money from "../assets/icons/money.png";
import jobTitle from "../assets/icons/calendar.png";
import phonePng from "../assets/icons/phone.png";
import emailPng from "../assets/icons/email.png";
import locationPng from "../assets/icons/location2.png";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { saveJobApplication } from "../utils/localStorage";

const JobDetail = () => {
  const navigate = useNavigate();
  const jobs = useLoaderData();
  let { id } = useParams();
  id = parseInt(id);
  const job = jobs.find((job) => job.id === id);

  const {
    job_title,
    company_name,
    location,
    job_responsibility,
    job_description,
    educational_requirements,
    experiences,
    salary,
    contact_information: { phone, email },
  } = job;

  const handleApply = () => {
    saveJobApplication(id);
    toast("You have applied successfully!");
    navigate("/applied");
  };

  return (
    <div className='w-[80%] mx-auto'>
      <h2 className='text-5xl font-bold text-center my-10'>Job Detail</h2>
      <ToastContainer autoClose={1500} />
      <div className='grid grid-cols-3 gap-10'>
        <div className='col-span-2'>
          <p className='mb-5'>
            <span className='text-xl font-bold'>Job Description: </span>{" "}
            {job_description}
          </p>
          <p className='mb-5'>
            <span className='text-xl font-bold'>Job Responsibility: </span>
            {job_responsibility}
          </p>
          <p className='mb-5'>
            <span className='text-xl font-bold'>
              Educational Requirements:{" "}
            </span>
            {educational_requirements}
          </p>
          <p className='mb-5'>
            <span className='text-xl font-bold'>Experience: </span>
            {experiences}
          </p>
        </div>
        <div className='col-span-1'>
          <div className='bg-gray-100 p-4 rounded-2xl'>
            <h2 className='text-2xl font-bold border-b-2 pb-4 mb-4'>
              Job Detail
            </h2>
            <h2 className='text-xl font-bold  mb-2'>
              <span className='text-lg text-gray-400'>Company: </span>
              {company_name}
            </h2>
            <div className='flex items-center gap-2 mb-2'>
              <img src={money} alt='' />
              <span className='font-bold'>Salary: </span>
              <span className='text-gray-600 font-semibold'>{salary}</span>
            </div>
            <div className='flex items-center gap-2 mb-4'>
              <img src={jobTitle} alt='' />
              <span className='font-bold'>Job Title: </span>
              <span className='text-gray-600 font-semibold'>{job_title}</span>
            </div>

            <h2 className='text-xl font-bold border-b-2 pb-1 mb-4'>
              Contact Info
            </h2>

            <div className='flex items-center gap-2 mb-2'>
              <img className='size-5' src={phonePng} alt='' />
              <span className='font-bold'>Phone: </span>
              <span className='text-gray-600 font-semibold'>{phone}</span>
            </div>
            <div className='flex items-center gap-2 mb-2'>
              <img className='size-5' src={emailPng} alt='' />
              <span className='font-bold'>Email: </span>
              <span className='text-gray-600 font-semibold'>{email}</span>
            </div>
            <div className='flex items-cente gap-2 mb-2'>
              <img className='size-5' src={locationPng} alt='' />
              <span className='font-bold'>Location: </span>
              <span className='text-gray-600 font-semibold'>{location}</span>
            </div>
          </div>

          <div>
            <button
              onClick={handleApply}
              className='mt-4 w-full bg-gradient-to-r from-cyan-400 to-blue-600 text-white px-6 py-2 rounded-lg'
            >
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetail;
