import logo from './logo.svg';
import './App.css';
import Header from './component/Header/Header';
import Footer from './component/Footer/Footer';
import MyCard from './component/MyCard/MyCard';
import Slider from './component/Slider/Slider';

function App() {
  return (
    <div className="App container">
      <Header />
      <div className='row d-flex justify-content-center'>
        <div className='col-9 '>
        <Slider />
        </div>
      </div>
     
      
      <div className='row mt-3' >
        <div className='col-4'>
        <MyCard />
        </div>
        <div className='col-4'>
        <MyCard />
        </div>
        <div className='col-4'>
        <MyCard />
        </div>
      </div>

          
      <div className='row mt-3'>
        <div className='col-4'>
        <MyCard />
        </div>
        <div className='col-4'>
        <MyCard />
        </div>
        <div className='col-4'>
        <MyCard />
        </div>
      </div>

          
      <div className='row mt-3 mb-3'>
        <div className='col-4'>
        <MyCard />
        </div>
        <div className='col-4'>
        <MyCard />
        </div>
        <div className='col-4'>
        <MyCard />
        </div>
      </div>
      
      <Footer/>
    </div>
  );
}

export default App;
