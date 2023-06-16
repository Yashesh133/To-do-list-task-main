import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './component/Home';
import Side from './component/Side';
import New from './component/New';




function App() {
  return (
    
    <div className='bg-slate-200 min-h-screen text-slate-600 text-base'>
        {/* <Sidebar/> */}
        <New/>
        <Home/>
        <Side/>

    </div>

  );
}

export default App;
