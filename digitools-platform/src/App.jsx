
import NavBar from '../Component/Navbar'
import './App.css'
import Banner from '../Component/Banner'
import Info from '../Component/Info'
import ModelHeader from '../Component/Card-Section/ModelHeader'
import Card from '../Component/Card-Section/card'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import PriceHeader from '../Component/PriceHeader'
import GetStarted from '../Component/GetStarted'
import Footer from '../Component/Footer'




const fetchData = async() =>{
   const res = await fetch("/data.json");
   return res.json();
}
const productPromise = fetchData();
function App() {
  

  return (
    <>
    <NavBar />
    <Banner />
    <Info />
    <Card productPromise = {productPromise}/>
    <GetStarted />
    <PriceHeader />

    <Footer />


     <ToastContainer />
    </>
  )
}

export default App
