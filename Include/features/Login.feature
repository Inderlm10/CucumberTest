Feature: Login feature

  Scenario Outline: Test Login with valid credentials
    Given User navigates to login page
    When User enters <username> and <password>
    And clicks on login button
    Then User is navigated to homepage

    Examples:
    	| username | password|
    	| Admin			 | hUKwJTbofgPU9eVlw/CnDQ==		 |
    	
    	