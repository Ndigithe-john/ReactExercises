import React from "react"
import  ReactDOM  from "react-dom/client"
import './index.css'
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];


function App(){
    
    return (
      <div className="container">
        <Header/>
     <Menu/>
        <Footer/>
      </div>
    ); 
}
function Header(){
  // const styles={color:"red", fontSize:'16px', textTransform:"uppercase"}
  const styles={}
  return (
    <header className="header">
      <h1 style={styles}>Fast React Pizza Company</h1>
    </header>
  );
  
}
const  Menu=()=>{
return (
  <main className="menu">
    <h2>Our Menu</h2>
    <Pizza
      name="Pizza Salamino"
      ingredients="Tomato, mozarella, and pepperoni"
      imageName="pizzas/salamino.jpg"
      price={15}
    />
    <Pizza
      name="Pizza Prosciutto"
      ingredients="Tomato, mozarella, ham, aragula, and burrata cheese"
      imageName="pizzas/prosciutto.jpg"
      price={18}
    />
    <Pizza
      name="Focaccia"
      ingredients="Bread with italian olive oil and rosemary"
      imageName="pizzas/focaccia.jpg"
      price={6}
    />
    <Pizza
      name= "Pizza Spinaci"
    ingredients= "Tomato, mozarella, spinach, and ricotta cheese"
    imageName="pizzas/spinaci.jpg"
    price={12}
    />
    <Pizza
     name="Pizza Margherita"
    ingredients= "Tomato and mozarella"
    imageName= "pizzas/margherita.jpg"
    price={10}
    />
    <Pizza
      name="Pizza Funghi"
    ingredients= "Tomato, mozarella, mushrooms, and onion"
    imageName= "pizzas/funghi.jpg"
    price= {12}

    />
      
  </main>
);
}
function Pizza({imageName,name,ingredients,price}) {
  return (
    <div className="pizza">
      <img src={imageName} alt="salamino" />
      <div>
      <h3>{name}</h3>
      <p>{ingredients}</p>
      <span>{price}</span>
      </div>
    </div>
  );
}
const Footer= function (){
  const hour=new Date().getHours()
  const openHour=12;
  const closeHour=22;
  const isOpen = hour >= openHour && hour < closeHour;
  console.log(isOpen)
  // if(hour >=openHour && hour <closeHour) alert('We are currently open '); else alert('Sorry we are closed')
  return (
    <footer className="footer">{new Date().toLocaleTimeString()} We're currently open </footer>
  );
  // return React.createElement('footer',null, "We're currently open ")
}

const root=ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);