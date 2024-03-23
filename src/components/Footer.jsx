import social from "../assets/icons/social.png";

const Footer = () => {
  return (
    <div className='bg-black mt-20'>
      <div className='w-[80%] mx-auto py-24'>
        <div className='grid grid-cols-5 justify-between text-gray-400 mb-8'>
          <div>
            <h2 className='text-2xl font-bold'>Career Hun</h2>
            <p className='mb-2'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis,
              molestiae!
            </p>
            <img className='w-20' src={social} alt='' />
          </div>

          <div>
            <h2 className='text-xl font-semibold mb-3'>Company</h2>
            <ul className='*:text-sm flex flex-col gap-1'>
              {["About US", "Work", "Latest News", "Career"].map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className='text-xl font-semibold mb-3'>Product</h2>
            <ul className='*:text-sm flex flex-col gap-1'>
              {["About US", "Work", "Latest News", "Career"].map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className='text-xl font-semibold mb-3'>Support</h2>
            <ul className='*:text-sm flex flex-col gap-1'>
              {["About US", "Work", "Latest News", "Career"].map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className='text-xl font-semibold mb-3'>Contact</h2>
            <ul className='*:text-sm flex flex-col gap-1'>
              {["About US", "Work", "Latest News", "Career"].map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className='text-gray-400 flex items-center justify-between my-6 pt-8 border-t-2 border-gray-400'>
          <p>@2024 Career Hub. All right reserved</p>
          <p>Powered by Career Hub</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
