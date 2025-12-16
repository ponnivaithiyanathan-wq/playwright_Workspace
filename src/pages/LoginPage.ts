import { Page } from '@playwright/test';
import { HomePage } from './HomePage';

export class LoginPage {
    readonly page: Page;
    private readonly usernameInput = "#username";
    private readonly passwordInput = "#password";
    private readonly submitButton = "#Login";
    constructor(page: Page) {
        this.page = page;
    }

    async navigateToLoginPage() {
        await this.page.goto('/');
    }

    async fillUsername(username: string) {
        await this.page.fill(this.usernameInput, username);
    }

    async fillPassword(password: string) {
        await this.page.fill(this.passwordInput, password);
    }

    async login(): Promise<Page | null> {
        return await (async () => {
                await this.page.click(this.submitButton);
                await this.page.waitForLoadState('networkidle');
                const homePage = new HomePage(this.page);
              return homePage.page; 
        })();
    }

}