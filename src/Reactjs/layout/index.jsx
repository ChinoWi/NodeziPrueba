import React from 'react';
import {Link} from 'react-router';
import AppSidebar from '../component/sidebar/sidebar'


const styles = {
    contentHeaderMenuLink: {
        textDecoration: 'none',
        color: 'white',
        padding: 8,
    },
    content: {
        padding: '16px',
    },
};

const Header1=React.createClass({
    render(){
        return(
            <div>
                <header>
                    <div className="header1">
                        <div className="show-for-small-only">
                            <AppSidebar></AppSidebar>
                        </div>
                        <div className="show-for-medium">
                            <div className="top-bar" style={{height:'80px'}} >
                                <div className="top-bar-left">
                                    <div className="contentBarDesktopLeft">
                                        <img src="asset/images/logo.png" alt="" style={{height:'55px'}}/>
                                    </div>
                                </div>
                                <div className="top-bar-right" style={{marginRight:'100px'}}>
                                    <div className="text-center">
                                        <form>
                                            <input type="search"  placeholder="Buscar" style={{marginBottom:'0px',height:'30px'}} />
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sombraLine"></div>
                </header>

            </div>

        );
    }
});

const MenuNav=React.createClass({
    render(){
        return(
            <div className="show-for-medium">
                <ul className="nav" style={{backgroundAttachment:'fixed'}}>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/Informacion">Informacion</Link></li>
                    <li><Link to="/Preguntas">Preguntas</Link></li>
                    <li><Link to="/Contactenos">Contactenos</Link></li>
                </ul>
            </div>

        );
    }
})

const Footer=React.createClass({
    render(){
        return(
            <footer className="footer">
                <div className="footer-main">
                    <div className="footer-terms">
                        <p className="terms-title">
                            Desarrollo de Aplicaciones Web,Moviles y Servicios de Seguridad Informatica
                        </p>
    		<span className="terms-conditional">
    			<a href="">Terminos y Condiciones</a>
    		</span>
                    </div>
                    <div className="content-network">
                        <p><a href="#" class="icon-twitter"></a></p>
                        <p><a href="#" class="icon-facebook"></a></p>
                        <p><a href="#" class="icon-skype"></a></p>
                        <p><a href="#"class="icon-google"></a></p>
                        <p><a href="#" class="icon-whatsapp"></a></p>
                    </div>
                </div>

                <div className="content-rights">
                    <p className="rights-title">
                        Copyrigh@2016 Power by Nodezi
                    </p>
                </div>
            </footer>
        );
    }
});

const App=React.createClass({
    render(){
        return(
            <div>
                <Header1></Header1>
                <MenuNav></MenuNav>
                {this.props.children}
                <Footer></Footer>
            </div>
        );
    }
});
export default App;
