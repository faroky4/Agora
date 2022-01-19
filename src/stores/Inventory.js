import { computed, observable, action, makeObservable } from 'mobx'
import { Item } from './Item'

export class Inventory {
    constructor() {
        this.list = [];
        this.length = 0;

        makeObservable(this, {
            list: observable,
            length: observable,
            addItem: action,
            buyItem: action,
            changePrice: action,
            numItems: computed
        })

    }

    get numItems() {
        return this.list.length
    }

    addItem = (name, price, quantity) => {
        for(let item of this.list)
        {
            if(item.name === name)
            {
                item.quantity += 1
            }
            else{
                let newItem = new Item(name,price,quantity)
                this.list.push(newItem)
            }
        }
    }
    buyItem = (name) => {
        for(let ind in this.list){
            if(this.list[ind].name === name)
            {
                if(this.list[ind].quantity == 0)
                {
                    this.list.splice(ind, 1)
                }
                else {
                    this.list[ind].quantity -= 1
                }
            }
        }
    }
    changePrice= (name, price) => {
        for(let item of this.list)
        {
            if(item.name === name)
            {
                item.price = price
            }
        }
    }
}