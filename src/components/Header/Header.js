import React from 'react';
import styles from './Header.module.css';

const Header = () => {
  return (
<header class="relative flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-white text-sm py-4 dark:bg-gray-800">
  <nav class="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between" aria-label="Global">
    <div id="navbar-with-mega-menu" class="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block">
      <div class="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:pl-6">
        <a class="font-small text-gray-500" href="#" aria-current="page">Gmail</a>
        <a class="font-small text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500" href="#">이미지</a>
        <a class="font-small text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500" href="#">
        <span class="material-icons">
          apps
        </span>
        </a>
        <a class="font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500" href="#">
          <img class="inline-block h-8 w-8 rounded-full ring-2 ring-white dark:ring-gray-800" src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80" alt="Image Description"/>
        </a>
      </div>
    </div>
  </nav>
</header>
  );
};


export default Header;