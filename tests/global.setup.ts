import { TEST_DATA } from '../data/testData';
import {test, expect} from '../fixture/pageObjectFixture'
import { ConfigReader } from '../utils/configreader';

test('authenticateuser', async ({page, loginpage})=>{
     
     
     await loginpage.openApplication();
     await loginpage.doLogin();
     await expect(page).toHaveURL(TEST_DATA.urls.inventory);

     await page.context().storageState({path: 'auth.user.json'})

})