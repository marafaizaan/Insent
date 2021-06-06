const { I } = inject();
// Add in your custom step files



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
 


