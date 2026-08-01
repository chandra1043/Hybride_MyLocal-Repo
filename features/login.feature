
Feature: OrangeHRM Login





Scenario: Verify OrangeHRM Login
Given open the browser 


When enter the username "malli@123"
And enter the password "malli@123"
And click on login 
Then verify the welcome page
When click on logout

