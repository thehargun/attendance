const {Builder, By, Key, util} = require("selenium-webdriver");
async function run(){
    let driver = await new Builder().forBrowser("chrome").build();
    var wait = Math.floor(Math.random() * 1000);
    console.log("Waiting " + (wait+900) + " seconds");
    await new Promise(resolve => setTimeout(resolve, ((wait*1000) + 900000)));
    await driver.get("https://docs.google.com/forms/d/e/1FAIpQLScei7p8nnbC-nOtgLJCSSO6XxU8vVmPfG7dCG5fD4VxIQLohQ/viewform");
    await driver.findElement(By.xpath("//*[@id=\"mG61Hd\"]/div/div/div[2]/div[1]/div[2]/div/div[1]/div/div[1]/input")).sendKeys("hargun.sawhney2022@fairlawnsds.org");
    var month = new Date().getMonth() + 1;
    var day = new Date().getDate();
    var year = new Date().getFullYear();
    await driver.findElement(By.xpath("//*[@id=\"mG61Hd\"]/div/div/div[2]/div[2]/div/div[2]/div/div[2]/div[1]/div/div[1]/input")).sendKeys(month + "-" + day + "-" + year);
    await driver.findElement(By.xpath("//*[@id=\"mG61Hd\"]/div/div/div[2]/div[3]/div/div[2]/div/div[1]/div/div[1]/input")).sendKeys("18711");
    await driver.findElement(By.xpath("//*[@id=\"mG61Hd\"]/div/div/div[2]/div[4]/div/div[2]/div/div[1]/div/div[1]/input")).sendKeys("Sawhney");
    await driver.findElement(By.xpath("//*[@id=\"mG61Hd\"]/div/div/div[2]/div[5]/div/div[2]/div/div[1]/div/div[1]/input")).sendKeys("Hargun");
    await driver.findElement(By.xpath("//*[@id=\"mG61Hd\"]/div/div/div[2]/div[6]/div/div[2]/div/div[1]/div/div[1]/input")).sendKeys("A218");
    await driver.findElement(By.xpath("//*[@id=\"mG61Hd\"]/div/div/div[2]/div[7]/div/div[2]")).click();
    await new Promise(resolve => setTimeout(resolve, 3000));
    await driver.findElement(By.xpath("//*[@id=\"mG61Hd\"]/div/div/div[2]/div[7]/div/div[2]/div[2]/div[5]/span")).click();
    await driver.findElement(By.xpath("//*[@id=\"mG61Hd\"]/div/div/div[3]/div[1]/div/div/span/span")).click();
    await driver.findElement(By.xpath("//*[@id=\"mG61Hd\"]/div/div/div[2]/div[3]/div/div[2]/div[2]/div/label/div/div[1]")).click();
    await driver.findElement(By.xpath("//*[@id=\"mG61Hd\"]/div/div/div[3]/div[1]/div/div[2]/span")).click();
    console.log("Attendance for " + month + "-" + day + "-" + year + " submitted. Check back later.");
}
run();