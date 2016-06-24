import React from 'react';
import {Link} from 'react-router';
import Slider from '../../component/slider/slider'
import PruebaModal from '../../component/modalVideo/modalVideo'

var styleSection1={
    solution:{
        paddingLeft:'10px',
        paddingRight:'10px',
        border:'2px solid blue'
    }
};

const SectionInformacionDesktop=React.createClass({
    render(){
        return(
            <div>
                <div className="row columns" style={{boxShadow:'0 1px 2px 0 #BFBFBF',background:'white',padding:'10px'}}>
                    <div className="medium-3 large-3 columns" >
                        <img src={this.props.imagensrc} style={{width:'110px'}} alt=""/>
                    </div>
                    <div className="medium-6 large-6 columns" >
                        <h5 style={{margin:'27px'}}>{this.props.texto}</h5>
                    </div>
                    <div className="medium-3 large-3 columns" >
                        <a className="secondary button" style={{margin:'35px'}}>Informacion</a>
                    </div>
                </div>
                <br/>
            </div>
        );
    }
});


const ViewHome=React.createClass({
    getInitialState(){
        return{
            informacion:[
                {
                    key:1,
                    imagensrc:'asset/images/desarrolloWeb.png',
                    texto:'Desarrollo de Aplicaciones web para personas y empresas',
                    textoButton:'Informacion'

                },
                {
                    key:2,
                    imagensrc:'asset/images/seguridad.png',
                    texto:'Auditoria y Seguridad para para empresas y aplicaciones',
                    textoButton:'Informacion'
                },
                {
                    key:3,
                    imagensrc:'asset/images/desarrolloMovil.png',
                    texto:'Desarrollo de Aplicaciones Moviles para personas y empresas',
                }

            ]
        }
    },
    eachItemDesktop:function(info) {
        return (
            <SectionInformacionDesktop key={info.key}
                                        imagensrc={info.imagensrc}
                                        texto={info.texto}>
            </SectionInformacionDesktop>
        )
        ;
    },
    render(){
         return(
            <div id="captura">
                <div className="show-for-small-only">
                    <section id="sectionVideo">
                        <div className="topVideo"></div>
                        <div className="bottomVideo">
                            <div className="centerVideo">
                                <div className="titleVideo"><h6><small>Video</small></h6></div>
                                <div className="text-center">
                                    <div class="flex-video">
                                        <iframe style={{background:'#DBD8F0'}} className="thumbnail" width="330" height="220" src="https://www.youtube.com/embed/aiBt44rrslw" frameborder="0" allowfullscreen></iframe>
                                    </div>
                                </div>
                            </div>
                            <div className="bottonVideo-content">
                               <div className="bottonVideo-content title">
                                   Welcome
                               </div>
                                <div className="bottonVideo-content texto">
                                    Soluciones para todo tipo de negocio,
                                    para personas y empresas
                                </div>
                            </div>
                            <br/>
                            <div className="bottomVideo-span">
                                <span className="texto"><h3><small>Website</small></h3></span><div className="spacio"></div>
                                <span className="texto"><h3><small>Desing</small></h3></span><div className="spacio"></div>
                                <span className="texto"><h3><small>Security</small></h3></span><div className="spacio"></div>
                                <span className="texto"><h3><small>Movil</small></h3></span><div className="spacio"></div>
                                <span className="texto"><h3><small>Marketing</small></h3></span>
                            </div>
                        </div>
                    </section>

                    <div className="separacion"></div>
                    <section id="sectionSlider">
                        <Slider></Slider>
                    </section>
                    <div className="separacion"></div>
                    <section id="SectionInformationDesktop">
                        <div className="row columns">
                            <div className="text-center">
                                <div className="row columns">
                                    <h1>NUESTRAS SOLUCINES INCLUYEN LO SIGUIENTE</h1>
                                </div>
                                {this.state.informacion.map(this.eachItemDesktop)}

                            </div>
                        </div>
                    </section>

                </div>
                <div className="show-for-medium">
                    <section id="SectionVideoDesktop">
                        <div className="row">
                            <div className="medium-5 large-6 columns" style={{height:'314px'}}>
                                <div style={{padding:'20px'}}>
                                    <h3 style={{color:'#f95e1b'}}>Webservice Production</h3>
                                    <p style={{fontSize:'40px'}}>Porque desarrollamo lo que piensas.</p>
                                </div>

                            </div>
                            <div className="medium-7 large-6 columns" >
                                <div className="text-center">
                                    <div style={{padding:'20px'}}>
                                        <PruebaModal></PruebaModal>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section id="sectionSlider">
                        <Slider></Slider>
                    </section>
                    <section id="SectionInformationDesktop">
                        <div className="row columns">
                            <div className="text-center">
                                <div className="row columns">
                                    <h1>NUESTRAS SOLUCINES INCLUYEN LO SIGUIENTE</h1>
                                </div>
                                {this.state.informacion.map(this.eachItemDesktop)}

                            </div>
                        </div>
                    </section>

                </div>

            </div>
        );
    }
});
export default ViewHome;