import Product from './Product';
import Navbar from './Navbar';
import Select from  './Select';
import Button from './Button';
import Footer from './Footer';

function App() {
  return (
  
    <div className="mt-10 s ml-10 ">
      <Navbar></Navbar>
    
      <div className=" px-4 py-8">
        <Select/>
      
                    
        <div className="flex  mt-10 grid grid-cols-3 gap-6">
      <Product photo="https://i.pinimg.com/736x/78/33/c6/7833c645e89a7bcf6e92d143686a72e7.jpg" title="black Printed Coffee Mug" category="mugs" rating={5} price={199}/>
      <Product photo="https://i.pinimg.com/736x/78/33/c6/7833c645e89a7bcf6e92d143686a72e7.jpg" title=" Father's Day Cofee Mug" category="mugs" rating={5} price={199}/>
      <Product photo="https://i.pinimg.com/736x/78/33/c6/7833c645e89a7bcf6e92d143686a72e7.jpg"  title=" green cofee mug" category="mugs" rating={5} price={199} />
      <Product photo="https://i.pinimg.com/736x/78/33/c6/7833c645e89a7bcf6e92d143686a72e7.jpg" title=" Personalised Mug" category="mugs" rating={5} price={199}/>
       <Product photo="https://i.pinimg.com/736x/78/33/c6/7833c645e89a7bcf6e92d143686a72e7.jpg" title="Printed Brown Mug" category="mugs" rating={5} price={199}/>
      <Product photo="https://i.pinimg.com/736x/78/33/c6/7833c645e89a7bcf6e92d143686a72e7.jpg" title=" printed blue Mug" category="mugs" rating={5} price={199}/>
      <Product photo="https://i.pinimg.com/736x/78/33/c6/7833c645e89a7bcf6e92d143686a72e7.jpg"  title="  printed green Mug" category="mugs" rating={5} price={199} />
      <Product photo="https://i.pinimg.com/736x/78/33/c6/7833c645e89a7bcf6e92d143686a72e7.jpg" title="  printed black Mug" category="mugs" rating={5} price={199}/>
        <Product photo="https://i.pinimg.com/736x/78/33/c6/7833c645e89a7bcf6e92d143686a72e7.jpg" title="  printed yellow Mug"category="mugs" rating={5} price={199}/>

        <div className="container mx-auto  px-4 py-8">
      <Button />
      </div>
    </div>
  </div>
  <footer>
  <div className="flex flex-col ">
      <div className="flex-grow ">
       
      </div>
      <Footer />
    </div>
    </footer>
    </div>
  );
}

const xyz = {
  title:"Cofee Mug",
  category:"mugs"
}

export default App;

