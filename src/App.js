/* 
    npm install -g create-react-app
    npx create-react-app D:\GitTrunk\react-app
    npm start
    npx serve -s build

    http://localhost:3000/
*/

import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { BrowserView } from 'react-device-detect'

import GoogleLayout from './components/GoogleLayout'
import WorkStatus from './components/WorkStatus'

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";


// FontAwesome 아이콘 불러옴
library.add(fab, far, fas);

function App() {
  // 작은 규모의 스타일을 관리할 때 내부에서 스타일 객체 정의

  return (
    <>
      <BrowserView>
        <BrowserRouter>
          <Routes>

            <Route path="/api/google" element={<GoogleLayout />} />
            <Route path="/api/workStatus" element={<WorkStatus />} />

          </Routes>
        </BrowserRouter>
      </BrowserView>
    </>
  );
}


export default App;