class CartPage {
    constructor(page) {
        this.page = page;
        this.firstItem = page.locator('.inventory_item_name');
        this.checkoutBtn = page.locator("#checkout");
    }
    async validation(productName) {
        const productVisible = this.page.getByText(productName);
        await this.firstItem.first().waitFor();
        return await productVisible.isVisible();
    }

    async navigationCheckout() {
        await this.checkoutBtn.click();
    }
}
module.exports = { CartPage };