Feature: Insent bot login
  
  @Login @All
  Scenario: Login to the application with valid Credentials
    Given I am navigated to the page
    When I enter the valid credentials
    Then I am logged in successfully

@Login @All
Scenario: Login to the application with Invalid Credentials
    Given I am navigated to the page
    When I enter the Invalid credentials
    Then I see error message