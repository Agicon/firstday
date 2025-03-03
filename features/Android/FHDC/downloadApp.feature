Feature: Test case for download and install latest build

  Scenario Outline: User installe or open the latest build and login to app
    Given User install the latest build for <app> app

    Examples:
      | app   | 
      | FHDC Beta |
