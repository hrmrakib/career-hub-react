import money from "../assets/icons/money.png";
import jobTitle from "../assets/icons/calendar.png";
import phone from "../assets/icons/phone.png";
import email from "../assets/icons/email.png";
import location from "../assets/icons/location2.png";

const JobDetail = () => {
  return (
    <div className='w-[80%] mx-auto'>
      <h2 className='text-5xl font-bold text-center my-10'>Job Detail</h2>

      <div className='grid grid-cols-3 gap-10'>
        <div className='col-span-2'>
          <p className='mb-5'>
            <span className='text-xl font-bold'>Job Description: </span> As a
            UI/UX designer, your role involves creating user interfaces (UI) and
            designing user experiences (UX) for digital products such as
            websites, mobile apps, and software applications. Here is an
            overview of what your responsibilities might entail
          </p>
          <p className='mb-5'>
            <span className='text-xl font-bold'>Job Responsibility: </span>
            Collaborating with cross-functional teams, including developers,
            product managers, and stakeholders, throughout the design process to
            ensure alignment with project goals, technical feasibility, and user
            needs. Designing user interfaces that are responsive and adaptive to
            different screen sizes and devices
          </p>
          <p className='mb-5'>
            <span className='text-xl font-bold'>
              Educational Requirements:{" "}
            </span>
            Bachelor Degree / Bootcamps and Short Courses / Self-Study and
            Practice
          </p>
          <p className='mb-5'>
            <span className='text-xl font-bold'>Experience: </span>2 Years
            experience in this field.
          </p>
        </div>
        <div className='col-span-1'>
          <div className='bg-gray-100 p-4 rounded-2xl'>
            <h2 className='text-2xl font-bold border-b-2 pb-4 mb-4'>
              Job Detail
            </h2>
            <div className='flex items-center gap-2 mb-2'>
              <img src={money} alt='' />
              <span className='font-bold'>Salary: </span>
              <span className='text-gray-600 font-semibold'>
                100k - 150k (per month)
              </span>
            </div>
            <div className='flex items-center gap-2 mb-4'>
              <img src={jobTitle} alt='' />
              <span className='font-bold'>Job Title: </span>
              <span className='text-gray-600 font-semibold'>
                100k - 150k (per month)
              </span>
            </div>

            <h2 className='text-xl font-bold border-b-2 pb-1 mb-4'>
              Contact Info
            </h2>

            <div className='flex items-center gap-2 mb-2'>
              <img src={phone} alt='' />
              <span className='font-bold'>Phone: </span>
              <span className='text-gray-600 font-semibold'>
                +88017889965584
              </span>
            </div>
            <div className='flex items-center gap-2 mb-2'>
              <img src={email} alt='' />
              <span className='font-bold'>Email: </span>
              <span className='text-gray-600 font-semibold'>
                keramotali@gmail.com
              </span>
            </div>
            <div className='flex items-center gap-2 mb-2'>
              <img src={location} alt='' />
              <span className='font-bold'>Location: </span>
              <span className='text-gray-600 font-semibold'>
                Dhaka, Bangladesh
              </span>
            </div>
          </div>

          <button className='mt-4 w-full bg-gradient-to-r from-cyan-400 to-blue-600 text-white px-6 py-2 rounded-lg'>
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobDetail;
