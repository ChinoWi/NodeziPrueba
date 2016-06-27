import React from 'react';
import Nodezi from './prueba';
import CircularProgress from '../../component/ProgressCircular/progresscircular'

var style={
  contact:{
      textAlign:'center',
      padding:'20px',
      background:'white'
  }
};

let value=0;

const ViewContactenos=React.createClass({
    getInitialState(){
        return{
            valor:0,
            mensajeNombre:'Min 4 caracteres, letras',
            mensajeEmail:'Ingrese email valido',
            mensajeTextarea:'Min 6 caracteres',
            mostrarMensajeDisplay:'none'
        };

        this.onNombreChange=this.onNombreChange.bind(this);
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

        if(this.validateNombre(valorNombre) && valorNombre.length>=3 && valorNombre!=''){
            this.setState({
                mostrarMensajeDisplay:'none'
            });
            if(this.state.valor==0){
                value=32;
                this.setState({valor:value,mensajeNombre:'Correct'})
            }if(this.state.valor==33){
                value=65;
                this.setState({valor:value,mensajeNombre:'Correct'})
            }
            if(this.state.valor==35){
                value=67;
                this.setState({valor:value,mensajeNombre:'Correct'})
            }
            if(this.state.valor==68){
                value=100;
                this.setState({valor:value,mensajeNombre:'Correct'})
            }
        }if(valorNombre.length<=3 )
            if(this.state.valor==33)
                value=33;
            else if(this.state.valor==35)
                value=35;
            else if(this.state.valor==68)
                value=68;
            else
                value=value-32;
                this.setState({
                    mensajeNombre:'Min 4 caracteres, letras'
                });

        if(value<0){
            value=0;
        }
        if(value>100){
            value=100;
        }

        this.setState({valor:value})

    },

    onEmailChange(e){
        var valorEmail=e.target.value;

        if(this.validateEmail(valorEmail)){
            this.setState({
                mostrarMensajeDisplay:'none'
            });
            if(this.state.valor==0){
                value=33;
                this.setState({valor:value,mensajeEmail:'Correct'})
            }if(this.state.valor==32){
                value=65;
                this.setState({valor:value,mensajeEmail:'Correct'})
            }
            if(this.state.valor==35){
                value=68;
                this.setState({valor:value,mensajeEmail:'Correct'})
            }
            if(this.state.valor==67){
                value=100;
                this.setState({valor:value,mensajeEmail:'Correct'})
            }
        }else
            this.setState({
                mensajeEmail:'Ingrese email valido',
            });
            if(this.state.valor==32)
                value=32;
            else if(this.state.valor==35)
                value=35;
            else if(this.state.valor==67)
                value=67;
            else
                value=value-33;

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

        if(valorTextarea.length>=5 && valorTextarea!=''){
            this.setState({
                mostrarMensajeDisplay:'none'
            });
            if(this.state.valor==0){
                value=35;
                this.setState({valor:value,mensajeTextarea:'Correct'})
            }if(this.state.valor==32){
                value=67;
                this.setState({valor:value,mensajeTextarea:'Correct'})
            }
            if(this.state.valor==33){
                value=68;
                this.setState({valor:value,mensajeTextarea:'Correct'})
            }
            if(this.state.valor==65){
                value=100;
                this.setState({valor:value,mensajeTextarea:'Correct'})
            }
        }if(valorTextarea.length<=5 )
            this.setState({
                mensajeTextarea:'Min 6 caracteres'
            });
            if(this.state.valor==32)
                value=32;
            else if(this.state.valor==33)
                value=33;
            else if(this.state.valor==65)
                value=65;
            else
                value=value-35;

        if(value<0){
            value=0;
        }
        if(value>100){
            value=100;
        }

        this.setState({valor:value})

    },
    handleButton(){
        if(this.state.valor==100){
            console.log("se activo nombre")
        }else
            this.setState({
                mensajeError:'Ingrese correcamente los campos.',
                mostrarMensajeDisplay:'block'

            });
    },
    render(){
        return(
            <div  style={{background:'#2BA6CB'}}>
                <div className="text-center" >
                    <h2 style={{color:'white '}}>Contactenos</h2>
                    <div className="row">
                        <div className="text-center" style={{color:'#DDDDDD'}}>
                            <div className="large-1 columns" style={{border:'1px solid #2BA6CB'}}></div>
                            <div className="large-4 columns">
                                <div className="row" >
                                    <div className="show-for-medium">
                                        <div className="row">
                                            <CircularProgress
                                                strokeWidth="10"
                                                radius="90"
                                                percentage={this.state.valor}/>
                                        </div>
                                    </div>
                                    <div className="row" style={{padding:'30px',color:'white'}}>
                                        <div className="titulo">
                                            <h4>Nodezi, Contacenos</h4>
                                        </div>
                                        <div>
                                            sdasdasdasdasdasd
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="large-5 columns" >
                                <div className="row" style={{paddingTop:'10px',paddingBottom:'10px',background:'#49B5D5'}}>
                                    <div style={{margin:'10px 30px 30px 30px'}}>
                                        <div className="row">
                                            <form action="#" className="formulario" >
                                                <div className="row">
                                                    <div className="large-8 columns">
                                                        <input type="text" ref="nombre" name="nombre" className=""  onChange={this.onNombreChange} placeholder="Nombre" />
                                                    </div>
                                                    <div className="large-4 columns">
                                                        <div className="text-left"><h5><small>{this.state.mensajeNombre}</small></h5></div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="large-8 columns">
                                                        <input type="text" name="email" onChange={this.onEmailChange} placeholder="Email" />
                                                    </div>
                                                    <div className="large-4 columns">
                                                        <div className="text-left"><h5><small>{this.state.mensajeEmail}</small></h5></div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="large-8 columns">
                                                        <textarea  onChange={this.onTextareaChange} placeholder="Escribe tu consulta"/>
                                                    </div>
                                                    <div className="large-4 columns">
                                                        <div className="text-left"><h5><small>{this.state.mensajeTextarea}</small></h5></div>
                                                    </div>
                                                </div>

                                                <div className="row" style={{paddingTop:'20px'}}>
                                                    <span style={{display:this.state.mostrarMensajeDisplay}}>
                                                        <div style={{background:'#C93434',border:'1px solid #A52B2B'}}>
                                                            <p>Error Ingrese Correctamente los campos</p>
                                                        </div>
                                                    </span>
                                                    <button type="button" className="button" onClick={this.handleButton} >Button</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="large-2 columns"  style={{border:'1px solid #2BA6CB'}}></div>
                        </div>
                    </div>
                </div>
                <div style={style.contact}>
                    <Nodezi></Nodezi>
                </div>
            </div>


        );
    }
});
export default ViewContactenos;
