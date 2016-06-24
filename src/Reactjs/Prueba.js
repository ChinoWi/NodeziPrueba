import React from 'react';


var TodoApp3 = React.createClass({
    mixins: [ReactFireMixin],

    getInitialState: function() {
        return {
            items: [],
            text: ''
        };
    },

    componentWillMount: function() {
        var firebaseRef = firebase.database().ref('todoApp/items');;
        this.bindAsArray(firebaseRef.limitToLast(25), 'items');
    },

    onChange: function(e) {
        this.setState({text: e.target.value});
    },

    handleSubmit: function(e) {
        e.preventDefault();
        if (this.state.text && this.state.text.trim().length !== 0) {
            this.firebaseRefs['items'].push({
                text: this.state.text
            });
            this.setState({
                text: ''
            });
        }
    },

    render: function() {
        return (
            <div>
                <form onSubmit={ this.handleSubmit }>
                    <input onChange={ this.onChange } value={ this.state.text } />
                    <button>{ 'Add #' + (this.state.items.length + 1) }</button>
                </form>
            </div>
        );
    }
});

export default TodoApp3;
