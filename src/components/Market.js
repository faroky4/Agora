import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import Item from './Item'


class Market extends Component {
    constructor() {
        super()
        this.state = {
            name: "",
            price: "",
            quantity: ""
        }
    }

    handleChange = (e) => {
        this.setState({
          [e.target.name]: e.target.value
        })
    }

    addItem = () => {
        this.props.store.addItem(this.state.name, parseInt(this.state.price), parseInt(this.state.quantity))
        this.setState({name: "", price: "", quantity: ""})
    }

    render() {
        return (
            <div>
                <input
                    name="name"
                    type="text"
                    placeholder="Item"
                    value={this.state.name}
                    onChange={this.handleChange}/>

                <input
                    name="price"
                    type="number"
                    placeholder="Price"
                    value={this.state.price}
                    onChange={this.handleChange}/>

                <input
                    name="quantity"
                    type="number"
                    placeholder="Quantity"
                    value={this.state.quantity}
                    onChange={this.handleChange}/>

                <button onClick={this.addItem}>Add Item</button>
                <h2>Total Items: {this.props.store.numItems}</h2>
                {this.props.store.list.map(i =>
                    <Item key={i} item={i} store={this.props.store}/>
                    )}
            </div>
        )
    }
}

export default inject("store")(observer(Market))