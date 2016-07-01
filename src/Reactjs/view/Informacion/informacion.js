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
                                    <div className="columns">
                                        <img src="https://d2vvexhncceim6.cloudfront.net/courses/icons/000/000/078/small/Escaneo_Vuln.png?1457905863" alt="Escaneo vuln"/>
                                        <p>Software a Medida</p>
                                        <small>El escaneo es la parte donde encontramos la mayor cantidad de vulnerabilidades.</small>
                                    </div>
                                    <div className="columns">
                                        <img src="https://d2vvexhncceim6.cloudfront.net/courses/icons/000/000/078/small/Escaneo_Vuln.png?1457905863" alt="Escaneo vuln"/>
                                        <p>Mejor Experiencia de Usuario</p>
                                    </div>
                                    <div className="columns">
                                        <img src="https://d2vvexhncceim6.cloudfront.net/courses/icons/000/000/078/small/Escaneo_Vuln.png?1457905863" alt="Escaneo vuln"/>
                                        <p>Mejor Interfaz Grafica</p>
                                    </div>
                                    <div className="columns">
                                        <img src="https://d2vvexhncceim6.cloudfront.net/courses/icons/000/000/078/small/Escaneo_Vuln.png?1457905863" alt="Escaneo vuln"/>
                                        <p>Compromiso con el cliente</p>
                                    </div>
                                    <div className="columns">
                                        <img src="https://d2vvexhncceim6.cloudfront.net/courses/icons/000/000/078/small/Escaneo_Vuln.png?1457905863" alt="Escaneo vuln"/>
                                        <p>Testing De hacking</p>
                                    </div>
                                    <div className="columns">
                                        <img src="https://d2vvexhncceim6.cloudfront.net/courses/icons/000/000/078/small/Escaneo_Vuln.png?1457905863" alt="Escaneo vuln"/>
                                        <p>Seo y posicionamiento</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <main className="view-info">
                    <section className="roww  centerr diferences">
                        <h2 className="col-10 diferences-title">¿QUE NOS HACE DIFERENTE?</h2>
                        <ul className="col-9 startt  diferences-list">
                            <li className="icon-pencil">Software a la medida</li>
                            <li className="icon-pencil">Seguridad de la informacion </li>
                            <li className="icon-pencil">Sin costo de mantenimiento</li>
                            <li className="icon-pencil">Mejor experiencia del usuario(UX)</li>
                            <li className="icon-pencil">Mejor interfaz grafica(UI)</li>
                            <li className="icon-pencil">Compromiso con el cliente</li>
                        </ul>
                    </section>
                    <section className="roww centerr we">
                        <h2 className="col-10  we-title">¿QUIENES SOMOS?</h2>
                        <article className="roww centerr we-info">
                            <p className="col-8">Somos un grupo de jovenes, emprendedores e innovadores, apasionados por la tecnologia informatica y seguridad informatica y dar soluciones informatica.</p>
                        </article>
                    </section>
                </main>
            </div>

        );
    }
});
export default ViewInformacion;