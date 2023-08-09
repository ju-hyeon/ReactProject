import React from 'react';

const Body = () => {
  return (
    <>
    <div className="flex flex-col items-center justify-center">
      {/* logo */}
      <div>
        <img className="h-[89px] w-[273px]" src="https://ppc.co/wp-content/uploads/2021/01/Google.png" alt="google Logo" />
      </div>

      {/* search */}
      <div className="md:w-[584px] mx-auto mt-8 flex w-[92%] items-center rounded-full border shadow-md">
        <div className="pl-5">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 28 28" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <input type="text" className="w-full bg-transparent rounded-full py-[10px] pl-4 outline-none" placeholder='Google 검색 또는 URL 입력' />
        <div className="pr-5">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 28 28" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
          </svg>
        </div>
      </div>

      <div className="mt-4 flex space-x-12">
        <buttion className="bg-gray-100 rounded px-2 py-1">Google Search</buttion>
        <buttion className="bg-gray-100 rounded px-2 py-1">I'm Feeling Lucky</buttion>
      </div>

      </div>

    </>

  );
};


export default Body;