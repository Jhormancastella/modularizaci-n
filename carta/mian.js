/// los web components///

//creo mi elemento
class CartaElemtent extends HTMLElement {
  constructor(){
      super();
      //this.textContent ="hola mundo";
      this.id ="miId"
      //stylos//
      miId.style = `
      background: pink;
      border: 2px solid red;
      color:bisque;
      margin: 12px;
      display: flex;
      gap: 8px;
  `
      this.innerHTML = `
      <div>
      <h1>
      
      <p>hola desde mi componente</p>
      </div>`;
  }
  connectedCallback(){///sirve para conectar un elemento
       console.log("se ha creado el docmento");
      //  setTimeout(() => { //para agregar tiempo de eliminacion
      //    this.remove(); 
      //  }, 3000);
      
  }
  disconnectedCallback(){//sirve para desconecta un elemento
      console.log("se ha eliminado esta etiqueta");
  }
}
//registro mi elemento 
//en la lista de elementos disponibles
customElements.define("carta-element",CartaElemtent);
////////////////


