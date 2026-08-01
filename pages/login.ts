import {} from "@cucumber/cucumber";






export class login{


    private by_username="//input[@name='txtUserName']";
    private by_password="//input[@name='txtPassword']";
    private by_clickonlogin="//input[@name='Submit']";

    



    getusername():string{
        return this.by_username;//username
    }
    getpassword():string{
        return this.by_password;//input[@name='txtPassword']
    }
    getclickonlogin():string{
        return this.by_clickonlogin;//input[@name='Submit']
    }

}
