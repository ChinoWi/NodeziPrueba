import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import TestUtils from 'react-addons-test-utils';
import MediaQuery from 'react-responsive'



const Respuestas=React.createClass({
    render(){
        return(
            <div className="row">
                <div className="medium-3 large-2 columns">
                    <div className="card-item-alinear image-answer">
                        <img className="card-item-imgAdmin"  width="67px" src="asset/images/admin-item.png" alt=""/>
                    </div>

                </div>
                <div className="medium-9 large-10 columns" >
                    <h6 className="answer">{this.props.respuesta}</h6>
                </div>
            </div>
        );
    }
});

const Preguntas=React.createClass({
    getInitialState(){
        return{
            showRespuesta:false,
            showMostrar:'MOSTRAR'
        }
    },
    handleClickMostrar(){
        this.setState({
            showRespuesta:!this.state.showRespuesta,
            showMostrar:!this.state.showMostrar
        })
    },
    render(){
        return(
            <div className="card-item article-question">
                <div className="row columns text-left">
                    <div className="medium-2 large-2 columns">
                        <img src={this.props.imgUrl}/>
                    </div>
                    <div className="medium-10 large-10 columns" >
                        <div style={{borderBottom:'2px solid #EDECE8'}}>
                            <h5 className="question">{this.props.pregunta} </h5>
                            <div className="separator-question"></div>
                            <h6 className="card-item-mostrar question-option" onClick={this.handleClickMostrar}>{this.state.showMostrar ? "Ver Respuesta" : "Ocultar Respuesta"} </h6>
                        </div>
                         <ReactCSSTransitionGroup transitionName="example" transitionEnterTimeout={800} transitionLeaveTimeout={300}>
                            {this.state.showRespuesta ? <Respuestas  respuesta={this.props.respuesta}></Respuestas> : null}
                        </ReactCSSTransitionGroup>
                    </div>
                </div>
            </div>
        );
    }
});

const ViewPreguntas= React.createClass({
    getInitialState(){
        return{
            Datos:[
                {key:1,pregunta:'Cuantos cuestan tus servicios?',imgUrl:'asset/images/user-item.png',respuesta:"Nuestra plataforma se creo con el fin de brindar un buen servicio siempre considerando al cliente de una manera justa, y sacando a produccion un producto 100% usable."},
                {key:2,pregunta:'Tiempo para entregar el Proyecto?',imgUrl:'asset/images/user-item1.png',respuesta:"Dependiendo del proyecto, Nosotros utilizamos tecnologias y herramientas que ayudan ha optimizar el proceso de desarrollo."},
                {key:3,pregunta:'Sera Responsive mi proyecto?',imgUrl:'asset/images/user-item2.png',respuesta:"Si, cada proyecto iniamos con mobile first(Primero Mobile, luego Tablet y por utlimo Desktop)."},
                {key:4,pregunta:'Tendre que dar un adelanto?',imgUrl:'asset/images/user-item3.png',respuesta:"Será el porcentage minimo como garantia pero a cambio tendra derecho a exigir un avance posterior a dos semanas."},
                {key:5,pregunta:'Tendre soporte para mi proyecto?',imgUrl:'asset/images/user-item4.png',respuesta:"Si, estaremos pendiente ante algun cambio o duda que tenga de tu producto."},
                {key:6,pregunta:'Mi proyecto sera vulnerables ante ataques de Hackers?',imgUrl:'asset/images/user-item5.png',respuesta:"Nuestro Team tenemos personas que se dedican especialmente al rublo de la seguridad informatica, haciendo un pentest a la aplicacion para posibles fallos de seguridad y entregar un producto mas seguro."},
                {key:7,pregunta:'Como podre contactarme con ustedes durane el desarrollo de mi proyecto?',imgUrl:'asset/images/user-item6.png',respuesta:"Contamos con Soporte en Correo, Via telefonica, Redes sociales, Contacto en Nuestro plataforma, Presencial si vive cerca, skype."},
                {key:8,pregunta:'Es necesario vernos presencial para conversar sobre el proyecto?',imgUrl:'asset/images/user-item7.png',respuesta:"Depende de la distancia en el cual nos encontremos, si hay posibilidades no hay duda en vernos."},
            ]
        }
    },

    eachItem(item){
        return(
            <Preguntas key={item.key}
                       pregunta={item.pregunta}
                       imgUrl={item.imgUrl}
                       respuesta={item.respuesta}
            >

            </Preguntas>
        );
    },
    render(){
        return(
            <section className="sectionPreguntas">
                <div className="row">
                    <div className="medium-1 large-2 columns" style={{border:'1px solid #EEEEEE'}}></div>
                    <div className="medium-10 large-8 columns card  question-content">
                        <h4 className="question-title">Preguntas</h4>
                        {this.state.Datos.map(this.eachItem)}
                    </div>
                    <div className="medium-1 large-2 columns" style={{border:'1px solid #EEEEEE'}}></div>
                </div>
            </section>
        );
    }
});

export default ViewPreguntas








