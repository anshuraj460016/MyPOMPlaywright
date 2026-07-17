# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: SauceDemoTests.spec.ts >> ValidateLogin
- Location: tests\SauceDemoTests.spec.ts:4:5

# Error details

```
Error: expect(page).toHaveURL(expected) failed

Expected: "/inventory.html"
Received: "about:blank"

Call log:
  - Expect "toHaveURL" with timeout 5000ms
    8 × unexpected value "about:blank"

```

# Test source

```ts
  1  | import { TEST_DATA } from '../data/testData';
  2  | import {test, expect} from '../fixture/pageObjectFixture'
  3  | 
  4  | test('ValidateLogin', async ({page, loginpage, productlistpage, cartpage })=>{
  5  | 
  6  |     //await page.goto(TEST_DATA.urls.inventory);
  7  |    // await page.goto('/inventory.html');
> 8  |     expect (await page).toHaveURL(TEST_DATA.urls.inventory);
     |                         ^ Error: expect(page).toHaveURL(expected) failed
  9  |     await page.waitForTimeout(2000);
  10 | })
  11 | 
  12 | test('ValidateAddToCart' , async ({page, loginpage, productlistpage, cartpage})=>{
  13 | 
  14 |    // await page.goto(TEST_DATA.urls.inventory);
  15 |     
  16 |     await productlistpage.waitForPageLoad();
  17 |     await productlistpage.clickAddtoCartbuton();
  18 | 
  19 |     await productlistpage.header.openandCloseBurger();
  20 | 
  21 |     expect (await productlistpage.cartBadgeIcon).toHaveText('1');
  22 |     await productlistpage.clickCartIcon();
  23 |     expect(await page).toHaveURL('https://www.saucedemo.com/cart.html');
  24 | 
  25 |     await page.waitForTimeout(2000);
  26 | 
  27 | })
  28 | 
  29 | test('ValidateCartItem', async ({page, loginpage, productlistpage, cartpage})=>{
  30 |     
  31 |     await page.goto(TEST_DATA.urls.inventory);
  32 |     
  33 |     await productlistpage.clickAddtoCartbuton();
  34 |     expect (await productlistpage.cartBadgeIcon).toHaveText('1');
  35 |     await productlistpage.clickCartIcon();
  36 |     expect(await page).toHaveURL('https://www.saucedemo.com/cart.html');
  37 | 
  38 |     expect (await cartpage.cartProduct).toHaveText('Sauce Labs Backpack');
  39 |     
  40 |     await cartpage.header.openandCloseBurger();
  41 | 
  42 |     await page.waitForTimeout(2000);   
  43 | 
  44 | })
  45 | 
  46 | 
```