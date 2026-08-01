import{After, Before} from "@cucumber/cucumber";
import { commonutil } from "../Utils/CommonUtil";



Before(async()=>{
console.log("hero");
await commonutil.startbrowser();
console.log("hero2");
});

After (async ()=> {

    
});