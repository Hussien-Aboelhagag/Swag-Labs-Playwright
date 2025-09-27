const {test,expect}= require('@playwright/test');
const { PoManager } = require('../Pages/POManager');
//Json->String->JS object
const dataset =JSON.parse(JSON.stringify(require("../Pages/placeorder-data.json")));
for(const data of dataset)
{
test(`First Assignment for vosita - ${data.FilterOption}`, async ({browser}) => {
    browser = await browser.newContext();
    const page = await browser.newPage();
    //----------------------------------------------Second website --------------
    const poManager=new PoManager(page);
    //login
    const loginPage= poManager.getLoginPage();
    await loginPage.navigation("https://www.saucedemo.com/");
    await loginPage.login(data.username,data.password);
    //Dashboard
    const dashboardPage= poManager.getDashboardPage();
    await dashboardPage.filterSelection(data.FilterOption);
    await dashboardPage.addProductToCart(data.productName1);
    await dashboardPage.addProductToCart(data.productName2);
    await dashboardPage.removeProductFromCartInDashboard(data.productName2);
    await dashboardPage.navigateToCart();
    //Cart
    const cartPage= poManager.getCartPage();
    expect(cartPage.validation(data.productName1)).toBeTruthy();
    await cartPage.navigationCheckout();
    //Checkout
    const checkoutPage= poManager.getCheckoutPage();
    await checkoutPage.cancelCheckout();
    await cartPage.navigationCheckout();
    await checkoutPage.fillCheckoutDetails(data.firstname,data.lastname,data.postalcode);
    await checkoutPage.finishCheckout();
    const isOrderComplete= await checkoutPage.validateOrderCompletion("Thank you for your order!");
    expect(isOrderComplete).toBeTruthy();
    await checkoutPage.navigateBackToHome();
    await dashboardPage.logout();
    await page.close();
});
}