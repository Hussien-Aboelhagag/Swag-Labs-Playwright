class DashboardPage {
    constructor(page) {
        this.page = page;
        this.products = page.locator('.inventory_item');
        this.cartPage=page.locator('.shopping_cart_link');
        this.filterDropdown = page.locator('.product_sort_container'); 
        this.menuBtn = page.locator('#react-burger-menu-btn');
        this.logoutLink = page.locator('#logout_sidebar_link');
    }
    async filterSelection(selectOption){
        await this.filterDropdown.selectOption(selectOption);
    }
    async getFirstProduct() {
        await this.products.first().waitFor();
        return this.products.first().innerText();
    }
    async addProductToCart(productName) {
        await this.products.first().waitFor();
        await this.products.filter({hasText:productName}).getByRole("button",{name:"Add To Cart"}).click();
    }
     async removeProductFromCartInDashboard(productName) {
        await this.products.first().waitFor();
        await this.products.filter({hasText:productName}).getByRole("button",{name:"Remove"}).click();
    }
    async navigateToCart(){
        await this.cartPage.click();
    }
    async logout(){
        await this.menuBtn.click();
        await this.logoutLink.click();
    }
}
module.exports = { DashboardPage };