
import './App.css';
import Productos from './componentes/Productos';



function App() {
  return (
    <div className="App">
      <h1>Nuestros Productos Disponibles</h1>
      <div className='contenedor-principal'>
        <Productos
        imagen="productos"
        nombre="Zapatillas Nike"
        precio="20.00"
        descripcion="Zapatillas Nike para correr, ligeras y cómodas."
        />
        <Productos
        imagen="producto3"
        nombre="Camisa de Algodón"
        precio="99.00"
        descripcion="Camisa de algodón 100% con estampado moderno."
        />
        <Productos
        imagen="producto2"
        nombre="zapatillas"
        precio="360.00"
        descripcion="Zapatillas deportivas de alta calidad, ideales para el deporte."
        />
        <Productos
          imagen="producto4"
          nombre="Zapato de Vestir Clásico"
          precio="189.00"
          descripcion="Zapatos de vestir en cuero genuino, elegantes y cómodos para ocasiones formales."
        />
        <Productos
        imagen="producto5"
        nombre="Termo Acero Inoxidable"
        precio="75.00"
        descripcion="Termo de 500ml con aislamiento térmico, mantiene bebidas frías/calientes por 24 horas."
      />
      
      </div>
    </div>
  );
}

export default App;
