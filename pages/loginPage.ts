import {Page, Locator} from '@playwright/test'
import { TEST_DATA } from '../data/testData';


export class LoginPage
{  
    page: Page;
    usernameField: Locator;
    passwordField: Locator;
    loginButton: Locator;

    constructor(page: Page)
    {
        
       this.page = page;
       this.usernameField = page.getByPlaceholder('Username');
       this.passwordField = page.getByPlaceholder('Password');
       this.loginButton = page.getByRole('button' , {name: 'Login'})

    }

async openApplication()
{
    await this.page.goto('/')
    }

async doLogin()
{
   await this.usernameField.fill(TEST_DATA.user.username);
   await this.passwordField.fill(TEST_DATA.user.password);
   await this.loginButton.click();

}

}