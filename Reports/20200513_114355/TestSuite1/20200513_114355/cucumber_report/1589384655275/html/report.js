$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("F:/Katalon Practice/CucumberTest/Include/features/Login.feature");
formatter.feature({
  "name": "Login feature",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Test Login with valid credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User navigates to login page",
  "keyword": "Given "
});
formatter.step({
  "name": "User enters \u003cusername\u003e and \u003cpassword\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "clicks on login button",
  "keyword": "And "
});
formatter.step({
  "name": "User is navigated to homepage",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "Admin",
        "hUKwJTbofgPU9eVlw/CnDQ\u003d\u003d"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Test Login with valid credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User navigates to login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.navigateToLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters Admin and hUKwJTbofgPU9eVlw/CnDQ\u003d\u003d",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.enterCredentials(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.loginButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User is navigated to homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.homepage()"
});
formatter.result({
  "status": "passed"
});
});