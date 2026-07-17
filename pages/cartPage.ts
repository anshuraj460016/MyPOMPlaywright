import { Page, Locator } from "@playwright/test";
import { HeaderComponent } from "../components/HeaderComponent";
import { BasePage } from "./basepage";


export class CartPage extends BasePage
{
     page: Page;
     cartProduct: Locator;
     //header: HeaderComponent;
     

     constructor(page: Page)
     {
      super(page);
       this.page = page;
       //this.header = new HeaderComponent(page);
       this.cartProduct = page.locator('#item_4_title_link');
    }


}