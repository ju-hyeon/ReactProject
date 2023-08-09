/* 
    npm install -g create-react-app
    npx create-react-app D:\GitTrunk\react-app
    npm start
    npx serve -s build

    http://localhost:3000/
*/
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Body from './components/Body/Body'

function App() {
  // 작은 규모의 스타일을 관리할 때 내부에서 스타일 객체 정의

  return (
    <div className="grid grid-cols-6 gap-4">
      <div className="col-start-1 col-end-7 mb-8">
        <Header />
      </div>

      <div className="flex justify-center items-center col-start-2 col-span-4 mt-8">
        <Body />
      </div>
      
      <div className="col-start-1 col-end-7 ...">
        <Footer />
      </div>
      
    </div>
  );
}


export default App;