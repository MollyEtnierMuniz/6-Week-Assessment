
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test('clicking Draw button displays div with id=choices', async () => {
    await driver.findElement(By.id('choices')).click();
    await driver.sleep(2000)
    expect('choices').toBe(true)
})

test("clicking 'Add to Duo' displays div with player-duo ID", async () => {
    await driver.findElement(By.id('draw')).click();
    await driver.sleep(2000)
    await driver.findElement(By.css('.bot-btn')).click();
    await driver.sleep(2000)
    const duoDiv = await driver.findElement (By.id ('player-duo')) 

    expect(duoDiv.isDisplayed()).toBeTruthy();
})
