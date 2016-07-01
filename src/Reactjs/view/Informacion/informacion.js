import React from 'react';


const ViewInformacion=React.createClass({
    render(){
        return(
            <div>
                <section className="sectionInformation">
                    <div className="imagenInformacion" style={{height:'350px'}}>
                        <div className="row">
                            <div className="text-center">
                                <h1>¿Que es Nodezi?</h1>

                                <div className="large-5 columns" style={{marginTop:'-30px'}}>
                                    <div className="show-for-medium">
                                        <img src="asset/images/mocad.png" alt="" width="280px"/>
                                    </div>
                                </div>
                                <div className="large-7 columns">
                                    <p className="welcome-info">Bievenidos a Nodezi, Somos una empresa especializada en servicios y soluciones
                                        informaticas en el sector profesional. Nuestra especializacion se centra  en el desarrollo de software
                                        implementando las mejores tecnicas de seguridad.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="sectionInformationDife">
                    <div className="row">
                        <div className="text-center" style={{padding:'20px'}}>
                            <h1 className="diferences-title">¿Que nos hace diferente?</h1>
                            <div className="row">
                                <div className="row small-up-1 medium-up-3 large-up-3">
                                    <div className="columns" style={{padding:'10px'}}>
                                        <div className="row">
                                            <img src="asset/images/software-medida1.png" style={{height:'170px'}} alt="Escaneo vuln"/>
                                        </div>
                                        <div className="row">
                                            <p className="title">Software a Medida</p>
                                            <small>No tienes nada que hacer. El desarrollo ya .</small>
                                        </div>
                                    </div>
                                    <div className="columns" style={{padding:'10px'}}>
                                        <div className="row">
                                            <img src="asset/images/ux.png" style={{height:'170px'}} alt="Escaneo vuln"/>
                                        </div>
                                       <div className="row">
                                           <p>Mejor Experiencia de Usuario</p>
                                           <small>sdfsdfsdfds</small>
                                       </div>
                                    </div>
                                    <div className="columns" style={{padding:'10px'}}>
                                        <img src="asset/images/ui.png" style={{height:'180px'}} alt="Escaneo vuln"/>
                                        <p>Mejor Interfaz Grafica</p>
                                        <small>sdfsdfsdfds</small>
                                    </div>
                                    <div className="columns" style={{padding:'10px'}}>
                                        <div className="row">
                                            <img src="asset/images/compromiso.png" style={{height:'170px'}} alt="Escaneo vuln"/>
                                        </div>
                                        <div className="row">
                                            <p>Compromiso con el cliente</p>
                                            <small>sdfsdfsdfds</small>
                                        </div>
                                    </div>
                                    <div className="columns" style={{padding:'10px'}}>
                                        <div className="row">
                                            <img src="asset/images/testing.png" style={{height:'170px'}} alt="Escaneo vuln"/>
                                        </div>
                                        <div className="row">
                                            <p>Testing De hacking</p>
                                            <small>sdfsdfsdfds</small>
                                        </div>
                                    </div>
                                    <div className="columns" style={{padding:'10px'}}>
                                        <div className="row">
                                            <img src="asset/images/seo.png" style={{height:'170px'}} alt="Escaneo vuln"/>
                                        </div>
                                        <div className="row">
                                            <p>Seo y posicionamiento</p>
                                            <small>sdfsdfsdfds</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr/>
                    <h2 className="col-10  we-title">¿QUIENES SOMOS?</h2>
                    <article className="roww centerr we-info">
                        <p className="col-8">Somos un grupo de jovenes, emprendedores e innovadores, apasionados por la tecnologia informatica y seguridad informatica y dar soluciones informatica.</p>
                    </article>
                </section>


                <main className="view-info">
                    <section className="roww centerr we">

                    </section>
                </main>
            </div>

        );
    }
});
export default ViewInformacion;