Feature: Recruitment Process

  I want to complete the Recruitment form. 
  
  @focus
  Scenario: Successfully complete the Recruitment process
    /****LOGIN***/
    Given I visit the OrangeHRM login page
    When I enter valid credentials
    And I click on the login button
   
    And I navigate to the Recruitment option
    And I click on the Add button
    And I fill out the recruitment form
    And I click on the Save button
    
    And I click on the Shortlist button, status:Application Initiated
    And I complete the field Notes
    And I click on the Save button
    
    And I click on the Schedule Interview button, status:Shortlisted
    And I complete the Schedule Interview form

    And I click on the Mark Interview Passed button, status:Interview Scheduled
    And I click on the Save button

    And I click on the Offer Job button 
    And I complete the notes field 
    And I click on the Save button OJ

    And I click on the Hire button JO

    And I complete the notes field HC
    And I click on the save button HC
    And I navigate to the Recruitment option again

    Then Verify the information of the hired worker