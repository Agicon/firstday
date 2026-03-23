Feature: Caregiver app Test cases for Contact Us Page

    Scenario Outline: Verify that user is able to submit new contact on contact Us page
        When login to app using <validLoginEmail>
        Then Select child <firstChild> from the child list
        Then Verify that user is on homepage
        When User click on "Hamburger" icon displaying in the top left corner
        When I click on Contact Us option
        Then I get navigated to Contact Us screen
        When I fill subject <subject> in from
        When I fill description <description> in the from
        When User click on the button with text Submit
        Then Validation message appears Thanks for contacting us, will check and get back to you soon.
        Examples:
            | validLoginEmail | firstChild        | subject            | description                  |
            | FHDCMobileLogin | Patient_Auto_Test | Automation_contact | This messages is for testing |


    Scenario Outline: Verify that "Caregiver" is able to add "Sleep" details of patient
        When User clicks on medical report module
        When I click on Tracker option
        When I click on Sleep option
        Then I get navigated to View Sleep Graph screen
        When User click on the right arrow button
        Then I get navigated to Add Manual Time screen
        When User click on the button with text Save
        Then Validation message appears Please select time before saving data
        When I click on Add Manual Time option
        Then I get navigated to Time screen
        When User click on the button with text Save
        Then Validation message appears Please enter minutes
        When I fill <minutes> data in "Minutes" field
        When User click on the button with text Save
        Then Added sleep data <startingModule> should displaying after save
        Then Added sleep data <minutes> should displaying after save
        When User click on the right arrow button
        When User click on the button with text Start
        When User click on the button with text Save
        Then Validation message appears Before saving the data, you need to stop the timer.
        When User click on the button with text Pause
        When User click on the button with text Save
        Then Added sleep data sec should displaying after save

        Examples:
            | minutes | startingModule |
            | 10      | Sleep          |


    Scenario Outline: Verify that "Caregiver" is able to add "Diapering" details of patient
        When I click on Diapering option
        Then I get navigated to View Diapering Graph screen
        When I click on Pee option
        Then I get navigated to Note screen
        When I fill <note> data in "Note" field
        When I fill <diaperWeight> data in "Diaper Weight" field
        When User click on the button with text Save
        Then Added sleep data Pee should displaying after save
        Then Added sleep data <note> should displaying after save
        Then Added sleep data <diaperWeight> should displaying after save
        When I click on Poo option
        Then I get navigated to Note screen
        When I fill <note> data in "Note" field
        When I fill <diaperWeight> data in "Diaper Weight" field
        When User click on the button with text Save
        Then Added sleep data Poo should displaying after save
        Then Added sleep data <note> should displaying after save
        Then Added sleep data <diaperWeight> should displaying after save
        When I click on Both option
        Then I get navigated to Note screen
        When I fill <note> data in "Note" field
        When I fill <diaperWeight> data in "Diaper Weight" field
        When User click on the button with text Save
        Then Added sleep data Both should displaying after save
        Then Added sleep data <note> should displaying after save
        Then Added sleep data <diaperWeight> should displaying after save
        Examples:
            | note                                | diaperWeight | startingModule |
            | Observe your baby’s little gestures | 50           | Diapering      |


    Scenario Outline: Verify the "Caregiver" is able to view and Edit "Growth" results added by the provider through web and Verify the "Caregiver" is able to delete "Growth" results added by the provider through web
        When I click on Growth option
        Then I get navigated to Edit Growth screen
        When User click on the button with text Edit Growth
        Then I get navigated to Growth List screen
        When I click on Edit option
        When I fill <updatedHeightInch> data in mobile "Height Inch" field
        When I fill <updatedWeightPound> data in mobile "Weight Pound" field
        When I fill <updateWeightOunce> data in mobile "Weight Ounce" field
        When I fill <updatedHeadCircumference> data in mobile "Head Circumference" field
        When User click on the button with text Save
        Then Added mobile growth details should be visible with Height inch <updatedHeightInch> and Weight Pound <updatedWeightPound> and Weight Ounce <updateWeightOunce> and Head Circumference <updatedHeadCircumference>
        When Delete the mobile record using "Delete" button
        When Delete the mobile record using "Delete" button
        Then Deleted mobile record should not be visible in the list
        Examples:
            | updatedHeightInch | updatedWeightPound | updateWeightOunce | updatedHeadCircumference | startingModule |
            | 24                | 10                 | 12                | 16                       | Growth         |


    Scenario Outline: Verify the validation message is displaying while mandatory fields is not filled for "Growth" results and Verify the "Caregiver" is able to Add "Growth" results with valid data
        Then I click on the back button
        When I click on Growth option
        Then I get navigated to Edit Growth screen
        When User click on the button with text Add Growth
        Then I get navigated to New Growth Result screen
        When User click on the button with text Create
        Then Validation message appears Date is required field
        When User selects date in "Date" field
        When User click on the form "OK" button
        When I fill <heightInch> data in mobile "Height Inch" field
        When I fill <weightPound> data in mobile "Weight Pound" field
        When I fill <weightOunce> data in mobile "Weight Ounce" field
        When I fill <headCircumference> data in mobile "Head Circumference" field
        When User click on the button with text Create
        Then Validation message appears Growth result added successfully!
        When User click on the button with text Edit Growth
        Then I get navigated to Growth List screen
        Then Added mobile growth details should be visible with Height inch <heightInch> and Weight Pound <weightPound> and Weight Ounce <weightOunce> and Head Circumference <headCircumference>
        Examples:
            | heightInch | weightPound | weightOunce | headCircumference | startingModule |
            | 20         | 8           | 10          | 15                | Growth         |


    Scenario Outline: Verify the "Caregiver" is able to "Edit" the added "Growth Results"
        When I click on Edit option
        When I fill <updatedHeightInch> data in mobile "Height Inch" field
        When I fill <updatedWeightPound> data in mobile "Weight Pound" field
        When I fill <updateWeightOunce> data in mobile "Weight Ounce" field
        When I fill <updatedHeadCircumference> data in mobile "Head Circumference" field
        When User click on the button with text Save
        Then Added mobile growth details should be visible with Height inch <updatedHeightInch> and Weight Pound <updatedWeightPound> and Weight Ounce <updateWeightOunce> and Head Circumference <updatedHeadCircumference>
        When Delete the mobile record using "Delete" button
        Then Deleted mobile record should not be visible in the list
        Examples:
            | updatedHeightInch | updatedWeightPound | updateWeightOunce | updatedHeadCircumference |
            | 24                | 10                 | 12                | 16                       |


    Scenario Outline: Verify the "Caregiver" is able to Add "Growth" results with valid data and created record should be visible on the web
        Then I click on the back button
        When I click on Growth option
        Then I get navigated to Edit Growth screen
        When User click on the button with text Add Growth
        Then I get navigated to New Growth Result screen
        When User selects date in "Date" field
        When User click on the form "OK" button
        When I fill <heightInch> data in mobile "Height Inch" field
        When I fill <weightPound> data in mobile "Weight Pound" field
        When I fill <weightOunce> data in mobile "Weight Ounce" field
        When I fill <headCircumference> data in mobile "Head Circumference" field
        When User click on the button with text Create
        Then Validation message appears Growth result added successfully!
        When User click on the button with text Edit Growth
        Then I get navigated to Growth List screen
        Then Added mobile growth details should be visible with Height inch <heightInch> and Weight Pound <weightPound> and Weight Ounce <weightOunce> and Head Circumference <headCircumference>
        Examples:
            | heightInch | weightPound | headCircumference | heightcm | weightkg | headCircumference_cm | weightOunce |
            | 26         | 7           | 13                | 66.04    | 3.37     | 33.02                | 10          |


    Scenario Outline: Verify the "Caregiver" is able to Add "Growth" results with valid data and created record should be visible on the web
        Then I click on the back button
        When I click on Growth option
        Then I get navigated to Edit Growth screen
        When User click on the button with text Add Growth
        Then I get navigated to New Growth Result screen
        When User selects past date in "Date" field for mobile
        When User click on the button with text OK
        When I fill <heightInch> data in mobile "Height Inch" field
        When I fill <weightPound> data in mobile "Weight Pound" field
        When I fill <weightOunce> data in mobile "Weight Ounce" field
        When I fill <headCircumference> data in mobile "Head Circumference" field
        When User click on the button with text Create
        Examples:
            | heightInch | weightPound | weightOunce | headCircumference | startingModule |
            | 20         | 8           | 10          | 15                | Growth         |


    Scenario Outline: Verify that "Caregiver" is able to add nutrition "Bottle" details of patient also Verify the "Caregiver" is able to add "New Breast Milk",Formula and fortification
        When I click on Nutrition option
        Then I get navigated to View Nutrition Graph screen
        When I click on Bottle option
        Then I get navigated to Select Milk screen
        When I click on Add Manual Time option
        Then I get navigated to Time screen
        When User click on the button with text Save
        Then Validation message appears Please enter minutes
        When I fill <minutes> data in "Minutes" field
        When User click on the button with text Save
        When I Click on select milk field
        When Click on link text Add New
        When Click on link text <milkType>
        When I Click on radio button <selectMilk>
        When User click on the button with text Save
        When I Click on select milk field
        When Click on link text Add New
        When Click on link text <milkType2>
        Then Enter value <formulaName> in name filed
        When User click on the button with text Save
        When I fill <selectMilk> data in "Select Milk" field
        When I fill <bottleVolumn> data in "Bottle Volumn" field
        When I click on Select Fortification filed
        When Click on link text Add New
        Then Enter value <fortification> in name filed
        When User click on the button with text Save
        When I fill <fortification> data in "Select Fortification" field
        When I fill <calories> data in mobile "Calories" field
        When I fill <note> data in "Note" field
        When User click on the button with text Save
        Then Added nutrition data Bottle should displaying after save
        Then Added nutrition data <minutes> should displaying after save
        Then Added nutrition data <bottleVolumn> should displaying after save
        Then Added nutrition data <calories> should displaying after save
        Then Added nutrition data <note> should displaying after save


        Examples:
            | validLoginEmail | firstChild        | minutes | selectMilk  | bottleVolumn | fortification | calories | note                                              | milkType    | milkType2 | formulaName       |
            | FHDCMobileLogin | Patient_Auto_Test | 10      | Mother Milk | 50           | Auto test     | 25       | Observe Your Baby’s Response while Bottle Feeding | Breast Milk | Formula   | Auto test formula |

    Scenario Outline: Verify that "Caregiver" is able to add nutrition "Bottle" details of patient when start and pause automatic timer
        When I click on Bottle option
        Then I get navigated to Select Milk screen
        When User click on the button with text Start
        When User click on the button with text Save
        Then Validation message appears Please stop timer
        When User click on the button with text Pause
        When I fill <selectMilk> data in "Select Milk" field
        When I fill <bottleVolumn> data in "Bottle Volumn" field
        When I fill <fortification> data in "Select Fortification" field
        When I fill <calories> data in mobile "Calories" field
        When I fill <note> data in "Note" field
        When User click on the button with text Save
        Then Added nutrition data Bottle should displaying after save
        Then Added nutrition data sec should displaying after save
        Then Added nutrition data <bottleVolumn> should displaying after save
        Then Added nutrition data <calories> should displaying after save
        Then Added nutrition data <note> should displaying after save

        Examples:
            | validLoginEmail | firstChild        | minutes | selectMilk        | bottleVolumn | fortification | calories | note                                              |
            | FHDCMobileLogin | Patient_Auto_Test | 10      | Auto test formula | 40           | Auto test     | 25       | Observe Your Baby’s Response while Bottle Feeding |

    Scenario Outline: Verify that "Caregiver" is able to add nutrition "Breast Feed" details of patient
        When I click on Left Breast option
        Then I get navigated to Add Manual Time screen
        When User click on the button with text Save
        Then Validation message appears Please select time before saving data
        When I click on Add Manual Time option
        Then I get navigated to Time screen
        When User click on the button with text Save
        Then Validation message appears Please enter minutes
        When I fill <minutes> data in "Minutes" field
        When User click on the button with text Save
        When I click on Right Breast option
        Then I get navigated to Add Manual Time screen
        When User click on the button with text Save
        Then Validation message appears Please select time before saving data
        When I click on Add Manual Time option
        Then I get navigated to Time screen
        When User click on the button with text Save
        Then Validation message appears Please enter minutes
        When I fill <minutes> data in "Minutes" field
        When User click on the button with text Save
        Then Added nutrition data <minutes> should displaying after save

        Examples:
            | minutes | startingModule |
            | 10      | Left Breast    |

    Scenario Outline: Verify that "Caregiver" is able to add nutrition "Breast Feed" details of patient with automatic timer
        When I click on Left Breast option
        Then I get navigated to Add Manual Time screen
        When User click on the button with text Start
        When User click on the button with text Save
        Then Validation message appears Before saving the data, you need to stop the timer.
        When User click on the button with text Pause
        When User click on the button with text Save
        When I click on Right Breast option
        When User click on the button with text Start
        When User click on the button with text Save
        Then Validation message appears Before saving the data, you need to stop the timer.
        When User click on the button with text Pause
        When User click on the button with text Save
        Then Added nutrition data sec should displaying after save

    Scenario Outline: Verify that "Caregiver" is able to add nutrition "Gavage Fed" details of patient
        When I click on Gavage Fed option
        Then I get navigated to Select Milk screen
        When I click on Add Manual Time option
        Then I get navigated to Time screen
        When User click on the button with text Save
        Then Validation message appears Please enter minutes
        When I fill <minutes> data in "Minutes" field
        When User click on the button with text Save
        When I fill <selectMilk> data in "Select Milk" field
        When I fill <bottleVolumn> data in "Bottle Volumn" field
        When I fill <fortification> data in "Select Fortification" field
        When I fill <calories> data in mobile "Calories" field
        When I fill <note> data in "Note" field
        When User click on the button with text Save
        Then Added nutrition data <minutes> should displaying after save
        Then Added nutrition data <selectMilk> should displaying after save
        Then Added nutrition data <bottleVolumn> should displaying after save
        Then Added nutrition data <fortification> should displaying after save
        Then Added nutrition data <calories> should displaying after save
        Then Added nutrition data <note> should displaying after save

        Examples:
            | minutes | selectMilk  | bottleVolumn | fortification | calories | note                                              | startingModule |
            | 10      | Mother Milk | 50           | Auto test     | 25       | Observe Your Baby’s Response while Bottle Feeding | Gavage Fed     |


    Scenario Outline: Verify that "Caregiver" is able to add nutrition "Gavage Fed" details of patient with automatic timer
        When I click on Gavage Fed option
        Then I get navigated to Select Milk screen
        When User click on the button with text Start
        When User click on the button with text Save
        Then Validation message appears Please stop timer
        When User click on the button with text Pause
        When User click on the button with text Save
        When I fill <selectMilk> data in "Select Milk" field
        When I fill <bottleVolumn> data in "Bottle Volumn" field
        When I fill <fortification> data in "Select Fortification" field
        When I fill <calories> data in mobile "Calories" field
        When I fill <note> data in "Note" field
        When User click on the button with text Save
        Then Added nutrition data sec should displaying after save
        Then Added nutrition data <selectMilk> should displaying after save
        Then Added nutrition data <bottleVolumn> should displaying after save
        Then Added nutrition data <fortification> should displaying after save
        Then Added nutrition data <calories> should displaying after save
        Then Added nutrition data <note> should displaying after save
        Examples:
            | minutes | selectMilk  | bottleVolumn | fortification | calories | note                                    | startingModule |
            | 10      | Mother Milk | 60           | Auto test     | 25       | Observe Your Baby’s Response Gavage fed | Gavage Fed     |
