import React from 'react';

const ViewInformacion=React.createClass({
    render(){
        return(
            <main className="view-info">
                <section className="roww centerr info">
                    <h1 className="col-10  info-title">¿QUE ES NODEZI?</h1>
                    <article className="roww middlee around welcome">
                        <figure className="col-6  welcome-contentImage"><img src="asset/images/mocad.png" alt="" width="350px"/></figure>
                        <p className="col-6 welcome-info">Bievenidos a Nodezi, Somos una empresa especializada en servicios y soluciones informaticas en el sector profesional. Nuestra especializacion se centra  en el desarrollo de software implementando las mejores tecnicas de seguridad.</p>
                    </article>
                </section>
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
        );
    }
});
export default ViewInformacion;