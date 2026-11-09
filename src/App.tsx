
import './App.css'
import Card from './Card'
import CardS from './CardS'


function App() {
 

  return (
    <>
      <h1>Willkomen</h1>
    <div className ='card-container'>
        <Card title = "peter" text = "Das ist Peter" image = "https://picsum.photos/200/301" />
        <Card title = "anna" text = "Das ist Anna" image = "https://picsum.photos/202/302" />
        <Card title = "michael" text = "Das ist Michael" image = "https://picsum.photos/200/303" />
    </div>
    <div className ='card-container'>
        <CardS title = "susi" text = "Das ist Susi" image = "https://picsum.photos/200/304" />
        <CardS title = "hans" text = "Das ist Hans" image = "https://picsum.photos/200/305" />
        <CardS title = "anja" text = "Das ist Anja" image = "https://picsum.photos/201/306" />
    </div>
    
    </>
  )
}

export default App
