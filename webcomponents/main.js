/// los web components///

//creo mi elemento
class JesusElemtent extends HTMLElement {
    constructor(){
        super();
        //this.textContent ="hola mundo";
        this.id ="miId"
        //stylos//
    //     this.style.display="flex";
    //     this.style.border ="2px solid red";
    //     this.style.background ="#ff00d238";
    //     this.style.color ="white";
    //     this.style.margin="8px";
    //     this.style.padding="15px";
    //     this.style.alignContent= "center";
    //     this.style.textAlign ="center";
    // //     miId.style = `
    // //     background: pink;
    // //     border: 2px solid red;
    // //     color:bisque;
    // //     margin: 12px;
    // //     display: flex;
    // //     gap: 8px;
    // // `
    
        this.innerHTML = `
        <div2>
            <slot name="titulo" style="color:red;">
            
            </slot>
        </div2>
        <div1>
        <h1>
        <p>............carta de informacion.........</p>
        </div>
        <div>
        <h3>
        
        <p>mañana clase </p>
        <p>el sabado descanso</p>
        <p>domingo anime</p>
        <p>hola desde mi componente</p>
        </div>
        `;
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
customElements.define("jesus-element",JesusElemtent);
////////////////


