import logo from './logo.svg';
import './App.css';
import Header from './component/Header/Header';
import Footer from './component/Footer/Footer';
import MyCard from './component/MyCard/MyCard';
import Slider from './component/Slider/Slider';
import Counter from './component/Counter/Counter';



function App() {
  let products=[
    {
      id:1,
      title: "product1",
      price:"40$",
      Link : "Buy Now",
    },
    {
      id:2,
      title: "product2",
      price:"50$",
      Link : "Buy Now",
    },
    {
      id:3,
      title: "product3",
      price:"70$",
      Link : "Buy Now",
    },   {
      id:4,
      title: "product4",
      price:"40$",
      Link : "Buy Now",
    },
    {
      id:5,
      title: "product5",
      price:"50$",
      Link : "Buy Now",
    },
    {
      id:6,
      title: "product6",
      price:"70$",
      Link : "Buy Now",
    },
    {
      id:1,
      title: "product1",
      price:"40$",
      Link : "Buy Now",
    },
    {
      id:2,
      title: "product2",
      price:"50$",
      Link : "Buy Now",
    },
    {
      id:3,
      title: "product3",
      price:"70$",
      Link : "Buy Now",
    },   {
      id:4,
      title: "product4",
      price:"40$",
      Link : "Buy Now",
    },
    {
      id:5,
      title: "product5",
      price:"50$",
      Link : "Buy Now",
    },
    {
      id:6,
      title: "product6",
      price:"70$",
      Link : "Buy Now",
    },
  ];
  return (
    <div className="App container">
      <Header />
      <div className='row d-flex justify-content-center'>
        <div className='col-9 '>
        <Slider />
        </div>
      </div>
     
      <div className='container'>
        <div className='row mt-3' >
        
        {products.map((item,index)=>{
          return(
            <MyCard key={item.id} title={item.title} price={item.price} Link={item.Link} />
          );
        })}
        
        </div>
      </div>
      <Counter>
        <p>hello</p>
      </Counter>
  

      <Footer/>
    </div>
  );
}

export default App;
