import React from 'react'
import MediaQuery from 'react-responsive'


class ViewPreguntas  extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
        data: []
    }
  }

  componentWillMount(){
    fetch('src/Reactjs/view/data.json')
     .then((response) => {
         return response.json()
     })
     .then((data) => {
        this.setState({
            data:data
        })
     })
  }

  render(){
    if(this.state.data.length > 0){
        return (
            <section className="section">  
                <Question question = {this.state.data} /> 
            </section>
        )
    }
    else{
        return  <p>Cargando Preguntas</p>
    }
  }
  
}

class Question extends React.Component {
  
  constructor(){
     super();
  } 

  render(){
    return(
           <div> 
                <div className="row Frequently">
                       <h3 className="large-12  text-center columns">Preguntas Frecuentes williams</h3>
                </div>
                {
                this.props.question.map((elem)=>{
                   return (
                     <article className="section-article"  key={elem.key}>

                     <MediaQuery minWidth={1024}>
                        <div className="row  section-usuario"> 
                            <div className="large-5 large-push-2 columns">  
                              <img src="asset/images/usuario.png"/>
                            </div>
                            <div className="large-7 columns section-UsuarioQuestion">
                                <label className="section-User">Usuario</label>   
                                <label className="section-Question">{elem.Pregunta}</label>
                            </div>
                        </div>
                        <div className="row section-answer">
                                 <img src="asset/images/admin.png"/>
                               <div className="large-12  column section-AdminContentAnswer">  
                                <label className="section-Admin">Admin</label>
                                <label className="section-AdminAnswer">{elem.Respuesta}</label>
                               </div>
                        </div>
                     </MediaQuery>
                     <MediaQuery minWidth={641}>
                         <h1 className="hide-for-large">JORGE</h1> 
                     </MediaQuery>
                     <MediaQuery maxWidth={640}>
                        <div className="row hide-for-medium  mobile-user"> 
                            <div className="small-6 small-push-2 columns mobile-ContentUser">  
                              <img src="asset/images/usuario.png"/>
                            </div>
                            <div className="small-6 columns">
                                <label className="mobile-usuario">Usuario</label>   
                                <label className="mobile-question">{elem.Pregunta}</label>
                            </div>
                        </div>
                        <div className="linea"></div>
                        <div className="row mobile-admin">
                                <img src="asset/images/admin.png"/>
                               <div className="small-12  column section-AdminContentAnswer">  
                                <label className="mobile-administrador">Admin</label>
                                <label className="mobile-answer">{elem.Respuesta}</label>
                               </div>
                        </div>
                    </MediaQuery>
                     </article>
                  ) 
                })
              }
           </div>            
        ) 
 
  }  
 
}

export default ViewPreguntas








