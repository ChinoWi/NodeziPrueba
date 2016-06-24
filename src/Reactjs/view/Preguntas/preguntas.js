import React from 'react';

var style={
    mostrarr:{
        display:'flex',
        color:'color #273B47'
    },
    ocultarr:{
        display:'none',
        color:'color #273B47'
    }
};

const ArticuloRespuestas=React.createClass({
    render(){
        return(
            <div>{this.props.respuestamensaje}</div>
        );
    }
});

const ArticuloPreguntas=React.createClass({

    getInitialState(){
      return{
          showRespuesta:false,

      }
    },

    handleClick(){
        this.setState({
            showRespuesta:!this.state.showRespuesta,
            icon:!this.state.icon
        })

    },
    render(){
        return(
            <article className="questionSection-description col-12"> {this.props.pregunta} <span  onClick={this.handleClick} >+ </span>
                {this.state.showRespuesta ? <ArticuloRespuestas respuestamensaje={this.props.respuesta}/> : null}
            </article>
        );
    }
});

const ViewPreguntas=React.createClass({
    getInitialState(){
        return{
            recorre:[
                {
                    key:1,
                    pregunta:'¿Cuanto cuestan sus servicios?',
                    respuesta:'Nuestra plataforma se creo con el fin de brindar un buen servicio siempre considerando al cliente de una manera justa, y sacando a produccion un producto 100% usable. '
                },
                {
                    key:2,
                    pregunta:'¿Cuanto tardaran en entregarme mi Poryecto?',
                    respuesta:'Prueba2'
                }
            ]
        }
    },
    handleClick(){
        alert('prueba')
    },
    eachItem:function(preguntas){
        return(
            <ArticuloPreguntas  key={preguntas.key}
                                pregunta={preguntas.pregunta}
                                respuesta={preguntas.respuesta}

            >
            </ArticuloPreguntas>
        );
    },
    render(){
        return(
            <main className="view-question">
                <h1 className="questionSection-title">Preguntas Frecuentes</h1>
                <section id="question" className="questionSection roww">
                    {this.state.recorre.map(this.eachItem)}
                  </section>
            </main>
        );
    }
});
export default ViewPreguntas;