/* 
    npm install -g create-react-app
    npx create-react-app D:\GitTrunk\react-app
    npm start
    npx serve -s build

    http://localhost:3000/
*/

import Header from './components/Header/Header'
import WindowSearch from './components/Main/WindowSearch'
import MainContents from './components/Main/MainContents'
import Footer from './components/Footer/Footer'

function App() {
  // 작은 규모의 스타일을 관리할 때 내부에서 스타일 객체 정의
  const container = {
      padding: "20px 20px 0 0",
      textAlign: "center"
  };

  return (
    <div style={container}>
      {/* Header */}
      <Header />

      {/* 검색창 */}
      <WindowSearch />

      {/* 최근 접속한 사이트 목록 */}
      <MainContents />

      {/* Footer */}
      <Footer />
    </div>
  );
}


export default App;