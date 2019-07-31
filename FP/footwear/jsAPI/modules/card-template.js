class cardTemplate {
    template = ({name,price,photo,key,isInBasket}) => {
        console.log("isInBasket",isInBasket);

        const Btn = isInBasket ? 
        '<button type="button" onclick="window.toBasketCb()" class="btn btn-info">Go to basket</button>' 
         : '<button type="button" onclick="window.clickCb('+key+')" class="btn btn-info">Buy</button>';
        console.log("Btn",Btn);
        return `<div class="">
        <div class="product-entry border">
            <a href="#" class="prod-img">
                <img src="`+photo+`" class="img-fluid" alt="Free html5 bootstrap 4 template">
            </a>
            <div class="desc">
                <h2><a href="#">`+name+`</a></h2>
                <span class="price">$`+price+`</span>
            </div>
            `+Btn+`
        </div>
    </div>`
    }
}
export { cardTemplate }