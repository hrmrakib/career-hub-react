import Button from "../components/Button";
import user from "../assets/images/user.png";
const Hero = () => {
  return (
    <section className='flex items-center justify-between py-20 mb-10'>
      <div className='max-w-[500px]'>
        <h1 className='text-5xl font-bold leading-snug mb-3'>
          One Step <br /> Closer To Your <br />
          <span className='text-blue-600'>Dream Job</span>
        </h1>
        <p className='max-w-[380px] text-gray-500 mb-6'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque odit
          laudantium est illo esse neque similique quia pariatur minus in.
        </p>
        <Button text='Get Started'></Button>
      </div>
      <div className=''>
        <img className='max-w-[400px]' src={user} alt='' />
      </div>
    </section>
  );
};

export default Hero;
