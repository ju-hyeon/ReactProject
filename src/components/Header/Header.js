import React from 'react';

const Header = () => {
  return (
<header className="relative flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full">
  
  <div className="m-4 hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block">
      
      <div className="flex flex-col gap-5 sm:flex-row justify-end">
        <a className="text-xs text-gray-600 hover:underline" href="#" aria-current="page">Gmail</a>
        <a className="text-xs text-gray-600 hover:underline" href="#">이미지</a>
        <a className="text-xs text-gray-600 hover:bg-gray-200" href="#">
          <span className="material-icons">apps</span>
        </a>
        <a className="hover:bg-gray-200" href="#">
          <img 
              className="inline-block h-8 w-8 rounded-full ring-2 ring-white" 
              src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80" 
              alt="Image Description"
          />
        </a>
      
      </div>

    </div>

</header>
  );
};


export default Header;