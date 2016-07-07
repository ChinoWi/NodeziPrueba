import React from 'react';
import {Link} from 'react-router';
import CircularProgress from '../../component/ProgressCircular/progresscircular'



var config = {
    apiKey: "6UjUW00u80Dvd7SwaYJYUiStT31XYmAfrZXcDJzx",
    databaseURL: "https://chromenodezi.firebaseio.com/"
};
firebase.initializeApp(config);


var style={
  contact:{
      textAlign:'center',
      padding:'20px',
      background:'white'
  }
};
let value=0;

const SuccesMensaje=React.createClass({
    render(){
        return(
            <div className="row" style={{display:this.props.styleMostrar}}>
                <div className="text-center" style={{color:'white'}}>
                    <div className="large-1 columns" style={{border:'1px solid #4CB050'}}></div>
                    <div className="large-5 columns" style={{border:'1px solid #4CB050'}}>
                        <img src="asset/images/success.png" style={{height:'350px',width:'450px'}} alt=""/>
                    </div>
                    <div className="large-4 columns" style={{border:'1px solid #4CB050'}}>
                        <div style={{margin:'50px'}}>
                            <img className="text-left" src="asset/images/icon_success.png" style={{height:'60px',width:'60px'}} alt=""/>
                            <h2> Hola {this.props.nombre},</h2>
                            <h3>Su mensaje a sido enviado.</h3>
                            <button onClick={this.props.retorna} className="button">Volver a enviar Mensaje</button>
                        </div>
                    </div>
                    <div className="large-2 columns" style={{border:'1px solid #4CB050'}}></div>

                </div>
            </div>
        );
    }
});

const ViewContactenos=React.createClass({

    mixins: [ReactFireMixin],

    getInitialState(){
        return{
            valor:0,
            mensajeNombre:'Min 4 caracteres, letras',
            mensajeEmail:'Ingrese email valido',
            mensajeTextarea:'Min 6 caracteres',
            mostrarMensajeDisplay:'none',

            items: [],
            textNombreFirebase:'',
            textEmailFirebase:'',
            textTextareaFirebase:'',

            mostrarSucces:false,
            showContacto:'block',
            showMensaje:'none',

            background:'#FAFAFA',
            borderInput:'1px solid #757575',
            bordererror:'1px solid #E91E63',
            bordersuccess:'1px solid #2196F3',

            iconItem1:'asset/images/icon_item1.png',
            iconItem2:'asset/images/icon_item2.png',
            iconItem3:'asset/images/icon_item3.png',
        };
    },

    validateEmail(value) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(value);

    },
    validateNombre(value) {
        var re=/^[A-Za-z\_\-\.\s\xF1\xD1]+$/;
        return re.test(value);
    },
    onNombreChange(e){
        var valorNombre=e.target.value;
        this.setState({
            textNombreFirebase:valorNombre
        });
        if(this.validateNombre(valorNombre) && valorNombre.length>3 && valorNombre!=''){
            this.setState({
                mostrarMensajeDisplay:'none'
            });
            if(this.state.valor==0){
                value=32;
                this.setState({valor:value,mensajeNombre:'Correct',iconItem1:'asset/images/icon_success.png'})
            }if(this.state.valor==33){
                value=65;
                this.setState({valor:value,mensajeNombre:'Correct',iconItem1:'asset/images/icon_success.png'})
            }
            if(this.state.valor==35){
                value=67;
                this.setState({valor:value,mensajeNombre:'Correct',iconItem1:'asset/images/icon_success.png'})
            }
            if(this.state.valor==68){
                value=100;
                this.setState({valor:value,mensajeNombre:'Correct',iconItem1:'asset/images/icon_success.png'})
            }
        }if(valorNombre.length<=3 ){
            if(this.state.valor==0)
                value=0;
            else if(this.state.valor==33)
                value=33;
            else if(this.state.valor==35)
                value=35;
            else if(this.state.valor==68)
                value=68;
            else{
                value=value-32;
                this.setState({
                    mensajeNombre:'Min 4 caracteres, letras',
                    iconItem1:'asset/images/icon_error.png'
                });
            }
        }

        if(value<0){
            value=0;
        }
        if(value>100){
            value=100;
        }

        this.setState({valor:value});

    },

    onEmailChange(e){
        var valorEmail=e.target.value;
        this.setState({
            textEmailFirebase:valorEmail
        });

        if(this.validateEmail(valorEmail)){
            this.setState({
                mostrarMensajeDisplay:'none'
            });
            if(this.state.valor==0){
                value=33;
                this.setState({valor:value,mensajeEmail:'Correct',iconItem2:'asset/images/icon_success.png'})
            }if(this.state.valor==32){
                value=65;
                this.setState({valor:value,mensajeEmail:'Correct',iconItem2:'asset/images/icon_success.png'})
            }
            if(this.state.valor==35){
                value=68;
                this.setState({valor:value,mensajeEmail:'Correct',iconItem2:'asset/images/icon_success.png'})
            }
            if(this.state.valor==67){
                value=100;
                this.setState({valor:value,mensajeEmail:'Correct',iconItem2:'asset/images/icon_success.png'})
            }
        }else{
            if(this.state.valor==0)
                value=0
            else if(this.state.valor==32)
                value=32;
            else if(this.state.valor==35)
                value=35;
            else if(this.state.valor==67)
                value=67;
            else{
                value=value-33;
                this.setState({
                    mensajeEmail:'Ingrese email valido',
                    iconItem2:'asset/images/icon_error.png'
                });
            }
        }

        if(value<0){
            value=0;
        }
        if(value>100){
            value=100;
        }

        this.setState({valor:value})

    },
    onTextareaChange(e){
        var valorTextarea=e.target.value;
        this.setState({
            textTextareaFirebase:valorTextarea
        });
        if(valorTextarea.length>=5 && valorTextarea!=''){
            this.setState({
                mostrarMensajeDisplay:'none'
            });
            if(this.state.valor==0){
                value=35;
                this.setState({valor:value,mensajeTextarea:'Correct',iconItem3:'asset/images/icon_success.png'})
            }if(this.state.valor==32){
                value=67;
                this.setState({valor:value,mensajeTextarea:'Correct',iconItem3:'asset/images/icon_success.png'})
            }
            if(this.state.valor==33){
                value=68;
                this.setState({valor:value,mensajeTextarea:'Correct',iconItem3:'asset/images/icon_success.png'})
            }
            if(this.state.valor==65){
                value=100;
                this.setState({valor:value,mensajeTextarea:'Correct',iconItem3:'asset/images/icon_success.png'})
            }
        }if(valorTextarea.length<5 ){
            if(this.state.valor==0)
                value=0;
            else if(this.state.valor==32)
                value=32;
            else if(this.state.valor==33)
                value=33;
            else if(this.state.valor==65)
                value=65;
            else{
                value=value-35;
                this.setState({
                    mensajeTextarea:'Min 6 caracteres',
                    iconItem3:'asset/images/icon_error.png'
                });
            }
        }

        if(value<0){
            value=0;
        }
        if(value>100){
            value=100;
        }
        this.setState({valor:value})
    },

    componentWillMount: function() {
        var firebaseReff = firebase.database().ref('todoApp/itemss');
        this.bindAsArray(firebaseReff.limitToLast(40), 'itemss');
    },

    handleSubmit(e){
        e.preventDefault();
        if(this.state.valor==100 && this.state.textNombreFirebase!='' && this.state.textEmailFirebase!='' && this.state.textTextareaFirebase!=''){
            this.firebaseRefs['itemss'].push({
                Nombres:this.state.textNombreFirebase,
                Email:this.state.textEmailFirebase,
                Mensaje:this.state.textTextareaFirebase
            });

            this.setState({
                valor:0,
                showMensajeNombre:this.state.textNombreFirebase,

                textNombreFirebase:'',
                textEmailFirebase:'',
                textTextareaFirebase:'',

                mostrarSucces:!this.mostrarSucces,
                showContacto:'none',
                showMensaje:'block',

                background:'#4CB050'

            });
            console.log("se activo nombre")
        }else
            this.setState({
                mensajeError:'Ingrese correcamente los campos.',
                mostrarMensajeDisplay:'block',

                valor:0,
                textNombreFirebase:'',
                textEmailFirebase:'',
                textTextareaFirebase:''

            });
    },

    retornarContacto(){
        this.setState({
            showContacto:'block',
            showMensaje:'none',

            value:0,
            textNombreFirebase:'',
            textEmailFirebase:'',
            textTextareaFirebase:'',

            background:'#FAFAFA',

            iconItem1:'asset/images/icon_item1.png',
            iconItem2:'asset/images/icon_item2.png',
            iconItem3:'asset/images/icon_item3.png'
        });
    },
    render(){
        return(
            <div  style={{background:this.state.background}}>

                {this.state.mostrarSucces ? <SuccesMensaje nombre={this.state.showMensajeNombre} retorna={this.retornarContacto} styleMostrar={this.state.showMensaje} ></SuccesMensaje> :null  }

                <div className="text-center" style={{display:this.state.showContacto}}>

                    <div className="show-for-small-only">
                        <div className="row" style={{padding:'10px' ,background:'#2196F3'}}>
                            <div className="small-2 columns text-center" style={{paddingTop:'10px'}}>
                                <CircularProgress
                                    strokeWidth="2"
                                    radius="22"
                                    percentage={this.state.valor}/>
                            </div>
                            <div className="small-10 columns text-left">
                                <div style={{color:'white'}}>
                                    <h5 style={{marginTop:'30px'}}>Request for contact</h5>
                                </div>
                            </div>
                        </div>
                        <form className="form">
                            <div className="row" style={{paddingTop:'20px'}}>
                                <div className="small-2 columns text-center" style={{color:'black'}}>
                                    <img src={this.state.iconItem1} style={{height:'40px'}} alt=""/>
                                </div>
                                <div className="small-10 columns text-left">
                                    <label>Nombres
                                        <input type="text" style={{border:this.state.borderInput}}  name="nombre" value={this.state.textNombreFirebase}  onChange={this.onNombreChange} placeholder="Nombre" />
                                    </label>
                                    <p className="help-text">La contraseña debe tener al menos 3 caracteres.</p>
                                </div>
                            </div>
                            <div className="row" style={{paddingTop:'20px'}}>
                                <div className="small-2 columns text-center" style={{color:'black'}}>
                                    <img src={this.state.iconItem2} style={{height:'40px'}} alt=""/>
                                </div>
                                <div className="small-10 columns text-left">
                                    <label>Email
                                        <input type="text" name="email" value={this.state.textEmailFirebase} onChange={this.onEmailChange} placeholder="Email" />
                                    </label>
                                    <p className="help-text">Your password must have at least 10 characters, a number, and an Emoji.</p>
                                </div>
                            </div>
                            <div className="row" style={{paddingTop:'20px',paddingBottom:'20px'}}>
                                <div className="small-2 columns text-center" style={{color:'black'}}>
                                    <img src={this.state.iconItem3} style={{height:'40px'}} alt=""/>
                                </div>
                                <div className="small-10 columns text-left">
                                    <label>Mensaje</label>
                                    <textarea  onChange={this.onTextareaChange} value={this.state.textTextareaFirebase} placeholder="Escribe tu consulta"/>
                                </div>
                            </div>
                            <div className="row" style={{paddingTop:'20px'}}>
                                                    <span style={{display:this.state.mostrarMensajeDisplay}}>
                                                        <div style={{background:'#C93434',border:'1px solid #A52B2B'}}>
                                                            <p>Error Ingrese Correctamente los campos</p>
                                                        </div>
                                                    </span>
                                <button type="button" onClick={this.handleSubmit} className="button">Enviar</button>
                            </div>
                        </form>


                    </div>
                    <div className="show-for-medium">
                        <h2>Contactenos</h2>
                    </div>
                </div>
            </div>


        );
    }
});
export default ViewContactenos;
