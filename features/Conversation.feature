Feature: Conversation Page - Administarion of Bot


@Conversation @All
Scenario: Login to the application with valid Credentials
Given I am successfully logged into the application
When I click on Conversation Icon
Then I create a successfull blank conversation

@ConversationTest @All
Scenario: Setting up coversation
Given I am successfully logged into the application
When I click on Conversation Icon
Then I create a successfull event with required data
