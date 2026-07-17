# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: global.setup.ts >> authenticateuser
- Location: tests\global.setup.ts:4:5

# Error details

```
Error: locator.fill: value: expected string, got undefined
```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e4]: Swag Labs
  - generic [ref=e5]:
    - generic [ref=e9]:
      - textbox "Username" [ref=e11]
      - textbox "Password" [ref=e13]
      - button "Login" [ref=e15] [cursor=pointer]
    - generic [ref=e17]:
      - generic [ref=e18]:
        - heading "Accepted usernames are:" [level=4] [ref=e19]
        - text: standard_user
        - text: locked_out_user
        - text: problem_user
        - text: performance_glitch_user
        - text: error_user
        - text: visual_user
      - generic [ref=e20]:
        - heading "Password for all users:" [level=4] [ref=e21]
        - text: secret_sauce
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
  24 |     await this.page.goto('/')
  25 | }
  26 | 
  27 | async doLogin()
  28 | {
  29 |   //await this.usernameField.fill(TEST_DATA.user.username);
  30 |   //await this.passwordField.fill(TEST_DATA.user.password);
> 31 |   await this.usernameField.fill(ConfigReader.username!);
     |                            ^ Error: locator.fill: value: expected string, got undefined
  32 |   await this.passwordField.fill(ConfigReader.password!);
  33 |   await this.loginButton.click();
  34 | 
  35 | }
  36 | 
  37 | }
```