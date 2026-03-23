Feature: Test suit for web contact Us page

  Scenario Outline: User is able to verify contact and delete contact
    Given Open web url <url>
    When Web app login using <userA>
    When I click on the second index link Contact Us
    Then contact_us page displays
    Then It redirects on the Contact Us screen
    Then Table is displaying on screen
    Then I Search data <subject>
    Then Added data <subject> is successfully displaying in table
    Then Link text <description> is displaying
    When I click On "Delete" icon
    Then Deleted record should not be visible in the list
    When I hover over the "Settings" icon
    When I click on the link text Logout

    Examples:
      | url      | userA | subject            | description                  |
      | loginUrl | admin | Automation_contact | This messages is for testing |

  Scenario Outline: User is able to verify Growth data added from mobile
    Given Open web url <url>
    When Web app login using <userA>
    When I click on the second index link Dashboard - All Patients
    When I populate data <patientName> in the "Search" field
    When I click on the link text <patientName>
    When I click on the link text Medical Record
    When Hover over link Tracker
    Then Tracker options should be visible under dropdown
      | Growth    |
      | Nutrition |
      | Diapering |
      | Sleep     |
    When I click on the link text Growth
    When I click on the button with text Growth Results
    When I populate data <heightInches> in the "Search" field
    # Then Growth details should be visible in the list with <heightcm> and <heightInches> and <weightPounds> and <weightOunce> and <weightkg> and <headCircumference_cm> and <headCircumference>
    Then Calculate Monthly Height Gain,Average Daily Weight Gain and Monthly Head Circumference Gain

    Examples:
      | patientName       | url      | userA                     | heightInches | weightPounds | weightOunce | headCircumference | startingModule | heightcm | weightkg | headCircumference_cm |
      | Patient_Auto_Test | loginUrl | providerLoginCrendentails | 20           | 8            | 10          | 15                | Growth         | 50.80    | 3.91     | 38.10                |

  Scenario Outline: User is able to verify Sleep data added from mobile
    When I click on the link text Medical Record
    When Hover over link Tracker
    When I click on the link text Sleep
    When Click on volume filter dropdown and select option <options>
    Then Tracker data <minutes> is displaying with graph screen

    Examples:
      | options      | minutes |
      | Total Volume | 20      |

  Scenario Outline: User is able to verify Nutrition data added from mobile
    When I click on the link text Medical Record
    When Hover over link Tracker
    When I click on the second index link Nutrition
    When Click on volume filter dropdown and select option Left Breast Feeding
    Then Tracker data <minutes> is displaying with graph screen
    When Click on volume filter dropdown and select option Right Breast Feeding
    Then Tracker data <minutes> is displaying with graph screen
    When Click on volume filter dropdown and select option Left & Right Breast Feeding
    Then Tracker data <DoubleMinutes> is displaying with graph screen
    When Click on volume filter dropdown and select option Bottle Feeding
    Then Tracker data <minutes> is displaying with graph screen
    When Click on volume filter dropdown and select option Bottle & Gavage Feeding
    Then Tracker data <DoubleMinutes> is displaying with graph screen
    When Click on volume filter dropdown and select option Gavage Feeding
    Then Tracker data <minutes> is displaying with graph screen
    # Then Verify that correct actual data is displaying for gola bottle and gavage when number of days are <days> and calories when one ounce value is <value> and calories is <calories>

    Examples:
      | minutes | DoubleMinutes | days | value | calories |
      | 20      | 40            | 7    | 29.57 | 25       |

  Scenario Outline: User is able to verify Diapering data added from mobile
    When I click on the link text Medical Record
    When Hover over link Tracker
    When I click on the link text Diapering
    When Click on diapering type filter dropdown and select option Pee
    Then Tracker data <times> is displaying with graph screen
    When Click on diapering type filter dropdown and select option Poo
    Then Tracker data <times> is displaying with graph screen
    When Click on diapering type filter dropdown and select option Both
    Then Tracker data <times> is displaying with graph screen

    Examples:
      | times |
      | 2     |
