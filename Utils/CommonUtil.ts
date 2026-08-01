import { Browser, BrowserContext, chromium, firefox, Locator, Page, webkit } from "@playwright/test";
import configData from "../config/configData.json";
import  "../pages/login";
import "../Utils/AssertUtil";

//import  "../config/configData.josn";



export class commonutil
{
  static browsername: Browser; 
  static browser :Browser;
  static context: BrowserContext;
  static page: Page;
  static configData= configData;

   static async startbrowser():Promise<void>
   {
    try{
     const browsername = await this.configData.browser.toLowerCase();
     switch (browsername){ 

        case"chromium":this.browser =await chromium.launch({headless : false});
          break;
        case"firefox": this.browser = await firefox.launch({headless : false});
          break;
        case "webkit": this.browser = await webkit.launch({headless : false});
          break;
       
        }

        this.page = await this.browser.newPage();
          await this.page.goto(this.configData.url);
          await this.page.waitForLoadState();

    }catch (error : any) {
        console.log("unable to open the browser");

    }

   }

   static async findelement(locator:string):Promise<Locator>
   {
    let  element: Locator=null as any
    try{
      element=  await this.page.locator(locator);

    }catch(error : any){
        console.log("not identify the element")
    }
    return element;
   }
   

    static async entervalue(locator:string,value:string):Promise<void>
    {
        try{

       await (await this.findelement(locator)).fill(value);
        }catch (error : any)
        {

        }
    }
    static async clickonbutton(selector:string):Promise<void>
    {
      try{
        await (await this.findelement(selector)).click();

      }catch(error:any)
      {
        console.log("not click the login button");
      }

    }
    static async welcometextelement(selector:string):Promise<string>
    {
      let  text: string ="";
      try{
        let welcometext:string | null =await  (await this.findelement(selector)).textContent();
        if(welcometext!=null)
        {
         text =welcometext;
        }


      }catch(error : any){

        console.log("expected text not identified");
      }
      return text;
    }

}