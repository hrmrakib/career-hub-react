import categories from "../data/categories.json";

const CategoryList = () => {
  return (
    <div>
      <h2 className='text-4xl font-bold text-center mb-5'>
        Job Catagories Lists
      </h2>
      <p className='text-gray-500 text-center'>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique in
        facilis asperiores.
      </p>

      <div className='flex items-center justify-between mb-24 mt-12'>
        {categories.map((item) => (
          <div key={item.id} className='border rounded-lg p-12 bg-gray-100'>
            <img className='size-14' src={item.logo} alt='' />
            <h2 className='text-lg font-bold mt-3'>{item.category_name}</h2>
            <p className='font-medium text-gray-600'>{item.availability}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
