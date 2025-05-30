import React, { useState } from 'react';

const Card = ({ data, loading }) => {               {/* timeoutReached */}

  const [showMore, setShowMore] = useState(false);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-60">
        <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  {/* if ((!Array.isArray(data) || data.length === 0) && timeoutReached) {
    return <div className="text-white text-center mt-10">No jobs found.</div>;
  } */}

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-5 md:px-10 lg:px-20 text-center">
      {data.map((item, index) => {
        const toggleShow = () => setShowMore(prev => !prev);

        const shortDesc = item.description?.slice(0, 150) || '';
        const isLong = item.description?.length > 150;

        const applyUrl = item.jobProviders?.[0]?.url;


        return (
          <div key={index} className="bg-gray-50 border-green-200 text-gray-800 p-4 rounded-lg shadow-lg">
            {/* <img src={item.employer_logo} alt="logo" className="w-20 h-20 mx-auto object-contain mb-2" /> */}
            <h6 className="font-bold text-lg text-blue-900">{item.title}</h6>
            <div className="mt-1">
              <h6 className="font-bold text-xl">{item.company}</h6>
              <p className="text-gray-600 font-medium mt-2">{item.location}</p>
              <p className="text-sm mt-2">
                {showMore ? item.description : shortDesc}
                {isLong && (
                  <span
                    onClick={toggleShow}
                    className="text-blue-600 cursor-pointer ml-1"
                  >
                    {showMore ? ' Show less' : '...read more'}
                  </span>
                )}
              </p>
              <button onClick={() => window.open(applyUrl)} className="mt-4 bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700 transition cursor-pointer">
                Apply Now
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
