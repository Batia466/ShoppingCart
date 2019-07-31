import { dbService } from './db-service.js';
import { cardTemplate } from './modules/card-template.js';
import { cartLogic } from './cart.js';

var user = {
    name: 'Kim',
    active: true,
    cart: [],
    purchases: []
}

class mainClass {
    constructor() {
        this.items = [];
    }
    setItems = (items) => {
        this.items = [].concat(items);
    }
    clickCb = (key) => {

      
        let items = this.items.filter((e) => {
            return e.key == key
        })
        if (items && items.length > 0) {
            const item = items[0];
            item.isInBasket = true;
            updateItems(this);
            user = cartLogic(user, item);
            return console.log("item was clicked", user)
        }
    }
    getDbData = () => {
        var db = new dbService();
        return db.getItems()
    }
}

window.onload = function() {
   
    const main = new mainClass();
    window.clickCb = main.clickCb;
    main.getDbData().then((res)=> {
        const items = res;
        main.setItems(items);
        updateItems(main)
   
    })
}
const updateItems = (main) => {
    const cont = document.getElementById("cards_cont");
    cont.innerHTML = [];
    main.items.forEach((item) => {
        let templateCard = new cardTemplate();
        if(!item.isInBasket) {
            item.isInBasket = false
        }
        let row = templateCard.template(item);
        var temp = document.createElement('div');
        temp.setAttribute("class","col-lg-3 mb-4 text-center");
        temp.innerHTML = row;
        cont.appendChild(temp);
    })
}
