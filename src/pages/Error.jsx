import { Link } from "react-router-dom";

const Error = ({ message = "404" }) => {
  return (
    <>
      <div className='mb-2 flex items-center justify-center h-screen'>
        <div className='bg-red-500 text-white font-bold rounded-lg border shadow-lg p-5'>
          <div className='flex items-center gap-5'>
            <svg
              className='h-8 w-8 mr-2 fill-current'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 20 20'
            >
              <path d='M10 12a1 1 0 0 1-1-1V6a1 1 0 1 1 2 0v5a1 1 0 0 1-1 1zM10 16a1 1 0 0 1-1-1c0-1.103-.897-2-2-2a1 1 0 1 1 0-2c1.654 0 3 1.346 3 3a1 1 0 0 1-1 1zM10 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16zm0 14a6 6 0 1 1 0-12 6 6 0 0 1 0 12z' />
            </svg>
            <p>{message} Not Found!</p>
            <Link
              className='bg-gradient-to-r from-cyan-400 to-blue-600 text-white px-6 py-2 rounded-lg'
              to='/'
            >
              Go Home
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Error;
