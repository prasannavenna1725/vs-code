import { test, expect } from '@playwright/test';

test.only('demo api test', async ({ page }) => {
    const response = await request.get('https://reqres.in/api/users/2'  , {
        headers: {
            "x-api-key": 'reqres_e6f32fece630400ca1b5cf7550c3fce9'
        }
    })

    expect(response,status()).toBe(200);
    const test = await response.text();
    expect(text).toContain('janet');
    console.log(await response.json());
})