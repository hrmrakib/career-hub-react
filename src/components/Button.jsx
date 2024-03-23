const Button = ({ text }) => {
  return (
    <div>
      <button className='bg-gradient-to-r from-cyan-400 to-blue-600 text-white px-6 py-2 rounded-lg'>
        {text}
      </button>
    </div>
  );
};

export default Button;
