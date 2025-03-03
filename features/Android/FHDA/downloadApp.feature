Feature: Download and install latest build of mobile app

  Scenario Outline: User installe or open the latest build and login to app
    Given User install the latest build for <app> app

    Examples:
      | app   | 
      | FHDA Beta | 
