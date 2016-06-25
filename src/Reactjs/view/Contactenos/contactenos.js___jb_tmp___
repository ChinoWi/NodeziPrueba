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
            percentage:0,
            valor:0,
            mensajeEmail:'',
            mensajeNombre:'',
            mensajeTextarea:''
        };

        this.onNombreChange=this.onNombreChange.bind(this);
    },

    validateEmail: function (value) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(value);

    },
    validateNombre:function (value) {
        var re=/^[A-Za-z\_\-\.\s\xF1\xD1]+$/;
        return re.test(value);
    },

    onNombreChange(e){
        var valorNombre=e.target.value;
        var refNombre=this.refs.nombre,
            value=parseInt(refNombre.value, 10) || 0;

        if(this.validateNombre(valorNombre)){
            if(this.state.valor==0 && valorNombre!='' && valorNombre.trim().length!=0 ){
                value=32;
                this.setState({valor:value,nombre:true})
            }else if(this.state.valor==33 && valorNombre!='' && valorNombre.trim().length!=0){
                value=65;
                this.setState({valor:value,nombre:true})
            }else if(this.state.valor==35 && valorNombre!='' && valorNombre.trim().length!=0){
                value=67;
                this.setState({valor:value,nombre:true})
            }else if(this.state.valor==68 && valorNombre!='' && valorNombre.trim().length!=0){
                value=100;
                this.setState({valor:value,nombre:true})
            }
        }

        if(!this.state.nombre ){
            value=value-32;
        }

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
        var refEmail=this.refs.nombre,
            value=parseInt(refEmail.value, 10) || 0;

        if(this.validateEmail(valorEmail)){
            this.setState({
                mensajeEmail:'Email correcto',
                email:true
            })
        }else{
            this.setState({
                mensajeEmail:'Ingrese Email correcto!',
                email:false
            })
        }

        if(this.state.valor==0 && valorEmail!='' && valorEmail.trim().length!=0 ){
            value=33;
            this.setState({valor:value})
        }else if(this.state.valor==32 && valorEmail!='' && valorEmail.trim().length!=0){
            value=65;
            this.setState({valor:value})
        }else if(this.state.valor==35 && valorEmail!='' && valorEmail.trim().length!=0 ){
            value=68;
            this.setState({valor:value})
        }else if(this.state.valor==67 && valorEmail!='' && valorEmail.trim().length!=0){
            value=100;
            this.setState({valor:value})
        }
        if(!this.state.email){
            value=value-33;
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
        var refvalorTextarea=this.refs.nombre,
            values=parseInt(refvalorTextarea.value, 20) || 0;

        if(valorTextarea.trim().length>=5){
            this.setState({
               textarea:true
            });
        }else{
            this.setState({
                textarea:false
            })
        }

        if(this.state.valor==0 && valorTextarea!='' && valorTextarea.trim().length!=0 &&this.state.textarea==true){
            value=35;
            this.setState({valor:value})
        }else if(this.state.valor==32 && valorTextarea!='' && valorTextarea.trim().length!=0 &&this.state.textarea==true){
            value=67;
            this.setState({valor:value})
        }else if(this.state.valor==33 && valorTextarea!='' && valorTextarea.trim().length!=0 &&this.state.textarea==true){
            value=68;
            this.setState({valor:value})
        }else if(this.state.valor==65 && valorTextarea!='' && valorTextarea.trim().length!=0 &&this.state.textarea==true){
            value=100;
            this.setState({valor:value});
        }

        if(valorTextarea=='' || this.state.textarea==false){
            value=value-35;
        }

        if(value<0){
            value=0;
        }
        this.setState({valor:value})

    },
    render(){
        return(
            <div>
                <div className="text-center">
                    <h3>percentage: {this.state.valor} </h3>
                    <CircularProgress
                        strokeWidth="10"
                        radius="80"
                        percentage={this.state.valor}/>
                    <div>
                        <input type="text" ref="nombre" name="nombre"  onChange={this.onNombreChange} placeholder="Nombre" />
                        <span> {this.state.mensajeNombre} </span>
                        <input type="text" ref="email" name="email" onChange={this.onEmailChange} placeholder="email" />
                        <span>{this.state.mensajeEmail}</span>
                        <textarea ref="textarea" name="textarea" onChange={this.onTextareaChange} placeholder="Nombre"/>
                        <button type="button" className="button" disabled={!this.state.email}>Button</button>


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
