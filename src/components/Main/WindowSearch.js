import React from 'react';
// import styles from './WindowSearch.module.css'

const WindowSearch = () => {
  return (
    <section>
      <div>
        <div>
          <label for="hs-validation-name-error" class="block text-sm font-medium mb-2 dark:text-white">Email</label>
          <div class="relative">
            <input type="text" id="hs-validation-name-error" name="hs-validation-name-error" class="py-3 px-4 block w-full border-red-500 rounded-md text-sm focus:border-red-500 focus:ring-red-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400" required aria-describedby="hs-validation-name-error-helper"/>
            <div class="absolute inset-y-0 right-0 flex items-center pointer-events-none pr-3">
              <svg class="h-5 w-5 text-red-500" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
              </svg>
            </div>
          </div>
          <p class="text-sm text-red-600 mt-2" id="hs-validation-name-error-helper">Please enter a valid email address.</p>
        </div>

        <div>
          <label for="hs-validation-name-success" class="block text-sm font-medium mb-2 dark:text-white">Email</label>
          <div class="relative">
            <input type="text" id="hs-validation-name-success" name="hs-validation-name-success" class="py-3 px-4 block w-full border-green-500 rounded-md text-sm focus:border-green-500 focus:ring-green-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400" required aria-describedby="hs-validation-name-success-helper"></input>
            <div class="absolute inset-y-0 right-0 flex items-center pointer-events-none pr-3">
              <svg class="h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
              </svg>
            </div>
          </div>
          <p class="text-sm text-green-600 mt-2" id="hs-validation-name-success-helper">Looks good!</p>
        </div>
      </div>
    </section>
  );
};


export default WindowSearch;