

export class pimpage{

    private by_welcomepage="//div[@id='option-menu-bar']/ul/li[1]";
    private by_logout="//div[@id='option-menu-bar']/ul/li[3]/a";


    getwelcomepage():string{
        return this.by_welcomepage;////div[@id='option-menu-bar']/ul/li[1]
    }
    getsignoff():string{
        return this.by_logout;////div[@id='option-menu-bar']/ul/li[3]/a
    }

}