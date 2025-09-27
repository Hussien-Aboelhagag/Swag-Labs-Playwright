const{LoginPage} = require("./LoginPage");
const{DashboardPage} = require("./DashboardPage");
const{CartPage} = require("./CartPage");
const{checkoutPage} = require("./CheckoutPage");
class PoManager{
    constructor(page){
        this.page = page;
        this.loginPage = new LoginPage(this.page);
        this.DashboardPage = new DashboardPage(this.page);
        this.CartPage = new CartPage(this.page);
        this.CheckoutPage = new checkoutPage(this.page);
    }
    getLoginPage(){
        return this.loginPage;
    }
    getDashboardPage(){
        return this.DashboardPage;
    }
    getCartPage(){
        return this.CartPage;
    }
    getCheckoutPage(){
        return this.CheckoutPage;
    }
    
}
module.exports = {PoManager};