const {Builder, By, Key, util} = require("selenium-webdriver");
async function run(){
    //let driver = await new Builder().forBrowser("chrome").build();
    var d = new Date();
    if(d.getDay() != 6 && d.getDay() != 7){
        
        await driver.get("https://docs.google.com/forms/d/e/1FAIpQLScei7p8nnbC-nOtgLJCSSO6XxU8vVmPfG7dCG5fD4VxIQLohQ/viewform");
        await driver.findElement(By.xpath("//*[@id=\"mG61Hd\"]/div/div/div[2]/div[1]/div[2]/div/div[1]/div/div[1]/input")).sendKeys("hargun.sawhney2022@fairlawnsds.org");
        await driver.findElement(By.xpath("//*[@id=\"mG61Hd\"]/div/div/div[2]/div[2]/div/div[2]/div/div[1]/div/div[1]/input")).sendKeys("18711");
        await driver.findElement(By.xpath("//*[@id=\"mG61Hd\"]/div/div/div[2]/div[3]/div/div[2]/div/div[1]/div/div[1]/input")).sendKeys("Sawhney");
        await driver.findElement(By.xpath("//*[@id=\"mG61Hd\"]/div/div/div[2]/div[4]/div/div[2]/div/div[1]/div/div[1]/input")).sendKeys("Hargun");
        await driver.findElement(By.xpath("//*[@id=\"mG61Hd\"]/div/div/div[2]/div[5]/div/div[2]/div/span/div/div[3]/label/div/div[1]/div/div[3]/div")).click();
        await driver.findElement(By.xpath("//*[@id=\"mG61Hd\"]/div/div/div[3]/div[1]/div/div/span/span")).click();
        await driver.findElement(By.xpath("//*[@id=\"mG61Hd\"]/div/div/div[2]/div[3]/div/div[2]/div[2]/div/label/div/div[1]/div[2]")).click();
        
        await driver.findElement(By.xpath("//*[@id=\"mG61Hd\"]/div/div/div[3]/div[3]/div/div[2]/span/span")).click();
        console.log("Attendance Submitted for " + d.toDateString());
    }else{
        console.log("Attendance not submitted because today is either Saturday or Sunday");
    }
}
run();