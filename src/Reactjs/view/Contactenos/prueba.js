import React from 'react';

var config = {
    apiKey: "6UjUW00u80Dvd7SwaYJYUiStT31XYmAfrZXcDJzx",
    databaseURL: "https://chromenodezi.firebaseio.com/"
};
firebase.initializeApp(config);

var style={
    base:{
        textAlign:'center',
        padding:'20px',
        width: '210px',
        margin: '16px auto'
    },
    input:{
        boxSizing:'border-box',
        display:'block',
        border:'1px solid #888',
        padding:'10px',
        margin:'10px'
    },
    button:{
        background:'#28d',
        borderColor:'transparent',
        cursor:'pointer',
        color:'#fff'
    }
};
const Nodezi=React.createClass({
    mixins: [ReactFireMixin],

    getInitialState(){
        return{
            items: [],
            text:'',
            placeholder:'Ingresar'
        };
    },

    componentWillMount: function(){
      var FireApp=new firebase.database().ref('contacto/items');
      this.bindAsArray(FireApp,'items');
    },

    onChange: function(e) {
        this.setState({
            text: e.target.value

        });
    },

    handleChange:function(e){
        this.setState({
            placeholder:e.target.value
        })
    },

    handleSubmit: function(e) {
        e.preventDefault();
        if (this.state.text && this.state.text.trim().length !== 0) {
            this.firebaseRefs['items'].push({
                text: this.state.text
            });
            this.setState({
                text: ''
            });
        }
    },

    render(){
        return(
            <form onSubmit={this.handleSubmit} style={style.base}>
                <input type="text" onChange={this.onChange} value={this.state.text}  placeholder={this.state.placeholder} style={style.input}/>
                <button style={style.button}>Enviar</button>
            </form>
        );
    }
});

export default Nodezi;