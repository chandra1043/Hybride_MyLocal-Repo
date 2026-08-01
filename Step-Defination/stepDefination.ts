import { Given, Then, When } from "@cucumber/cucumber";
import {commonutil} from "../Utils/CommonUtil"
import { login } from "../pages/login";
import configData from "../config/configData.json";
import {Assertutil} from  "../Utils/AssertUtil";
import { pimpage } from "../pages/addPim";
import {setDefaultTimeout} from "@cucumber/cucumber";

 setDefaultTimeout(50000);


let Login:login= new login();
let PimPage:pimpage =new pimpage();

Given('open the browser', async ()=> {
 

});


When('enter the username {string}', async (string)=> {
 await commonutil.entervalue(Login.getusername(),configData.username);
});

When('enter the password {string}', async (string)=> {
 await commonutil.entervalue(Login.getpassword(),configData.password);
});

When('click on login', async ()=> {
    await commonutil.clickonbutton(Login.getclickonlogin());
console.log("Getting the Success message after click on the "); 
});


Then('verify the welcome page', async ()=> {
   Assertutil.assertequals(await commonutil.welcometextelement(PimPage.getwelcomepage()),"Welcome malli@123");
   console.log("Verify Welcome page: Welcome chandra");

});

When('click on logout', async ()=> {

await commonutil.clickonbutton(PimPage.getsignoff());
});




