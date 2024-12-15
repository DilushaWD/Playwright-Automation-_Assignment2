import { type Locator, type Page } from "@playwright/test";

export class HomePage{
    //variables
    readonly page:Page;
    //await page.getByRole('link', { name: 'Get started' }).click();
    readonly getStatedButton: Locator;

    //constructor
    constructor (page:Page) {
        this.page = page;
        this.getStatedButton = page.getByRole('link', { name: 'Get started' });
    }

    //methods
    async 

}

export default HomePage;