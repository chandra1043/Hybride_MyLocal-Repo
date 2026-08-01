import { expect } from "@playwright/test";


export class Assertutil{

  static async assertequals(act:string,exp:string):Promise<void>
  {
        if(act===exp)
           {
        console.log("Expected:" + exp +" is matched with Actual: " +act);
       }else{
        console.log("Expected:" + exp +" is not matched with Actual: " +act);
       }

    }
    static async assertTrue(actual:boolean)
{
    expect(actual).toBeTruthy();
}

static async assertFalse(actual:boolean)
{
    expect(actual).toBeFalsy();
}
    
}

