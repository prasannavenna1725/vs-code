exports.LoginPage = class LoginPage{

    constructor(page){

        this.page = page
        this.username_textbox = page.getByLabel('Username')
        this.password_textbox = page.getByLabel('Password')
        this.login_button = page.getByRole('button',{name: 'Login'})

    }

    async gotoLoginPage(){
        await this.page.goto('https://the-internet.herokuapp.com/login')
    }
    async login(Username,Password){
 await this.username_textbox.fill(Username)
 await this.password_textbox.fill(Password)
 await this.login_button.click()
    }
}