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


    menuNav:{
        zIndex: '1000',
        position: 'fixed',
        marginLeft: '0px',
        width: '150px',
        left: '45.3px',
        maxWidth:'50%'

    }
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
                </header>

            </div>

        );
    }
});

const MenuNav=React.createClass({
   getInitialState: function(){
     return{ 
         items:[
            {id:1,ruta:'/',item:'Home'},
            {id:2,ruta:'/Informacion',item:'Infomacion'},
            {id:3,ruta:'/Preguntas',item:'Preguntas'},
            {id:4,ruta:'/Contactenos',item:'Contactenos'}
         ] 
       }
    },

    render(){
        return(
            <div className="show-for-medium">
                <MenuItem items={this.state.items} />
            </div>
        );
    }
});



const MenuItem = React.createClass({
    render(){
       return (
         <ul className="nav">
             {
                this.props.items.map((elem) => {
                    return (
                        <li className="nav-item" key={elem.id}> <Link to={elem.ruta}>{elem.item}</Link></li>  
                    )
                })
             }
         </ul>   
        )
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
                <div className="body-container">
                    <header className="headerr">
                        <div className="row">
                            <div className="small-12 medium-4 columns">
                                <Link to="/">
                                    <img src="asset/images/logo.png" alt=""/>
                                </Link>
                            </div>
                            <div className="small-12 medium-2 columns">
                                <div className="input-wrapper right">
                                    <i className="fa fa-search mdi mdi-magnify"></i>
                                    <input type="text" className="search-box" placeholder="Search Hashnode"/>
                                </div>
                            </div>
                        </div>
                    </header>

                    <div className="content-row">
                        <div className="row">
                            sdfsdfsd
                            <div className="medium-3 large-2 hide-for-small-only columns menu-left">
                                <div className="menu-left-content" style={styles.menuNav}>
                                    <ul className="nav-list">
                                        <li>
                                            <Link to="/" className="active">
                                                <img src="https://res.cloudinary.com/hashnode/image/upload/v1450381587/static_imgs/nodes-img.png"/>
                                                <span>Inicio</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/Informacion">
                                                <img src="https://res.cloudinary.com/hashnode/image/upload/v1450381587/static_imgs/nodes-img.png"/>
                                                <span>Informacion</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/Preguntas">
                                                <img src="https://res.cloudinary.com/hashnode/image/upload/v1450381587/static_imgs/nodes-img.png"/>
                                                <span>Preguntas</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/Contactenos">
                                                <img src="https://res.cloudinary.com/hashnode/image/upload/v1450381587/static_imgs/nodes-img.png"/>
                                                <span>Contactenos</span>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="medium-9 large-10 columns" style={{border:'1px solid blue'}}>
                                {this.props.children}
                            </div>
                        </div>
                    </div>

                </div>

                <br/>
            </div>

        );
    }
});
export default App;



























