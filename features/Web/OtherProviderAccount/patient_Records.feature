Feature: Test suit for login to assigned "Other provider" and verify the records of patient

  Scenario Outline: Verify the respiratory settings reflected on other provider's screen
    When Open web url <url>
    When Web app login using <other_Provider>
    Then provider/dashboard page displays
    When I populate data <patientName> in the "Search" field
    When I click on the link text <patientName>
    When I click on the second index link Order
    When I click on the second index link Respiratory
    Then patient/respiratorySettings page displays
    Then Table is displaying on screen
    Then Edit option is not avaliable on screen
    Then Add new option is not available on screen
    When I populate data <updatedMethodOption> in the "Search" field
    Then Respiratory "Room Air Concentrator method" details should be visible in the list with <updatedMethodOption> and <updatedFlow> and <additionalSettings> and <managingProvider>
    When I populate data <methodOption> in the "Search" field
    Then Respiratory "Bottle method" details should be visible in the list with <methodOption> and <flowRate> and <oxygen> and <managingProvider>
    When I click on the button with text View Flow Rate History

    Examples:
      | url      | other_Provider                      | patientName       | methodOption | flowRate | oxygen | managingProvider       | updatedMethodOption   | updatedFlow | additionalSettings    |
      | loginUrl | otherProviderForProviderStatusCheck | Patient_Auto_Test | Bottle | 5 | 90 | managing_auto_provider | Room Air Concentrator | 10 | Auto test respiratory |

  Scenario Outline: Verify the "diagnosis" data under other provider
    Then User refresh page
    When I click on the second index link Medical Record
    When I click on the second index link Diagnosis
    Then medical-records/diagnosis page displays
    Then Table is displaying on screen
    Then Edit option is not avaliable on screen
    Then Add new option is not available on screen
    When I populate data <description> in the "Search" field
    Then Added data <diagnosisType> is successfully displaying in table
    Then Link text <status> is displaying

    Examples:
      | diagnosisType | description                                            | status |
      | Twisted hair  | Get a medical consultation before taking this vaccine. | Active |

  Scenario Outline: Verify the "Medication" data under other provider
    When I click on the second index link Medical Record
    When I click on the second index link Medications
    Then medical-records/medications page displays
    Then Table is displaying on screen
    Then Edit option is not avaliable on screen
    Then Add new option is not available on screen
    When I populate data <updatedMedicationName> in the "Search" field
    Then Added data <updatedMedicationName> is successfully displaying in table
    Then Added data <updateCurrentDose> is successfully displaying in table
    Then Added data <updatedFrequency> is successfully displaying in table
    Then Link text <status> is displaying

    Examples:
      | updatedMedicationName  | updateCurrentDose | updatedMeasurement | updatedFrequency | updatedInterval | updatedAdditionalInformation                                   | status |
      | Update_Auto_Medication | 3                 | Milliliter         | Three Times      | Week            | Updated info. => Consult the doctor before using this medicine | Active |

  Scenario Outline: Verify the "Vaccination" data under other provider
    When I click on the second index link Medical Record
    When I click on the second index link Vaccinations
    Then medical-records/vaccinations page displays
    Then Table is displaying on screen
    Then Edit option is not avaliable on screen
    Then Add new option is not available on screen
    Then Header <vaccineName> is successfully displaying in table

    Examples:
      | vaccineName       |
      | Auto_Test_Vaccine |

  Scenario Outline: Verify the Documents>>Media record under other provider
    When I click on the second index link Documents
    When I click on the second index link Media
    Then media page displays
    Then Edit option is not avaliable on screen
    Then Add new option is not available on screen
    When I populate data <image> in the "Search" field
    Then Link text <image> is displaying
    Then Added data <fileType> is successfully displaying in table

    Examples:
      | image      | fileType |
      | Picture(2) | jpg      |

  Scenario Outline: Verify the Laboratory-CBC results under other provider
    When I click on the second index link Results
    When I click on the second index link Laboratory
    When I click on the second index link CBC
    Then laboratory_cbc page displays
    Then Table is displaying on screen
    Then Edit option is not avaliable on screen
    Then Add new option is not available on screen
    When I populate data <retic> in the "Search" field
    Then Added data <wbc> is successfully displaying in table
    Then Added data <hgb> is successfully displaying in table
    Then Added data <hct> is successfully displaying in table
    Then Added data <plts> is successfully displaying in table
    Then Added data <retic> is successfully displaying in table
    Then Added data <comment> is successfully displaying in table

    Examples:
      | patientName       | image      | comment             | wbc | hgb | hct | plts | retic |
      | Patient_Auto_Test | Picture(2) | this is your report | 12  | 7   | 9   | 205  | 10    |

  Scenario Outline: Verify the Laboratory-Chemistry results under other provider
    When I click on the second index link Results
    When I click on the second index link Laboratory
    When I click on the second index link Chemistry
    Then laboratory_chemistry page displays
    Then Edit option is not avaliable on screen
    Then Add new option is not available on screen
    When I populate data <Co2> in the "Search" field
    Then Added data <Na> is successfully displaying in table
    Then Added data <K> is successfully displaying in table
    Then Added data <Cl> is successfully displaying in table
    Then Added data <Co2> is successfully displaying in table
    Then Added data <BUN> is successfully displaying in table
    Then Added data <Cr> is successfully displaying in table
    Then Added data <Phos> is successfully displaying in table
    Then Added data <Mg> is successfully displaying in table

    Examples:
      | Na  | K   | Cl  | Co2 | BUN | Cr  | Glu | Ca  | Phos | Mg  |
      | 140 | 5.2 | 115 | 26  | 20  | 0.8 | 95  | 9.4 | 3.6  | 3.0 |

  Scenario Outline: Verify the Laboratory-Liver Function Tests results under other provider
    When I click on the second index link Results
    When I click on the second index link Laboratory
    When I click on the second index link Liver Function Tests
    Then /laboratory_chemistry/2 page displays
    Then Edit option is not avaliable on screen
    Then Add new option is not available on screen
    When I populate data <validDBili> in the "Search" field
    Then Added data <TBili> is successfully displaying in table
    Then Added data <AlkP> is successfully displaying in table
    Then Added data <GGT> is successfully displaying in table
    Then Added data <validDBili> is successfully displaying in table
    Then Added data <validAlb> is successfully displaying in table
    Then Added data <validAst> is successfully displaying in table
    Then Added data <comment> is successfully displaying in table

    Examples:
      | TBili | invalidTBiliC | invalidDBili | AlkP | invalidTprot | invalidAlb | invalidAst | invalidAlt | GGT | validTBiliC | validDBili | validTprot | validAlb | validAst | validAlt | comment                  | uploadImage |
      | 13    | 52            | 15           | 25   | 20           | 08         | 95         | 94         | 35  | 11          | 02         | 05         | 06       | 50       | 40       | This is the final report | Picture(1)  |

  Scenario Outline: Verify the Laboratory-Lipid Tests Result under other provider
    When I click on the second index link Results
    When I click on the second index link Laboratory
    When I click on the second index link Lipid Tests
    Then /laboratory_chemistry/3 page displays
    Then Edit option is not avaliable on screen
    Then Add new option is not available on screen
    When I populate data <validCholesterol> in the "Search" field
    Then Added data <validTrig> is successfully displaying in table
    Then Added data <validCholesterol> is successfully displaying in table
    Then Added data <validHDL> is successfully displaying in table
    Then Added data <validLDL> is successfully displaying in table
    Then Added data <comment> is successfully displaying in table

    Examples:
      | validTrig | invalidTrig | invalidCholesterol | validCholesterol | validHDL | invalidHDL | validLDL | invalidLDL | comment                    | uploadImage |
      | 60        | 5           | 15                 | 54               | 22       | 08         | 21       | 09         | This is the updated report | Picture(1)  |

  Scenario Outline: Verify the Laboratory-Endocrine Tests Result under other provider
    When I click on the second index link Results
    When I click on the second index link Laboratory
    When I click on the second index link Endocrine
    Then laboratory_endocrine page displays
    Then Edit option is not avaliable on screen
    Then Add new option is not available on screen
    When I populate data <validCortisol> in the "Search" field
    Then Added data <validTSH> is successfully displaying in table
    Then Added data <validT4> is successfully displaying in table
    Then Added data <validFreeT4> is successfully displaying in table
    Then Added data <validT3> is successfully displaying in table
    Then Added data <validCortisol> is successfully displaying in table
    Then Added data <validACTH> is successfully displaying in table
    Then Added data <comment> is successfully displaying in table

    Examples:
      | validTSH | invalidTSH | validT4 | invalidT4 | validFreeT4 | invalidFreeT4 | validT3 | invalidT3 | validCortisol | invalidCortisol | validACTH | invalidACTH | comment                  | uploadImage |
      | 03       | 11         | 13      | 29        | 01          | 55            | 198     | 300       | 46            | 57              | 41        | 55          | This is the final report | Picture(1)  |

  Scenario Outline: Verify the Laboratory-Coagulation Tests Result under other provider
    When I click on the second index link Results
    When I click on the second index link Laboratory
    When I click on the second index link Coagulation
    Then laboratory_coagulation page displays
    Then Edit option is not avaliable on screen
    Then Add new option is not available on screen
    When I populate data <validFibrinogen> in the "Search" field
    Then Added data <validPT> is successfully displaying in table
    Then Added data <validaPTT> is successfully displaying in table
    Then Added data <validTT> is successfully displaying in table
    Then Added data <validFibrinogen> is successfully displaying in table
    Then Added data <comment> is successfully displaying in table

    Examples:
      | validPT | invalidPT | validaPTT | invalidaPTT | validTT | invalidTT | validFibrinogen | invalidFibrinogen | comment                  | uploadImage |
      | 12      | 25        | 11        | 29          | 19      | 50        | 197             | 800               | This is the final report | Picture(1)  |

  Scenario Outline: Verify the Laboratory-Other Result under other provider
    When I click on the second index link Results
    When I click on the second index link Laboratory
    When I click on the second index link Others
    Then laboratory_other page displays
    Then Edit option is not avaliable on screen
    Then Add new option is not available on screen
    When I populate data <comment> in the "Search" field
    Then Added data <comment> is successfully displaying in table

    Examples:
      | comment                    | uploadImage |
      | This is the updated report | Picture(1)  |

  Scenario Outline: Verify the image>>XRay Function Tests results under other provider
    When I click on the second index link Results
    When I click on the second index link Imaging
    When I click on the second index link XRAY
    Then results/imaging_xray page displays
    Then Edit option is not avaliable on screen
    Then Add new option is not available on screen
    When I populate data <result> in the "Search" field
    When I populate data <type> in the "Search" field
    Then Added data <type> is successfully displaying in table
    Then Added discription <result> is displaying in table

    Examples:
      | imagingOption | type          | result                                                  |
      | XRAY          | Digital X-ray | No evidence of disease or injury, Everything is normal. |

  Scenario Outline: Verify the image>>CT Function Tests results under other provider
    When I click on the second index link Results
    When I click on the second index link Imaging
    When I click on the second index link CT
    Then /imaging_ct page displays
    Then Edit option is not avaliable on screen
    Then Add new option is not available on screen
    When I populate data <type> in the "Search" field
    Then Added data <type> is successfully displaying in table
    Then Added discription <result> is displaying in table

    Examples:
      | imagingOption | type       | result                                                  |
      | CT            | Digital CT | No evidence of disease or injury, Everything is normal. |

  Scenario Outline: Verify the image>>MRI Function Tests results under other provider
    When I click on the second index link Results
    When I click on the second index link Imaging
    When I click on the second index link MRI
    Then imaging_mri page displays
    Then Edit option is not avaliable on screen
    Then Add new option is not available on screen
    When I populate data <type> in the "Search" field
    Then Added data <type> is successfully displaying in table
    Then Added discription <result> is displaying in table

    Examples:
      | imagingOption | type        | result                                                  |
      | MRI           | Digital MRI | No evidence of disease or injury, Everything is normal. |

  Scenario Outline: Verify the image>>Ultrasound Function Tests results under other provider
    When I click on the second index link Results
    When I click on the second index link Imaging
    When I click on the second index link Ultrasound
    Then imaging_ultrasound page displays
    Then Edit option is not avaliable on screen
    Then Add new option is not available on screen
    When I populate data <type> in the "Search" field
    Then Added data <type> is successfully displaying in table
    Then Added discription <result> is displaying in table

    Examples:
      | imagingOption | type               | result                                                  |
      | Ultrasound    | Digital Ultrasound | No evidence of disease or injury, Everything is normal. |

  Scenario Outline: Verify the image>>Other Function Tests results under other provider
    When I click on the second index link Results
    When I click on the second index link Imaging
    When I click on the results>>other button
    Then imaging_other page displays
    Then Edit option is not avaliable on screen
    Then Add new option is not available on screen
    When I populate data <type> in the "Search" field
    Then Added data <type> is successfully displaying in table
    Then Added discription <result> is displaying in table

    Examples:
      | type         | result                                                  |
      | Other result | No evidence of disease or injury, Everything is normal. |

  Scenario Outline: Verify the Other Tests results under other provider
    When I click on the second index link Results
    When Under Other provider screen I click on the results>>other link
    Then other page displays
    Then Edit option is not avaliable on screen
    Then Add new option is not available on screen
    When I populate data <updatedType> in the "Search" field
    Then Details of results>>other module should be visible in the list with all fields <updatedType> and <updatedDescription> and <updatedComments>
    When I populate data <updatedType> in the "Search" field

    Examples:
      | type              | updatedType               | updatedDescription    | updatedComments       | uploadImage |
      | Auto Other result | Updated Auto Other result | Results>>othermodules | Everything is normal. | Picture(1)  |

  Scenario Outline: Verify the Documents>>Hospital record under other provider
    When I click on the second index link Documents
    When I click on the second index link Hospital Records
    Then hospitalrecords page displays
    Then Edit option is not avaliable on screen
    Then Add new option is not available on screen
    When I populate data <updatedDescription> in the "Search" field
    Then Added data <UpdatedHospital> is successfully displaying in table
    Then Added data <hospitalNote> is successfully displaying in table
    Then Added discription <updatedDescription> is displaying in table

    Examples:
      | UpdatedHospital | updatedImage | updatedDescription            | hospitalNote       |
      | Default         | Picture(1)   | Updated Auto Test description | Auto_Hospital_Note |

  Scenario Outline: Verify the Documents>>Other providers record under other provider
    When I click on the second index link Documents
    When I click on the second index link Other Providers Records
    Then otherproviders page displays
    Then Edit option is not avaliable on screen
    Then Add new option is not available on screen
    When I populate data <otherProvider> in the "Search" field
    Then Added data <otherProvider> is successfully displaying in table
    Then Added discription <updatedDescription> is displaying in table

    Examples:
      | otherProvider                         | image      | updatedDescription  |
      | Test_Auto_Other_Provider_For_Provider | Picture(1) | updated description |

  Scenario Outline: Verify the Documents>>Export records under other provider
    When I click on the second index link Documents
    When I click on the second index link Export Records
    Then sharerecords page displays
    Then Edit option is not avaliable on screen
    Then Add new option is not available on screen
    Then Button text Submit is displayed on screen

  Scenario Outline: Verify the Documents>>Appointment records under other provider
    When I click on the second index link Appointment
    Then appointments page displays
    Then Edit option is not avaliable on screen
    Then Add new option is not available on screen
    When I populate data <description> in the "Search" field
    Then Added data <otherProvider> is successfully displaying in table
    Then Added discription <description> is displaying in table

    Examples:
      | otherProvider                         | description                          | options   |
      | Test_Auto_Other_Provider_For_Provider | Description for next day appointment | Upcomming |

  Scenario Outline: Verify the Monitoring reflected on other provider's screen
    When I click on the second index link Order
    When I click on the second index link Monitoring
    Then monitoring-orders page displays
    Then Edit option is not avaliable on screen
    Then Add new option is not available on screen
    Then Added data <device_ECG> and <ECGduration> is successfully displaying in table after save
    Then Added data <device_O2> and <O2SaturationDuration> is successfully displaying in table after save
    Then Added data <device_temp> and <temperatureText> is successfully displaying in table after save

    Examples:
      | patientName       | device_ECG            | device_temp            | device_O2            | ECGduration       | O2SaturationDuration | temperatureDuration | temperatureText            |
      | Patient_Auto_Test | Auto_Company_test_ECG | Auto_Company_test_temp | Auto_Company_test_O2 | Continuous (24/7) | Overnight            | Custom Duration     | Temperature duration is 10 |

  Scenario Outline: Verify the Growth reflected on other provider's screen
    When I click on the second index link Tracker
    When I click on the second index link Growth
    Then growth page displays
    Then Edit option is not avaliable on screen
    Then Add new option is not available on screen
    When I click on the button with text Growth Results
    When I populate data <heightInches> in the "Search" field
    Then Growth details should be visible in the list with <heightcm> and <heightInches> and <weightPounds> and <weightPounds> and <weightkg> and <headCircumference_cm> and <headCircumference_inches>
    Then Calculate Monthly Height Gain,Average Daily Weight Gain and Monthly Head Circumference Gain

    Examples:
      | heightInches | weightPounds | headCircumference_inches | heightcm | weightkg | headCircumference_cm |
      | 26           | 7            | 13                       | 66.04    | 3.37     | 33.02                |

  Scenario Outline: Verify the Measurement reflected on other provider's screen
    When I click on the second index link Order
    When I click on the second index link Measurement
    Then measurement-orders page displays
    Then Edit option is not avaliable on screen
    Then Add new option is not available on screen
    Then Added data <updatedHeightFrequency> is successfully displaying in table
    Then Added data <updatedHeadFrequency> is successfully displaying in table

    Examples:
      | patientName       | weightFrequency | heightFrequency | headFrequency | updatedHeadFrequency | updatedHeightFrequency | updatedWeightFrequency |
      | Patient_Auto_Test | Daily           | Weekly          | Monthly       | Daily                | Monthly                | Weekly                 |

  Scenario Outline: Verify the Nutrition reflected on other provider's screen and 	Verify that the nutrition graph is displayed correctly when accessing the 'Orders > Nutrition' page, Also verify search and filter functionalities
    When I click on the second index link Order
    When I click on the link Nutrition having third index
    Then nutrition-orders page displays
    Then Edit option is not avaliable on screen
    Then Add new option is not available on screen
    Then Table should contain column name Start Date
    Then Table should contain column name Breastfeeding
    Then Table should contain column name Supplement
    Then Table should contain column name Composition
    Then Table should contain column name Volume (mL)
    Then Table should contain column name Feeding Goal (mL/kg)
    Then Table should contain column name Bottle %
    Then Table should contain column name Gavage %
    Then Table should contain column name Ad Lib
    When I populate data 50 % in the "Search" field
    Then Selected data Breastfeeding No Supplement No Composition <calories>
    Then Feeding goal <feedingGoal> Bottel% <validBottlePercentage> % Gavage 50% Ad Lib No is displaying in table
    Then Volume is displaying as the miltiplication of <feedingGoal> and <weightInKg>
    When I click on the button with text Chart
    Then Nutrition graph should display on screen
    Then User refresh page
    Then Table should contain column name Start Date
    Then Table should contain column name Breastfeeding
    Then Table should contain column name Supplement
    Then Table should contain column name Composition
    Then Table should contain column name Volume (mL)
    Then Table should contain column name Feeding Goal (mL/kg)
    Then Table should contain column name Bottle %
    Then Table should contain column name Gavage %
    Then Table should contain column name Ad Lib
    Then Table should contain column name Weight (kg)
    Then Table should contain column name Average Intake (mL)
    Then User refresh page
    Then Feeding Goal bottle % and Gavage goal % should display correct in summary card
    Then Calories and acutal feeding goal and actual bottle % and gavage % should displaying as <value>
    When I click on the second index link Dashboard
    When I populate data <patientName> in the "Search" field
    When I click on the link text <patientName>
    Then For Other provider Veirfy Todays PMA Age is displaying correct in Card
    Then For Other provider Verify Todays Weight and Latest AWDG is displaying correct in card

    Examples:
      | firstOption   | secondOption | feedingGoal | thirdOption | milkField   | fortificationField | fortificationName | calories | formula   | secondMilkType | thirdMilkType | fourthOption  | invalidBottlePercentage | validBottlePercentage | fifthOption | gavageDuration | invalidSupplementalGoal | supplementalGoal | invalidMaxSupplementalGoal | weightInKg | volumeValue | mode        | value | patientName       |
      | Breastfeeding | Feeding Goal | 40 | Composition | Mother Milk | Other | Auto test | 30 | Auto test | Donor Milk | Formula | Bottle/Gavage | 0 | 50 | Summary | 30 minutes | 0 | 25 | 5000 | 3.86 | 96.5 | Review view | 0 | Patient_Auto_Test |
