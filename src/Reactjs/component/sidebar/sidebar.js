import React from 'react';


const AppSidebar=React.createClass({
    render(){
        return (
            <div>
                <div className="show-for-small-only">
                    <div className="top-bar" >
                        <div className="content-top-bar">
                            <div className="small-7 columns">
                                <div className="">
                                    <img className="smallLogo" src="asset/images/logo.png" alt=""  />
                                </div>
                            </div>
                            <div className="small-5 columns">
                                <div className="small-4 columns">
                                    <img className="smallBuscar" src="asset/images/iconbuscar.png" alt=""/>
                                </div>
                                <div className="small-4 columns">
                                    <img className="smallMenu" onClick={this.props.toggleMenu} src="asset/images/iconmenu.png" alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        )
    }
});




export default AppSidebar;