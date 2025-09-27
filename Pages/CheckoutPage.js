class checkoutPage {
    constructor(page) {
        this.page = page;
        this.firstName = page.locator("#first-name");
        this.lastName = page.locator("#last-name");
        this.postalCode = page.locator("#postal-code");
        this.continueBtn = page.locator("#continue");
        this.finishBtn = page.locator("#finish");
        this.cancelBtn = page.locator("#cancel");
        this.CompleteHeader = page.locator(".complete-header");
        this.backHomeBtn = page.locator("#back-to-products");
    }
    async fillCheckoutDetails(firstname, lastname, postalcode) {
        await this.firstName.fill(firstname);
        await this.lastName.fill(lastname);
        await this.postalCode.fill(postalcode);
        await this.continueBtn.click();
    }
    async finishCheckout() {
        await this.finishBtn.click();
    }
    async cancelCheckout() {
        await this.cancelBtn.click();
    }
    async validateOrderCompletion(expectedText) {
        const isVisible = await this.CompleteHeader.isVisible();
        if (!isVisible) return false;
        const actualText = await this.CompleteHeader.textContent();
        return actualText.trim() === expectedText;
    }
    async navigateBackToHome() {
        await this.backHomeBtn.click();
    }

}
module.exports = { checkoutPage };