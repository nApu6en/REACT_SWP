
import './App.css'
import Card from './Card'
import CardS from './CardS'


function App() {
 

  return (
    <>
      <h1>Willkomen</h1>
    <div className ='card-container'>
        <Card />
        <Card />
        <Card />
    </div>
    <div className ='card-container'>
        <CardS />
        <CardS />
        <CardS />
    </div>
    
    </>
  )
}

export default App
