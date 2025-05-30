import React, { useState, useEffect } from 'react';
import Card from './Card';

// 🔸 Job Filter Constants
const JOB_TITLES = [
  'Software Engineer',
  'Frontend Developer',
  'Backend Developer',
  'Full Stack Developer',
  'Data Analyst',
  'UI/UX Designer',
];

const COUNTRIES = ['india', 'us', 'uk', 'canada', 'australia'];

const COUNTRY_MAP = {
  india: 'India',
  us: 'United States',
  uk: 'United Kingdom',
  canada: 'Canada',
  australia: 'Australia',
};

const EXPERIENCE_LEVELS = ['', 'entry level', 'mid level', 'senior level'];

// 🔸 API Config Constants
const API_URL = 'https://active-jobs-db.p.rapidapi.com/active-ats-7d';
const API_HEADERS = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': 'dfb5fa716emsh92805f77ca6f229p1206c1jsnf48f4248a561',
    'x-rapidapi-host': 'active-jobs-db.p.rapidapi.com',
  },
};

const Job = () => {
  const [title, setTitle] = useState(JOB_TITLES[0]);
  const [country, setCountry] = useState(COUNTRIES[0]);
  const [city, setCity] = useState('');
  const [experience, setExperience] = useState(EXPERIENCE_LEVELS[0]);
  const [jobData, setJobData] = useState([]);
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    setLoading(true);
    setJobData([]);

    const encodedTitle = encodeURIComponent(`"${title}"`);
    const encodedCountry = encodeURIComponent(`"${COUNTRY_MAP[country]}"`);
    const encodedCity = city ? encodeURIComponent(`"${city}"`) : '';
    const locationFilter = city ? `${encodedCity} OR ${encodedCountry}` : `${encodedCountry}`;

    const url = `${API_URL}?limit=10&offset=0&title_filter=${encodedTitle}&location_filter=${locationFilter}&description_type=text`;

    try {
      const response = await fetch(url, API_HEADERS);
      const result = await response.json();
      console.log(result);
      setJobData(result || []);
    } catch (error) {
      console.error('Error fetching jobs:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className=''>
      {/* Filter Bar */}
      <div className="fixed top-0 w-full bg-blue-950 shadow-md z-50 p-4 flex flex-wrap justify-center gap-3 items-center">
        <div className="flex gap-3 overflow-x-auto max-w-full pr-4">
          {/* Job Title */}
          <select
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="p-2 border rounded-3xl text-black bg-white font-semibold min-w-[180px]"
          >
            {JOB_TITLES.map((job) => (
              <option key={job} value={job}>
                {job}
              </option>
            ))}
          </select>

          {/* City */}
          <input
            type="text"
            placeholder="City"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="p-2 border rounded-3xl text-black bg-white font-semibold min-w-[140px]"
          />

          {/* Country */}
          <select
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            className="p-2 border rounded-3xl text-black bg-white font-semibold min-w-[140px]"
          >
            {COUNTRIES.map((ctry) => (
              <option key={ctry} value={ctry}>
                {ctry.toUpperCase()}
              </option>
            ))}
          </select>

          {/* Experience */}
          <select
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
            className="p-2 border rounded-3xl text-black bg-white font-semibold min-w-[160px]"
          >
            {EXPERIENCE_LEVELS.map((exp) => (
              <option key={exp} value={exp}>
                {exp ? exp : 'Experience'}
              </option>
            ))}
          </select>
        </div>

        {/* Search Button */}
        <button
          onClick={getData}
          className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded whitespace-nowrap font-serif"
        >
          Search
        </button>
      </div>

      {/* Job Results */}
      <div className="pt-36 md:pt-40 lg:pt-28 px-4">
        <Card data={jobData} loading={loading} />
      </div>
    </div>
  );
};

export default Job;
