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

        };
    },
    validateEmail: function (value) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(value);

    },


    onNombreChange(e){
        var valorNombre=e.target.value;
        var refNombre=this.refs.nombre;

        if(this.state.valor==0 && valorNombre!='' && valorNombre.trim().length!=0){
            value=32;
            this.setState({
                valor:value
            })
        }else if(this.state.valor==33 && valorNombre!='' && valorNombre.trim().length!=0){
            value=65;
            this.setState({
                valor:value
            })
        }else if(this.state.valor==35 && valorNombre!='' && valorNombre.trim().length!=0){
            value=67;
            this.setState({
                valor:value
            })
        }else if(this.state.valor==68 && valorNombre!='' && valorNombre.trim().length!=0){
            value=100;
            this.setState({
                valor:value
            })
        }
        if(valorNombre.trim().length==0 ){
            value=value-32
        }

        this.setState({
            valor:value
        })

    },

    onEmailChange(e){
        var valorEmail=e.target.value;
        var refEmail=this.refs.nombre;


        if(this.state.valor==0 && valorEmail.trim().length!=0 && this.validateEmail(valorEmail) ) {
            value=33;
            this.setState({
                valor:value
            })
        }else if(this.state.valor==32 && valorEmail.trim().length!=0 && this.validateEmail(valorEmail)){
            value=65;
            this.setState({
                valor:value
            })
        }else if(this.state.valor==35 && valorEmail.trim().length!=0 && this.validateEmail(valorEmail)){
            value=68;
            this.setState({
                valor:value
            })
        }else if(this.state.valor==67 && valorEmail.trim().length!=0 && this.validateEmail(valorEmail)){
            value=100;
            this.setState({
                valor:value
            })
        }

        if(valorEmail.trim().length==0){
            value=value-33;

        }

        this.setState({
            valor:value
        })



    },
    onTextareaChange(e){
        var valorTextarea=e.target.value;
        var refvalorTextarea=this.refs.nombre;

        if(this.state.valor==0 && valorTextarea!='' && valorTextarea.trim().length!=0 ){
            value=35
            this.setState({
                valor:value
            })
        }else if(this.state.valor==32 && valorTextarea!='' && valorTextarea.trim().length!=0 ){
            value=67
            this.setState({
                valor:value
            })
        }else if(this.state.valor==33 && valorTextarea!='' && valorTextarea.trim().length!=0 ){
            value=68
            this.setState({
                valor:value
            })
        }else if(this.state.valor==65 && valorTextarea!='' && valorTextarea.trim().length!=0 ){
            value=100
            this.setState({
                valor:value
            })
        }
        if(valorTextarea.trim().length==0){
            value=value-35
        }

        this.setState({
            valor:value
        })

    },
    render(){
        return(
            <div>
                <div className="text-center">
                    <h3>percentage: {this.state.valor} </h3>
                    <CircularProgress
                        strokeWidth="10"
                        radius="80"
                        percentage={this.state.percentage}/>
                    <div>
                        <input type="text" ref="name" name="nombre"  onChange={this.onNombreChange} placeholder="Nombre" />
                        <input type="text" ref="email" name="email" onChange={this.onEmailChange} placeholder="email" />
                        <textarea ref="textarea" name="textarea" onChange={this.onTextareaChange} placeholder="Nombre"/>


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
