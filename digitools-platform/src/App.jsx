
import NavBar from '../Component/Navbar'
import './App.css'
import Banner from '../Component/Banner'
import Info from '../Component/Info'
import ModelHeader from '../Component/Card-Section/ModelHeader'
import Card from '../Component/Card-Section/Card'

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
    </>
  )
}

export default App
