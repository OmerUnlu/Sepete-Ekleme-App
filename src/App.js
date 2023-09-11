import './App.css';
import {useState} from 'react'
import {Typography, Grid} from '@mui/material'
import Urunler from './Components/Urunler';
import MSI from './Pictures/msi.jpg'
import Lenova from './Pictures/lenova.jpg'
import Oyun from './Pictures/oyun.jpg'
import Iphone from './Pictures/Iphone.jpg'
import Klavye from './Pictures/Klavye.jpg'
import Mause from './Pictures/Maouse.jpg'
import Kulaklık from './Pictures/Kulaklık.jpg'
import Sepetim from './Components/Sepetim';

function App() {
  const myProducts = [{id:1,name:"MSI Laptop",content:"16GB Ram, i7 işlemci 8gb Ekran Kartı",img:MSI,adet:1},
                      {id:2,name:"LENOVA Laptop",content:"8GB Ram, i7 işlemci 4gb Ekran Kartı",img:Lenova,adet:1},
                      {id:3,name:"Iphone",content:"16GB Ram, i7 işlemci 8gb Ekran Kartı",img:Iphone,adet:1},
                      {id:4,name:"MSI Kulaklık",content:"8GB Ram, i7 işlemci 4gb Ekran Kartı",img:Kulaklık,adet:1},
                      {id:5,name:"Oyun Konsolu",content:"16GB Ram, i7 işlemci 8gb Ekran Kartı",img:Oyun,adet:1},
                      {id:6,name:"HP Klavye",content:"8GB Ram, i7 işlemci 4gb Ekran Kartı",img:Klavye,adet:1},
                      {id:7,name:"MSI Mause",content:"16GB Ram, i7 işlemci 8gb Ekran Kartı",img:Mause,adet:1}];

  const [basket, setBasket] = useState([]);
                      
  return (
    <div className="App">
      <header>
        <Typography variant='h3'>React Sepet Uygulaması</Typography>
      </header>
      
      <Typography variant='h4'>Listelenen Ürünler</Typography>
      <Grid container spacing={2} sx={{marginLeft:"auto",width:"100%"}}>
        {myProducts.map((product) => (
          <Urunler 
            key={product.id} 
            product={product} 
            onClick={() => {
              const updatedBasket = [...basket];
              const index = updatedBasket.findIndex((item) => item.id === product.id);

              if (index === -1) {
                updatedBasket.push({ ...product, adet: 1 });
              } else {
                updatedBasket[index].adet += 1;
              }

              setBasket(updatedBasket);
            }}
          />
        ))}      
      </Grid>
      
      <Typography variant='h4'>Eklenen Ürünler</Typography>
      {basket.map((bas,index)=>{
       return <Sepetim bas={bas} key={index} />
      })}
      <button id='buttonMain' onClick={()=>{setBasket([])}} >Temizle</button>
      
    </div>
  );
}

export default App;
