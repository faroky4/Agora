import React, { Component } from 'react';
import { observer, inject } from 'mobx-react'
import '../App.css'

class Item extends Component {

    buyItem = () => {
        this.props.store.buyItem(this.props.item.name)
    }

    editPrice = (e) => {
        if(e.detail === 2) {
            let userInputPrice = prompt(`Please enter the new price for ${this.props.item.name}`, "");
            this.props.store.changePriceOfItem(this.props.item.name, userInputPrice)

        }
    }

    render() {
        let item = this.props.item
        return (
            <div>
                <li>
                    {item.quantity} {item.name} available at
                    <span onClick={this.editPrice}> {item.price}</span> per item
                </li>
                <button onClick={this.buyItem}>BUY</button>
            </div>
        )
    }
}

export default inject("store")(observer(Item))