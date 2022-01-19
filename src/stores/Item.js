import { observable, makeObservable } from 'mobx'

export class Item {

    constructor(name, price=0, quantity=1) {
        this.name = name
        this.price = price
        this.quantity = quantity

        makeObservable(this, {
            name: observable,
            price: observable,
            quantity: observable
        })
    }
}