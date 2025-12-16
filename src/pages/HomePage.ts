import { Page } from '@playwright/test';

export class HomePage {
    readonly page: Page;
    
    private readonly headerTxt = "#password";
   
    constructor(page: Page) {
        this.page = page;
    }

   
}