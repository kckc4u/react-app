import React, { Component } from 'react'

export class Form extends Component {
    state = {
        name: '',
        job: ''
    }

    changeHandle = (event) => {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        })
    }

    submitHandle = (event) => {
        event.preventDefault();
        const {name, job} = this.state;
        this.props.addCharacter({name, job});
        this.setState({
            name: '',
            job: ''
        });
    }

    render() {
        const {name, job} = this.state;

        return (
            <form>
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    name="name"
                    onChange={this.changeHandle}
                    value={name}
                />
                <label htmlFor="job">Job</label>
                <input
                    type="text"
                    name="job"
                    value={job}
                    onChange={this.changeHandle}
                />
                <button type="button" onClick={this.submitHandle}>Submit</button>
            </form>
        )
    }
}

export default Form
