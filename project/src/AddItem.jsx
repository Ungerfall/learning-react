import React, { Component } from 'react';

class AddItem extends Component {
    constructor(props) {
        super(props);
        let currentDate = new Date().toISOString().slice(0, 10);

        this.state = {
            isSaving: false,
            item: {
                Title: "",
                Date: currentDate,
                Description: "",
                Info: "",
                Image: ""
            }
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onChange(e) {
        let value = e.target.value;
        let name = e.target.name;

        this.setState(prevState => {
            return {
                item: { ...prevState.item, [name]: value }
            }
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        let data = this.state.item;

        fetch("http://localhost:4000/News", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(response => console.log(response.status));
    }

    render() {
        return (<div className="form-container">
            <form onSubmit={this.handleSubmit}>

                <div className="row">
                    <label>Title:
          <input type="text" name="Title" value={this.state.Title} onChange={this.onChange} />
                    </label>
                </div>

                <div className="row">
                    <label>Description:
             <textarea type="text" name="Description" value={this.state.Description} onChange={this.onChange} />
                    </label>
                </div>

                <div className="row">
                    <label>Info:
<textarea type="text" name="Info" value={this.state.Info} onChange={this.onChange} />
                    </label>
                </div>

                <div className="row">
                    <label>Image(URL):
<input type="text" name="Image" value={this.state.Image} onChange={this.onChange} />
                    </label>
                </div>
                <div className="row">
                    <button>Send</button>
                </div>
            </form>

        </div>)
    }
}

export default AddItem;
