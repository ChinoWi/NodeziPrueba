import React from 'react';

const PruebaModal=React.createClass({
    getInitialState(){
        return{
            isModalOpen:false,
        }
    },
    showModal() {
        this.setState({
            isModalOpen: true,
        })

    },

    hideModal() {
        this.setState({ isModalOpen: false })
    },
    render() {
        return (
            <div className="row" style={{padding:'15px'}}>
                <div id="contentModal">
                    <div className="text-center">
                        <img className="imgVideoModal" src="asset/images/video_portada.jpg" style={{height:'280px'}} onClick={() => this.showModal()}alt=""/>
                    </div>
                </div>
                <Modal isShowModal={this.state.isModalOpen} isHideModal={() => this.hideModal()}>
                    <div className="text-right" style={{marginRight:'8px'}}>
                        <a className="icon-closeModal" onClick={() => this.hideModal()} >X</a>
                    </div>
                    <div class="flex-video" style={{marginLeft:'30px',marginRight:'30px',marginBottom:'20px'}}>
                        <iframe style={{background:'#DBD8F0',width:'1000px',height:'400px',margin:'0px'}} className="thumbnail"src="https://www.youtube.com/embed/aiBt44rrslw" frameborder="0" allowfullscreen></iframe>
                    </div>
                </Modal>

            </div>
        )
    }
});

const Modal=React.createClass({
    close(e) {
        e.preventDefault()

        if (this.props.isHideModal) {
            this.props.isHideModal()
        }
    },

    render() {
        if (this.props.isShowModal === false)
            return null

        let StyleModal = {
            position: 'absolute',
            top: '44%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: '9999',
            background: '#fff',
            textAlign:'center'
        };


        let FondoModal = {
            position: 'absolute',
            width: '100%',
            height: '100%',
            top: '0px',
            left: '0px',
            zIndex: '4',
            background: 'rgba(0, 0, 0, 0.5)'
        };

        if (this.props.FondoModal) {
            for (let key in this.props.FondoModal) {
                FondoModal[key] = this.props.FondoModal[key]
            }
        }

        return (
            <div>
                <div style={StyleModal}>
                    {this.props.children}
                </div>
                {<div style={FondoModal}
                      onClick={e => this.close(e)}/>}
            </div>
        )
    }
});

export default PruebaModal;