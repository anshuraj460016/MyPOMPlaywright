import { TEST_DATA } from '../data/testData';
import {test, expect} from '../fixture/pageObjectFixture'

//Test Case1
test('ValidateLogin', async ({page, loginpage, productlistpage, cartpage })=>{

    await page.goto(TEST_DATA.urls.inventory);
    expect (await page).toHaveURL(TEST_DATA.urls.inventory);
    await page.waitForTimeout(2000);
})

//Test Case2
test('ValidateAddToCart' , async ({page, loginpage, productlistpage, cartpage})=>{

    await page.goto(TEST_DATA.urls.inventory);
    
    await productlistpage.waitForPageLoad();
    await productlistpage.clickAddtoCartbuton();

    await productlistpage.header.openandCloseBurger();

    expect (await productlistpage.cartBadgeIcon).toHaveText('1');
    await productlistpage.clickCartIcon();
    expect(await page).toHaveURL('https://www.saucedemo.com/cart.html');

    await page.waitForTimeout(2000);

})

test('ValidateCartItem', async ({page, loginpage, productlistpage, cartpage})=>{
    
    await page.goto(TEST_DATA.urls.inventory);
    
    await productlistpage.clickAddtoCartbuton();
    expect (await productlistpage.cartBadgeIcon).toHaveText('1');
    await productlistpage.clickCartIcon();
    expect(await page).toHaveURL('https://www.saucedemo.com/cart.html');

    expect (await cartpage.cartProduct).toHaveText('Sauce Labs Backpack');
    
    await cartpage.header.openandCloseBurger();

    await page.waitForTimeout(2000);   

})

