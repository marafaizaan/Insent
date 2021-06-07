const { default: WebDriver } = require("webdriver");
const { getEnvironmentVars } = require("webdriver/build/utils");

const { I } = inject();
// Add in your custom step files

Given("I am successfully logged into the application",()=>{
  I.amOnPage("https://insentrecruitment3.insent.ai/login");
  I.wait(3);
  I.fillField('//input[@name="email"]','marafaizaan@gmail.com');
  I.fillField('//input[@name="password"]','Test@123');
  I.click("//span[contains(text(),'Login')]");
  I.wait(5); 
  
});


Given("I am navigated to the page", () => {

  I.amOnPage("https://insentrecruitment3.insent.ai/login");
  I.wait(3);
  I.see('Insent');

});

When("I enter the valid credentials", ()=> {

 I.fillField('//input[@name="email"]','marafaizaan@gmail.com');
 I.fillField('//input[@name="password"]','Test@123');
 I.click("//span[contains(text(),'Login')]");
 I.wait(5);

});

Then("I am logged in successfully", ()=> { 
I.seeElement("//div[.='Login Success!']");  
I.see("Inbox");
});

When("I enter the Invalid credentials", ()=> {

  I.fillField('//input[@name="email"]','marafaizaan@gmail.com');
  I.fillField('//input[@name="password"]','Test@123456');
  I.click("//span[contains(text(),'Login')]");
  I.wait(5);
 
 });

 Then("I see error message", ()=> {

  I.seeElement("//div[@class='Toastify__toast-container Toastify__toast-container--bottom-left sc-jbWsrJ ittdkc']");
  I.see('Incorrect email/password');

 });
 

When("I click on Conversation Icon",()=>{

  I.seeElement("//a[@href='/conversations']//img[@alt='Inbox']");
  //I.click("img[alt='Inbox'][src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAABYCAYAAABxlTA0AAAACXBIWXMAACxLAAAsSwGlPZapAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAgRSURBVHgB5Z3/dds2EMdPef2/zgRBJog6QdgN1AnMTpB0gtAT2J1AygROJ6A6gd0JKE9gb/AtYEC1wtzhF0GRdD/vIc6jQeB0Oh4OBxBe0ZkBsNY/TPmgi3Llwv085UmXg/t5r8uD+3m/Wq2eaCGsaGS0Qo3yal0+6lKRVeZQ9rr8rcs3rex7+j+iFVvp0mJ8Ol1qXRS9doy16vJFl0dMw/bVKtpZ0VSK7bPFTBQ92AfDDlrXZP1rLAeyA9Y/7v+mPLliuDgpil4GxTXFc9DlSvvoHS0VrdxPCVbV6vJ5iGXBuiDj23ewvje2X0VLwgiMuAGs06WBjSTGkGOjy22kHBtaAlrQNcLWY35f0ZlwX/gOYb7QnIF9PH0DmfndZ5oIp+hukUrWgl0GBG8xE18H65Z8bGlOOMv1MZnVSkRY8zXNASeo5BbM9YpmCsKD8bTuImAF5rqiBQD/AHhJU6E7v1u6co94lPw4yWeBzSm8CuUegRwzG0MaJVaXBFGQSZmuxvb3hemn+CAEOxOUnsqGzgVkv9tQYeCPUCoqDPyDdnHj4QSohc5HiR1h8xMSo4R/sFNsjpbGBrz1mmuKCoNwrDpKv67v23N+qcdOJeutKRG8JN+3fSU5C2oRT9uXATYnsnV9JA9Q8LuKFmN8sRCslxIBP5hsdblGfJqRo4OdBl/3lJMVBSA8pS43EUEh64V/pB6TZCU7WUOrMB1KWDN4n5RjvSGrGJOGEkmQN8s3v3GdKP2DS0hfUTqKpuMdpXMTWc+4pTyXAdk9KEoEdvCZavFTUQZIG3DTw1Xw7uEbZaLvvYkU1nwRW9ioQp3cv3bXdognO06HbGBl+gJvcTVlgji/Zr7U4KCE+OWg2Eed6+MC6cRN5WGthUNRJgiHYskDBsJfWvKA3Gu/Zdo0X6xvUTXsk8FPG7OFRfhxaygT+KfVhuyVY/BurXW/22X3KTQ8xP+2HmEG5zPgt6jsXAJ4Q3s8+X1ePllQSEMZwJ/mBAoE7AhPDhRl4JH94qROK9RpfQ1zs66aEoBNOZrHt4PMNtCGUdzGtXURqOt7ZDsnS0WJCO2968nYCfU+S41yN1QUCWxeIIaNp41+7NzBk5uFnG7skzQxQIQuIMf55toF1yhCjQaEimUt3C9ZBS8wRbmi/6AEBDlqpp402F5zjXJETzkx8IPCv6KxGatfoc1odwnZH6vTem9oenz+9tzvYqT0J+VpvvPFkoLfUmEgPxV74j/YgeweYq6tsdbOotOdq9VqT1b2Ppc4cW1GwYchHVF8xu0X7qJ7Y+jXnhzm2m+et4kUxfEnpcF97oOn/pXQxosVI9Kx+0C5MM20s0E4TNt6+ulQNkyrAve0zD1tqEJWchn+0V2MCgr2YVCUAeSEz7vAfdIg/ezGjIt4YO77QBnoR/pAvF8yGOWWWPr3xbZ7J0MOrF/X7T34bnK+mHNlzxGQUfB9bGeR+PzeBgOWxWEnDrWnylfKh/vM9xQH1+/H5389Jp79OGOEXeYIv3AzNF3JJZGinjivDiH7nooyQdyKxhYR/tLJF/OiS0MDwIBFB3h0+MaFQnvmvuzcqubniDq1Lh1elozWJwIrd81YUBcpy5AnrhLuj3IRToeyqwW/WvBIGSAhT1AYY4FZYwf4sC/J5YDP8G2PM7k9c89zXErpNDQNxgI/UR4Vc21PaXAW/PZZwS7UODAVcvYBHGg6HhLrPy9xET8zTJ0FcqHah9OOGuHRU5QAFrR1ysnbMW3l7GiqvO1AXopJnhzgRyWbdk1k0WD45j/TTt/f5Sq3FvqpKREIq/P9Sjuhw4oSgVWyUegWvcHHfbAW8Zi6m14byrXdIDNmRyHrPZEnqGApAhhl5zem3YAtTVxqygAxCnYVpUlC9hQ3INgUrxAYZXDucMh+kCpWwZIvHuV9Mpz5JRjXpzQI15QJQoNcr7JkVR1GeJ8M/FPT0AhAfv9vkBsEP2De+W5oxxBkSiD73cFPJ/gw17shRfJThnkdBxAB/McxDPb14BNSN6GbfBs8GloIAeXeUAGQu/QGOarISgadG/jzyHdUAMjh7Tp0o2/aOyjBfQ7g39bVoVBUBH6AewzdpODPKTQ0UyJk71Aw5ATvf4MDXLc05SLuaMeusHIl91D7buiwPOXWCCeS7lB4soSUN7SWplxYiw1teDliBusxJklc3y1XcRHKxcsOoC3i3scb7Sw3xKY756pcp0zlPoiJCFqkveRo6isaCUSkO1dOAGPSytPW6cmo5+J4+moORtY/xjx51VkpN6P9/bt+cZ5Tqs+Fse4GIx9wBPmJ/2Fu8BOlnfs7V/a6/KXL7kwH6JvFYMVc/3E7K5ZrwR1sZFDRGYE89WZntsYHm/nyLU17DEGI4598MHsPzKnZ3wbsoszG6UrKX7znZPrJ/ZmE9+7mkr7LDACKuW76i9lzcCA3uE6hzD6wwcCt8Ours8sI/7kR8zj5NBL4w9giGblcwXwLmotRMuRxqsPUx0zCfwxB1JkRU+ORv6Y5gPC7xYpmjMeCs3d0Fieg5NHyBSWA3wfPSsk+dzFra45Qcswm8fFB3Hk+2zkqGuGk2CXNAdjV6i5S0RXNiCUp2QjaIo7uqGzMIOpIUfLof7AvBGyoIyVPJPb08lcSD/SSTvUlehSVRZH/xcpaz+6+Tq5gA6y/bXSZx+NVjnoWCj7yChX9NCsFH3GKrijddcyOWSr4FNgg3sSY5t3fipbFbvYKPsVFEGtXFNnXpI5/NTE3ujjQOJgXxG/+BeiuGTMxecXnAAAAAElFTkSuQmCC']");
  I.click("//a[@href='/conversations']//img[@alt='Inbox']");
  I.wait(5);
  I.see('Create Conversation');
  I.click("//span[contains(text(),'Create Conversation')]");
  I.see("Create new conversation");
  I.see("Conversation name");
  I.see("Select template");
});

Then("I create a successfull blank conversation",() => {

  I.fillField('//input[@placeholder="Enter Conversation Name"]','Automation Demo');
  I.click("//span[@class='sc-hzDkRC dlvcUO']");
  I.wait(2);
  I.click("//span[1]//span[1]//span[1]//div[1]");  //Selecting Grow Subscriber
  I.click("button[type='submit'] span[class='css-t5emrf']");
  I.see("Show this conversation to the visitors when");
  
});

Then("I create a successfull event with required data",() => {

  I.fillField('//input[@placeholder="Enter Conversation Name"]','Happy Bot');
  I.wait(2);
  I.click("button[type='submit'] span[class='css-t5emrf']");
  I.see("Show this conversation to the visitors when");
  I.click("//div[starts-with(text(),'is')]");
  I.click("//div[contains(text(),'contains')]");
  I.fillField('input[name="flow.triggers.0.rules.0.value"]','web.app');
  I.click("//button[@class='sc-bstyWg jcrBFv']");
  I.click("//div[contains(text(),'Conversation flow')]");
  I.see("Greeting message");
  I.wait(5);

});