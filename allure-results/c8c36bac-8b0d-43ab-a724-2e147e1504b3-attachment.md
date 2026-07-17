# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: SauceDemoTests.spec.ts >> ValidateLogin
- Location: tests\SauceDemoTests.spec.ts:4:5

# Error details

```
Error: page.goto: Protocol error (Page.navigate): Cannot navigate to invalid URL
Call log:
  - navigating to "/inventory.html", waiting until "load"

```

# Test source

```ts
  1  | import { TEST_DATA } from '../data/testData';
  2  | import {test, expect} from '../fixture/pageObjectFixture'
  3  | 
  4  | test('ValidateLogin', async ({page, loginpage, productlistpage, cartpage })=>{
  5  | 
> 6  |     await page.goto(TEST_DATA.urls.inventory);
     |                ^ Error: page.goto: Protocol error (Page.navigate): Cannot navigate to invalid URL
  7  |     expect (await page).toHaveURL(TEST_DATA.urls.inventory);
  8  |     await page.waitForTimeout(2000);
  9  | })
  10 | 
  11 | test('ValidateAddToCart' , async ({page, loginpage, productlistpage, cartpage})=>{
  12 | 
  13 |     await page.goto(TEST_DATA.urls.inventory);
  14 |     
  15 |     await productlistpage.waitForPageLoad();
  16 |     await productlistpage.clickAddtoCartbuton();
  17 | 
  18 |     await productlistpage.header.openandCloseBurger();
  19 | 
  20 |     expect (await productlistpage.cartBadgeIcon).toHaveText('1');
  21 |     await productlistpage.clickCartIcon();
  22 |     expect(await page).toHaveURL('https://www.saucedemo.com/cart.html');
  23 | 
  24 |     await page.waitForTimeout(2000);
  25 | 
  26 | })
  27 | 
  28 | test('ValidateCartItem', async ({page, loginpage, productlistpage, cartpage})=>{
  29 |     
  30 |     await page.goto(TEST_DATA.urls.inventory);
  31 |     
  32 |     await productlistpage.clickAddtoCartbuton();
  33 |     expect (await productlistpage.cartBadgeIcon).toHaveText('1');
  34 |     await productlistpage.clickCartIcon();
  35 |     expect(await page).toHaveURL('https://www.saucedemo.com/cart.html');
  36 | 
  37 |     expect (await cartpage.cartProduct).toHaveText('Sauce Labs Backpack');
  38 |     
  39 |     await cartpage.header.openandCloseBurger();
  40 | 
  41 |     await page.waitForTimeout(2000);   
  42 | 
  43 | })
  44 | 
  45 | 
```