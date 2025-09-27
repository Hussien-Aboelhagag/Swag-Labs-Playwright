class LoginPage {
    constructor(page) {
        this.page = page
        this.email_textbox = page.locator('#user-name')
        this.password_textbox = page.locator('#password')
        this.login_button = page.locator('#login-button')
    }
    async navigation(url){
        await this.page.goto(url);
    }
    async login(username, password){
        await this.email_textbox.fill(username);
        await this.password_textbox.fill(password);
        await this.login_button.click();
        await this.page.waitForLoadState("networkidle");
    }
}
module.exports={LoginPage};