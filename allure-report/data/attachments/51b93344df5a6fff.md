# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: global.setup.ts >> authenticateuser
- Location: tests\global.setup.ts:4:5

# Error details

```
Error: page.goto: url: expected string, got undefined
```

# Test source

```ts
  1  | import {Page, Locator} from '@playwright/test'
  2  | import { TEST_DATA } from '../data/testData';
  3  | import { ConfigReader } from '../utils/configreader';
  4  | 
  5  | export class LoginPage
  6  | {  
  7  |     page: Page;
  8  |     usernameField: Locator;
  9  |     passwordField: Locator;
  10 |     loginButton: Locator;
  11 | 
  12 |     constructor(page: Page)
  13 |     {
  14 |         
  15 |        this.page = page;
  16 |        this.usernameField = page.getByPlaceholder('Username');
  17 |        this.passwordField = page.getByPlaceholder('Password');
  18 |        this.loginButton = page.getByRole('button' , {name: 'Login'})
  19 | 
  20 |     }
  21 | 
  22 | async openApplication()
  23 | {
  24 |     //await this.page.goto('/')
> 25 |     await this.page.goto(ConfigReader.url!);
     |                     ^ Error: page.goto: url: expected string, got undefined
  26 | }
  27 | 
  28 | async doLogin()
  29 | {
  30 |   //await this.usernameField.fill(TEST_DATA.user.username);
  31 |   //await this.passwordField.fill(TEST_DATA.user.password);
  32 |   await this.usernameField.fill(ConfigReader.username!);
  33 |   await this.passwordField.fill(ConfigReader.password!);
  34 |   await this.loginButton.click();
  35 | 
  36 | }
  37 | 
  38 | }
```