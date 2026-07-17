# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: SauceDemoTests.spec.ts >> ValidateAddToCart
- Location: tests\SauceDemoTests.spec.ts:12:5

# Error details

```
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for locator('#add-to-cart-sauce-labs-backpack')

```

# Test source

```ts
  1  | import { Page, Locator } from "@playwright/test";
  2  | import { HeaderComponent } from "../components/HeaderComponent";
  3  | import { BasePage } from "./basepage";
  4  | 
  5  | 
  6  | export class ProductListPage extends BasePage
  7  | {
  8  |    //page: Page;
  9  |    addToCartButton: Locator;
  10 |    cartBadgeIcon: Locator;
  11 |    cartIcon: Locator; 
  12 |    //header: HeaderComponent;
  13 | 
  14 |    constructor(page: Page)
  15 |    {
  16 |      super(page);
  17 |      this.page = page;
  18 |      //this.header = new HeaderComponent(page);
  19 |      this.addToCartButton = page.locator('#add-to-cart-sauce-labs-backpack');
  20 |      this.cartBadgeIcon = page.locator('.shopping_cart_badge');
  21 |      this.cartIcon = page.locator('.shopping_cart_link');
  22 | 
  23 |    }
  24 | 
  25 |    async clickAddtoCartbuton()
  26 |    {
> 27 |      await this.addToCartButton.click();
     |                                 ^ Error: locator.click: Target page, context or browser has been closed
  28 |           
  29 |    }
  30 | 
  31 |    async clickCartIcon()
  32 |    {
  33 |      await this.cartIcon.click();
  34 | 
  35 |    }
  36 | 
  37 | 
  38 | 
  39 | 
  40 | }
```