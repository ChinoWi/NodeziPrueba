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
                <Header1></Header1>
                <MenuNav></MenuNav>
                {this.props.children}
                <Footer></Footer>
            </div>
        );
    }
});
export default App;
