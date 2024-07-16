import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";


const url = 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'
Given('I visit the OrangeHRM login page', () => {
  cy.visit(url)
})
/// LOGIN
When ('I enter valid credentials', () => {
    cy.wait(2000); 
    cy.get('input[name="username"]').type('Admin');
    cy.get('input[name="password"]').type('admin123');
});

And('I click on the login button', () => {
    cy.wait(2000); 
    cy.get('button[type="submit"]').click();
});

//Recruitment form
And('I navigate to the Recruitment option', () => {
    cy.wait(2000); 
    cy.get('.oxd-main-menu').contains('Recruitment').click();
    cy.url().should('include', '/recruitment');
});

And('I click on the Add button', () => {
    cy.wait(2000); 
    cy.get('button.oxd-button--medium').contains('Add').click();
    cy.url().should('include', '/addCandidate');
});

And('I fill out the recruitment form', () => {

    cy.wait(2000); 
    cy.get('input[name="firstName"]').type('Anderson'); //First Name 
    cy.get('input[name="middleName"]').type('Michael'); //Middle Name
    cy.get('input[name="lastName"]').type('Park'); //Last Name

    cy.get('.oxd-select-text-input').click(); //Vancancy
    cy.get('.oxd-select-option').contains('Payroll Administrator').click();

    cy.xpath('//div[3]//div[1]//div[1]//div[1]//div[2]//input[1]').type('test.mail@test.com'); //Email
    cy.get('body > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > form:nth-child(3) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)').type('666846767'); //Contact Number

    cy.get('input[type="file"]').selectFile('cypress/fixtures/cv_test.pdf', {force: true}); //Resume
    
    cy.xpath('//input[@placeholder="Enter comma seperated words..."]').type('QA test, Automation'); //Keywords
    cy.get('input[placeholder="yyyy-dd-mm"]').click(); //Date of Application
    cy.xpath('//li[@class="oxd-calendar-selector-year"]//p[1]').click(); //Select Year
    cy.xpath('//li[normalize-space()="2021"]').click();
    cy.xpath('//div[@class="oxd-calendar-selector-month-selected"]').click(); //Select Month
    cy.xpath('//li[normalize-space()="September"]').click();
    cy.xpath('//div[contains(text(),"18")]').click(); //Select Day 


    cy.xpath('//textarea[@placeholder="Type here"]').type('This is a test'); //Notes
    cy.xpath('//i[@class="oxd-icon bi-check oxd-checkbox-input-icon"]').click(); //Checkbox
});

And('I click on the Save button', () => {
    cy.wait(2000); 
    cy.get('button[type="submit"]').contains('Save').click();
});


And('I click on the Shortlist button, status:Application Initiated', () => {
    cy.wait(4000); 
    cy.xpath('//button[normalize-space()="Shortlist"]').click();
});

And('I complete the field Notes', () => {
    cy.wait(2000); 
    cy.get('textarea[placeholder="Type here"]').type('This is a test'); 
});

And('I click on the Save button', () => {
    cy.wait(2000); 
    cy.xpath('//button[@type="submit"]').click();
});

///
And('I click on the Schedule Interview button, status:Shortlisted', () => {
    cy.wait(6000); 
    cy.xpath('//button[normalize-space()="Schedule Interview"]').click();
});

And('I complete the Schedule Interview form', () => {
    cy.wait(3000); 
    
    cy.xpath('//body/div[@id="app"]/div[@class="oxd-layout"]/div[@class="oxd-layout-container"]/div[@class="oxd-layout-context"]/div[@class="orangehrm-background-container"]/div[@class="orangehrm-card-container"]/form[@class="oxd-form"]/div[2]/div[1]/div[1]/div[1]/div[2]/input[1]').type('Test Meeting'); //Interview Title
    cy.xpath('//input[@placeholder="Type for hints..."]').type('Joy  Smith'); //Interview Title
    cy.wait(4000);
    cy.xpath('//input[@placeholder="Type for hints..."]').type('{downarrow}').type('{enter}');
    cy.get('input[placeholder="yyyy-dd-mm"]').click(); //Date of Application
    cy.xpath('//li[@class="oxd-calendar-selector-year"]//p[1]').click(); //Select Year
    cy.xpath('//li[normalize-space()="2021"]').click();
    cy.xpath('//div[@class="oxd-calendar-selector-month-selected"]').click(); //Select Month
    cy.xpath('//li[normalize-space()="September"]').click();
    cy.xpath('//div[contains(text(),"18")]').click(); //Select Day 
    cy.xpath('//input[@placeholder="hh:mm"]').click(); //Select Hour 
    cy.xpath('//i[@class="oxd-icon bi-chevron-up oxd-icon-button__icon oxd-time-hour-input-up"]').click().click().click(); 
    cy.xpath('//i[@class="oxd-icon bi-chevron-up oxd-icon-button__icon oxd-time-minute-input-up"]').click().click().click();
    cy.xpath('//input[@name="pm"]').click();
    cy.xpath('//textarea[@placeholder="Type here"]').type('Test QA');
    cy.xpath('//button[@type="submit"]').click();
});

//////////////////////////////////////////////////////////////////

And('I click on the Mark Interview Passed button, status:Interview Scheduled', () => {
    cy.wait(2000); 
    cy.xpath('//button[normalize-space()="Mark Interview Passed"]').click();
});


And('I click on the Save button', () => {
    cy.wait(2000); 
    cy.xpath('//button[@type="submit"]').click();
});

///////////////////////////////////////////////////////////////////

And('I click on the Offer Job button', () => {
    cy.wait(2000); 
    cy.xpath('//button[normalize-space()="Offer Job"]').click();
});

And('I complete the notes field', () => {
    cy.wait(2000); 
    cy.xpath('//textarea[@placeholder="Type here"]').type('This is a test'); 
});

And('I click on the Save button OJ', () => {
    cy.wait(4000); 
    cy.xpath('//button[@type="submit"]').click();
});

/////////////////////////////////////////////////////////////////

And('I click on the Hire button JO', () => {
    cy.wait(4000); 
    cy.xpath('//button[normalize-space()="Hire"]').click();
});

////////////////////////////////////////////////////////////////

And('I complete the notes field HC', () => {
    cy.wait(2000); 
    cy.xpath('//textarea[@placeholder="Type here"]').type('This is a test'); 
});

And('I click on the save button HC', () => {
    cy.wait(4000); 
    cy.xpath('//button[@type="submit"]').click();
});

And('I navigate to the Recruitment option again', () => {
    cy.wait(4000); 
    cy.xpath('//span[@class="oxd-text oxd-text--span oxd-main-menu-item--name"][normalize-space()="Recruitment"]').click();
});

////////////////////////////////////////////////////////////////////
Then('Then Verify the information of the hired worker', () => {
    cy.wait(3000); 
    cy.xpath('//div[contains(text(),"Sales Representative")]').should('contain.text', 'Sales Representative'); //Vacancy
    cy.xpath('//div[contains(text(),"Anderson Michael Park")]').should('contain.text', 'Anderson Michael Park'); //Candidate
    cy.xpath('//div[contains(text(),"Rahul Patil")]').should('contain.text', 'Rahul Patil'); //Hiring Manager 
    cy.xpath('//div[@role="rowgroup"]//div[1]//div[1]//div[5]//div[1]').should('contain.text', '2021-18-09'); //Date of Application
    cy.xpath('//div[@role="rowgroup"]//div[1]//div[1]//div[6]//div[1]').should('contain.text', 'Hired'); //Status
});


