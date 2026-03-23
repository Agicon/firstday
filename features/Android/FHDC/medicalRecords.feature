Feature: Test cases for Verification of all records

  Scenario Outline: Verify "Medication" data under medical records
    When login to app using <validLoginEmail>
    Then Select child <firstChild> from the child list
    Then Verify that user is on homepage
    When User clicks on medical report module
    # Then For android device, verify all the features inside medical report
    Then User click on the medication tab
    Then Details of medication should be visible in the list with <medicationName> and <currentDose_And_measurement> and <frequency> and <interval>
    When User click on the button with text All
    Then Details of medication should be visible in the list with <medicationName> and <currentDose_And_measurement> and <frequency> and <interval>

    Examples:
      | validLoginEmail | invalidPassword | invalidEmail       | firstChild        | medicationName         | currentDose_And_measurement | frequency   | additionalInformation                         | interval | status |
      | FHDCMobileLogin | 123450000 | testuser@gmail.com | Patient_Auto_Test | Update_Auto_Medication | 3 (Milliliter) | Three Times | Consult the doctor before using this medicine | Week | Active |

  Scenario Outline: Verify "Diagnosis" data under medical records
    Then I click on the back button
    When I click on Diagnosis option
    Then Added record data <diagnosisType> text is displaying on mobile screen
    Then Added record data <description> text is displaying on mobile screen
    When User click on the button with text All
    Then Added record data <diagnosisType> text is displaying on mobile screen
    Then Added record data <description> text is displaying on mobile screen

    Examples:
      | diagnosisType | description                                            | status |
      | Twisted hair  | Get a medical consultation before taking this vaccine. | Active |

  Scenario Outline: Verify "Vaccination" data under medical records
    Then I click on the back button
    When I click on Vaccination option
    Then Added record data <diagnosisType> text is displaying on mobile screen
    Then Added record data <description> text is displaying on mobile screen

    Examples:
      | diagnosisType     | description                                   |
      | Auto_Test_Vaccine | Consult the doctor before using this vaccine. |

  Scenario Outline: Verify "Media" data under medical records
    Then I click on the back button
    When I click on Media option
    Then User click on allow permission button
    Then Added record data <image> text is displaying on mobile screen
    Then Added record data <description> text is displaying on mobile screen

    Examples:
      | image          | description           |
      | Picture(2).jpg | Auto Test description |

  Scenario Outline: Verify "Hospital Records" data under medical records
    Then I click on the back button
    When I click on Documents option
    When I click on Hospital Records option
    Then Added record data <UpdatedHospital> text is displaying on mobile screen
    Then Added record data <updatedDescription> text is displaying on mobile screen
    Then Added record data <hospitalNote> text is displaying on mobile screen
    Then I click on the back button

    Examples:
      | UpdatedHospital | updatedDescription            | hospitalNote       |
      | Default         | Updated Auto Test description | Auto_Hospital_Note |

  Scenario Outline: Verify "Imaging-SubModules" data under medical records
    Then I click on the back button
    When I click on Results option
    When I click on Imaging option
    Then Added record data <XRay_Type> text is displaying on mobile screen
    Then Added record data <result> text is displaying on mobile screen
    When I click on CT option
    Then Added record data <CT_Type> text is displaying on mobile screen
    Then Added record data <result> text is displaying on mobile screen
    When I click on MRI option
    Then Added record data <MRI_Type> text is displaying on mobile screen
    Then Added record data <result> text is displaying on mobile screen
    When I click on Ultrasound option
    Then Added record data <ultrasound_Type> text is displaying on mobile screen
    Then Added record data <result> text is displaying on mobile screen
    When I click on Other option
    Then Added record data <other_Type> text is displaying on mobile screen
    Then Added record data <result> text is displaying on mobile screen
    Then I click on the back button

    Examples:
      | XRay_Type     | CT_Type    | MRI_Type    | ultrasound_Type    | other_Type   | result                                                  |
      | Digital X-ray | Digital CT | Digital MRI | Digital Ultrasound | Other result | No evidence of disease or injury, Everything is normal. |

  Scenario Outline: Verify "Laboratory-CBC" data under medical records
    Then I click on the back button
    When I click on Results option
    When I click on Laboratory option
    Then Added record data <wbc> text is displaying on mobile screen
    Then Added record data <hgb> text is displaying on mobile screen
    Then Added record data <hct> text is displaying on mobile screen
    Then Added record data <plts> text is displaying on mobile screen
    Then Added record data <retic> text is displaying on mobile screen
    When I click on White Blood Cell Count option
    Then Result chart shuld display on screen
    When I click on Hemoglobin option
    Then Result chart shuld display on screen
    When I click on Hematocrit option
    Then Result chart shuld display on screen
    When I click on Platelets option
    Then Result chart shuld display on screen
    When I click on Reticulocyte Count option
    Then Result chart shuld display on screen

    Examples:
      | patientName       | image      | comment             | wbc | hgb | hct | plts | retic |
      | Patient_Auto_Test | Picture(2) | this is your report | 12  | 7   | 9   | 205  | 10    |

  Scenario Outline: Verify "Laboratory-Chemistry" data under medical records
    When I click on Chemistry option
    Then Added record data <Na> text is displaying on mobile screen
    Then Added record data <K> text is displaying on mobile screen
    Then Added record data <Cl> text is displaying on mobile screen
    Then Added record data <Co2> text is displaying on mobile screen
    Then Added record data <BUN> text is displaying on mobile screen
    Then Added record data <Cr> text is displaying on mobile screen
    Then Added record data <Glu> text is displaying on mobile screen
    Then Added record data <Ca> text is displaying on mobile screen
    Then Added record data <Phos> text is displaying on mobile screen
    Then Added record data <Mg> text is displaying on mobile screen
    When I click on Sodium option
    Then Result chart shuld display on screen
    When I click on Chloride option
    Then Result chart shuld display on screen
    When I click on Carbon dioxide option
    Then Result chart shuld display on screen
    When I click on Blood urea nitrogen option
    Then Result chart shuld display on screen
    When I click on Phosphorus option
    Then Result chart shuld display on screen
    When I click on Potassium option
    Then Result chart shuld display on screen
    When I click on Creatinine option
    Then Result chart shuld display on screen
    When I click on Calcium option
    Then Result chart shuld display on screen
    When I click on Magnesium option
    Then Result chart shuld display on screen
    When I click on Glucose option
    Then Result chart shuld display on screen

    Examples:
      | Na  | K   | Cl  | Co2 | BUN | Cr  | Glu | Ca  | Phos | Mg  |
      | 140 | 5.2 | 115 | 26  | 20  | 0.8 | 95  | 9.4 | 3.6  | 3.0 |

  Scenario Outline: Verify "Laboratory-Liver Function Tests" data under medical records
    When I click on drop down arrow and select option <optionData>
    Then Added record data <TBili> text is displaying on mobile screen
    Then Added record data <AlkP> text is displaying on mobile screen
    Then Added record data <GGT> text is displaying on mobile screen
    Then Added record data <validTBiliC> text is displaying on mobile screen
    Then Added record data <validDBili> text is displaying on mobile screen
    Then Added record data <validTprot> text is displaying on mobile screen
    Then Added record data <validAlb> text is displaying on mobile screen
    Then Added record data <validAst> text is displaying on mobile screen
    Then Added record data <validAlt> text is displaying on mobile screen
    Then Added record data <comment> text is displaying on mobile screen
    When I click on Total Bilirubin (Serum) option
    Then Result chart shuld display on screen
    When I click on Total Bilirubin (Cutaneous) option
    Then Result chart shuld display on screen
    When I click on Direct Bilirubin option
    Then Result chart shuld display on screen
    When I click on Alkaline Phosphatase option
    Then Result chart shuld display on screen
    When I click on Total Protein option
    Then Result chart shuld display on screen
    When I click on Albumin option
    Then Result chart shuld display on screen
    When I click on Aspartate aminotransferase option
    Then Result chart shuld display on screen
    When I click on Gamma-glutamyl transferase option
    Then Result chart shuld display on screen
    When I click on Alanine aminotransferase option
    Then Result chart shuld display on screen

    Examples:
      | TBili | AlkP | GGT | validTBiliC | validDBili | validTprot | validAlb | validAst | validAlt | comment                  | uploadImage | optionData           |
      | 13    | 25   | 35  | 11          | 02         | 05         | 06       | 50       | 40       | This is the final report | Picture(1)  | Liver Function Tests |

  Scenario Outline: Verify "Laboratory-Lipid test" data under medical records
    When I click on drop down arrow and select option <optionData>
    Then Added record data <validTrig> text is displaying on mobile screen
    Then Added record data <validCholesterol> text is displaying on mobile screen
    Then Added record data <validHDL> text is displaying on mobile screen
    Then Added record data <validLDL> text is displaying on mobile screen
    Then Added record data <comment> text is displaying on mobile screen
    When I click on Triglycerides option
    Then Result chart shuld display on screen
    When I click on Cholesterol option
    Then Result chart shuld display on screen
    When I click on High-density lipoprotein option
    Then Result chart shuld display on screen
    When I click on Low-density lipoprotein option
    Then Result chart shuld display on screen

    Examples:
      | validTrig | validCholesterol | validHDL | invalidHDL | validLDL | invalidLDL | comment                    | uploadImage | optionData  |
      | 60        | 54               | 22       | 08         | 21       | 09         | This is the updated report | Picture(1)  | Lipid Tests |

  Scenario Outline: Verify "Laboratory-Endocrine" data under medical records
    When I click on Endocrine option
    Then Added record data <validTSH> text is displaying on mobile screen
    Then Added record data <validT4> text is displaying on mobile screen
    Then Added record data <validFreeT4> text is displaying on mobile screen
    Then Added record data <validT3> text is displaying on mobile screen
    Then Added record data <validCortisol> text is displaying on mobile screen
    Then Added record data <validACTH> text is displaying on mobile screen
    Then Added record data <comment> text is displaying on mobile screen
    When I click on Thyroid stimulating hormone option
    Then Result chart shuld display on screen
    When I click on Triiodothyronine (T4) option
    Then Result chart shuld display on screen
    When I click on free_t4 option
    Then Result chart shuld display on screen
    When I click on Thyroxine (T3) option
    Then Result chart shuld display on screen
    When I click on Cortisol option
    Then Result chart shuld display on screen
    When I click on Adrenocorticotropic hormone option
    Then Result chart shuld display on screen

    Examples:
      | validTSH | invalidTSH | validT4 | invalidT4 | validFreeT4 | invalidFreeT4 | validT3 | invalidT3 | validCortisol | invalidCortisol | validACTH | invalidACTH | comment                  | uploadImage |
      | 03       | 11         | 13      | 29        | 01          | 55            | 198     | 300       | 46            | 57              | 41        | 55          | This is the final report | Picture(1)  |

  Scenario Outline: Verify "Laboratory-Coagulation" data under medical records
    When I click on Coagulation option
    Then Added record data <validPT> text is displaying on mobile screen
    Then Added record data <validaPTT> text is displaying on mobile screen
    Then Added record data <validTT> text is displaying on mobile screen
    Then Added record data <validFibrinogen> text is displaying on mobile screen
    Then Added record data <comment> text is displaying on mobile screen
    When I click on Prothrombin time (PT) option
    Then Result chart shuld display on screen
    When I click on aPTT option
    Then Result chart shuld display on screen
    When I click on Thrombin Time option
    Then Result chart shuld display on screen
    When I click on Fibrinogen option
    Then Result chart shuld display on screen

    Examples:
      | validPT | invalidPT | validaPTT | invalidaPTT | validTT | invalidTT | validFibrinogen | invalidFibrinogen | comment                  | uploadImage |
      | 12      | 25        | 11        | 29          | 19      | 50        | 197             | 800               | This is the final report | Picture(1)  |

  Scenario Outline: Verify "Laboratory-Other" data under medical records
    When I click on Other option
    Then Added record data <comment> text is displaying on mobile screen

    Examples:
      | comment                    | uploadImage |
      | This is the updated report | Picture(1)  |

  Scenario Outline: Verify "Other" data under medical records
    Then I click on the back button
    When I click on Other option
    Then Added record data <updatedType> text is displaying on mobile screen
    Then Added record data <updatedComments> text is displaying on mobile screen

    Examples:
      | updatedType               | updatedDescription    | updatedComments       |
      | Updated Auto Other result | Results>>othermodules | Everything is normal. |

  Scenario Outline: Verify "Other Provider Records" data under medical records
    Then I click on the back button
    Then I click on the back button
    When I click on Documents option
    When I click on Other Provider Records option
    Then Added record data <otherProvider> text is displaying on mobile screen
    Then Added record data <updatedDescription> text is displaying on mobile screen

    Examples:
      | otherProvider                         | image      | updatedDescription  |
      | Test_Auto_Other_Provider_For_Provider | Picture(1) | updated description |

  Scenario Outline: Verify "Hospital Records" data under medical records
    Then I click on the back button
    When I click on Hospital Records option
    Then Added record data <UpdatedHospital> text is displaying on mobile screen
    Then Added record data <updatedDescription> text is displaying on mobile screen
    Then Added record data <hospitalNote> text is displaying on mobile screen

    Examples:
      | UpdatedHospital | updatedImage | updatedDescription            | hospitalNote       |
      | Default         | Picture(1)   | Updated Auto Test description | Auto_Hospital_Note |
