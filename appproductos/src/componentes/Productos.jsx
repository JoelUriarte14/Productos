import React from 'react'
import '../hojasestilo/estilos.css'
const Productos = (props) => {
    return (
        <div className="contenedor-producto">
            <img className="img-producto" src={require(`../imagenes/${props.imagen}.jpg`)} alt="Imagen del producto"/>
            <div className="contenedor-texto-producto">
                <p className="nombre-producto">{props.nombre}</p>
                <p className="precio-producto">${props.precio}</p>
                <p className="descripcion-producto">
                    {props.descripcion}
                </p>
                <button className="boton-comprar">Añadir al carrito</button>
            </div>
        </div>
    )
}

export default Productos