import React from 'react'
import autoPlay from 'react-swipeable-views/lib/autoPlay';
import SwipeableViews from 'react-swipeable-views';
import Pagination from './pagination/pagination'

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const styles = {
    root: {
        position: 'relative',
    },
    slideContainer: {
        height: 300,
    },

    slide: {
        padding: 20,
        minHeight: 300,
        color: '#fff',
    }
};

const RecorreSmall=React.createClass({
    render(){
        return(
            <div className="slideSmall" style={{backgroundColor:this.props.color}}>
                <div className="text-center">
                    <img src={this.props.imagensrc} alt="" style={{height:'300px',width:'100%'}} />
                </div>
                <div className="row">
                    <div style={{fontSize:'30px'}}>
                        <p>{this.props.titulo} </p>
                    </div>
                    <div style={{fontSize:'25px'}}>
                        <p>{this.props.texto} </p>
                    </div>
                </div>
            </div>
        );
    }
});

const RecorreDesktop=React.createClass({
    render(){

        return(
            <div className="slideDesktop" style={{backgroundColor:this.props.color}}>
                <div className="row" >
                    <div className="large-7 columns">
                        <img src={this.props.imagensrc} style={{height:'370px',width:'100%'}} alt=""/>
                    </div>
                    <div className="large-5 columns">
                        <div style={{marginTop:'60px',marginLeft:'40px'}}>
                            <div style={{fontSize:'50px'}}>
                                <p>{this.props.titulo} </p>
                            </div>
                            <div style={{fontSize:'30px'}}>
                                <p>{this.props.texto} </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

const Slider=React.createClass({
    getInitialState(){
        return{
            index:0,
            titulos:[
                {
                    key:1,
                    titulo:'Design prueba',
                    url:'asset/images/slider/design1.png',
                    texto:'Diseño , frontend y backend Desarrollo',
                    color:'#4683B2',
                },
                {
                    key:2,
                    titulo:'Security Web',
                    url:'asset/images/slider/owasp.png',
                    texto:'Seguridad, implementacion Owasp top 10.',
                    color:'#456FB6',
                },
                {
                    key:3,
                    titulo:'App Design Movil',
                    url:'asset/images/slider/movil.png',
                    texto:'Creacion de Apps Para Movil',
                    color:'#cd3a4b',
                }
            ]

        }
    },
    handleChangeIndex(index){
        this.setState({
            index:index
        })
    },

    eachItemSmall:function(titulo){
        return(
            <RecorreSmall key={titulo.key}
                          titulo={titulo.titulo}
                          imagensrc={titulo.url}
                          texto={titulo.texto}
                          color={titulo.color}
            >
            </RecorreSmall>
        );
    },
    eachItemDesktop:function(titulo){
        return(
            <RecorreDesktop key={titulo.key}
                            titulo={titulo.titulo}
                            imagensrc={titulo.url}
                            texto={titulo.texto}
                            color={titulo.color}
            >
            </RecorreDesktop>
        );
    },

    render(){
        const {
            index,
        } = this.state;
        return(
            <div>
                <div className="show-for-small-only">
                    <AutoPlaySwipeableViews>
                        {this.state.titulos.map(this.eachItemSmall)}
                    </AutoPlaySwipeableViews>
                </div>
                <div className="show-for-medium">
                    <AutoPlaySwipeableViews
                                    index={index}
                                    onChangeIndex={this.handleChangeIndex}
                                    className="slideContainerDesktop"
                                    >
                        {this.state.titulos.map(this.eachItemDesktop)}
                    </AutoPlaySwipeableViews>
                    <div className="text-center" style={{padding:'10px',borderTop:'1px solid #BFBFBF',background:'white'}}>
                        <Pagination
                            dots={3}
                            index={index}
                            onChangeIndex={this.handleChangeIndex}/>
                    </div>
                </div>
            </div>
        );
    }
});

export default Slider;