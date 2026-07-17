import { Page, Locator } from "@playwright/test";
import { HeaderComponent } from "../components/HeaderComponent";
import { BasePage } from "./basepage";


export class ProductListPage extends BasePage
{
   //page: Page;
   addToCartButton: Locator;
   cartBadgeIcon: Locator;
   cartIcon: Locator; 
   //header: HeaderComponent;

   constructor(page: Page)
   {
     super(page);
     this.page = page;
     //this.header = new HeaderComponent(page);
     this.addToCartButton = page.locator('#add-to-cart-sauce-labs-backpack');
     this.cartBadgeIcon = page.locator('.shopping_cart_badge');
     this.cartIcon = page.locator('.shopping_cart_link');

   }

   async clickAddtoCartbuton()
   {
     await this.addToCartButton.click();
          
   }

   async clickCartIcon()
   {
     await this.cartIcon.click();

   }




}