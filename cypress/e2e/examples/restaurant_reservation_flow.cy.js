const {
  CONSTANTS,
  CLASS_VARLIST

  } = require('./variables.cy')

Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

describe("Restaurant reservation for Lunch and Dinner flows", () => {
  beforeEach(() => {
    cy.visit(CONSTANTS.Restaurant_Reservation_URL);
    cy.xpath(CLASS_VARLIST.COOKIES_POPUP).should("exist"); 
    cy.xpath(CLASS_VARLIST.COOKIES_POPUP_ACCEPT).click();
    cy.xpath(CLASS_VARLIST.RESERVE_YOUR_TABLE).click();
    cy.url().should("include", "/reserve");
    cy.title().should("eq", "Usman");

    //Section 1/4 of the flow - "Choose your experience"
    cy.xpath(CLASS_VARLIST.CHOOSE_YOUR_EXPERIENCE).contains("Choose your experience")
    cy.xpath(CLASS_VARLIST.RESERVE_A_TABLE_HERE).contains("reserve a table here").click();

    //Section 2/4 of the flow - "Number of Guests"
    cy.xpath(CLASS_VARLIST.SELECT_NUMBER_OF_GUESTS).contains("Select number of guests")
    cy.url().should("include", "/guests");
    cy.xpath(CLASS_VARLIST.NUMBER_OF_GUESTS_PICKER).click();

    //Section 3/4 of the flow - "Choose date"
    const targetDate = 'October 10, 2023';
    const [month, day, year] = targetDate.split(' ');
    const month_day = day.replace(',', '')
    const calendarMonth = `${month}, ${year}`;
    cy.log("The day extracted from the date string is: ${month_day}");
    
    cy.xpath(CLASS_VARLIST.CALENDAR_AVAILABILITY).should("be.visible")
    cy.url().should("include", "/date");
    
    //This function would pick current or future months from the date picker and would eventually pick the date dynamically. 
    function navigateToMonth(calendarMonth) {
      cy.get(CLASS_VARLIST.DATE_MONTH_CHECK).invoke('text').then((text) => {
        if (text !== calendarMonth) {
          cy.get(CLASS_VARLIST.CURRENT_OR_FUTURE_DATE).click();
          navigateToMonth(calendarMonth);

        }
      });
    }

    navigateToMonth(calendarMonth);

    cy.get(CLASS_VARLIST.PICKING_DATE, { timeout: 60000 })
      .should('be.visible')
      .then((calendarElement) => {
        cy.get('ul[data-test="calendar-days"] li:not(.unavailable)').contains(month_day)
          .click();
      });
  });

  //Test case to validate lunch reservation flow
  it("Checking restaurant reservation flow for lunch", () => {
    cy.xpath(CLASS_VARLIST.VERIFYING_LUNCH_OPTION_SELECTED)
      .contains("Lunch")
      .should("be.selected");
    cy.xpath(CLASS_VARLIST.TIME_SLOT_SELECTION).click();
    cy.url().should("include", "/supplements");

    //Section 4/4 of the flow - "Supplements"
    cy.xpath(CLASS_VARLIST.SUPPLEMENTS_SELECTION).click()
    cy.xpath(CLASS_VARLIST.CONTINUE_AFTER_SUPPLEMENTS_SELECTION).click();
    cy.url().should("include", "/review");
    cy.xpath(CLASS_VARLIST.RESERVATION_POLICY_PAGE_VERIFICATION).contains("Reservation Policy");
    cy.xpath(CLASS_VARLIST.RESERVATION_POLICY_ACCEPT).click();
    cy.url().should("include", "/complete-profile");

    //Customer registration
    cy.xpath(CLASS_VARLIST.CUSTOMER_FIRST_NAME).type("Test").should("have.value", "Test");
    cy.xpath(CLASS_VARLIST.CUSTOMER_LAST_NAME).type("User").should("have.value", "User");
    cy.xpath(CLASS_VARLIST.CUSTOMER_EMAIL)
      .type("testuser@test.com")
      .should("have.value", "testuser@test.com");
    cy.xpath(CLASS_VARLIST.CUSTOMER_EMAIL_CONFIRMATION)
      .type("testuser@test.com")
      .should("have.value", "testuser@test.com");
    cy.xpath(CLASS_VARLIST.CUSTOMER_COMPANY_NAME_OPTIONAL)
      .type("TestUserCompany")
      .should("have.value", "TestUserCompany");
    cy.xpath(CLASS_VARLIST.CUSTOMER_PHONE_NUMBER)
      .type("555555555")
      .should("have.value", "+49 5555 55555");
    cy.xpath(CLASS_VARLIST.CUSTOMER_POSTAL_CODE)
      .type("12345")
      .should("have.value", "12345");

    cy.xpath(CLASS_VARLIST.CONTINUE_AFTER_CUSTOMER_INFORMATION).click();
    cy.url().should("include", "/reserve/finalize");
    
    //Reviewing reservation info
    cy.xpath(CLASS_VARLIST.VERIFYING_RESERVATION_DATE_INFO)
      .contains("October")
      .should("be.visible");
    cy.xpath(CLASS_VARLIST.VERIFYING_NUMBER_OF_GUESTS_INFO)
      .contains("2 guests")
      .should("be.visible");
    
    cy.xpath(CLASS_VARLIST.TERMS_OF_USE_CHECKBOX).check();
    cy.xpath("//*[@id='complete']").click();
    cy.url().should("include", "/thank-you");
    cy.get('.sc-hZSUBg', { timeout: 60000 })
          .should('be.visible')
          .then((confirmationmsg) => {
              cy.wrap(confirmationmsg).should('have.text', 'Booking is confirmed');
          });
  });

  //Test case to validate dinner reservation flow
  it("Checking restaurant reservation flow for dinner", () => {
    cy.url().should("include", "/date");
    cy.xpath(CLASS_VARLIST.VERIFYING_DINNER_OPTION_SELECTED)
      .click()
      .contains("Dinner")
      .should("be.selected");
    cy.xpath(CLASS_VARLIST.TIME_SLOT_SELECTION).click();
    cy.url().should("include", "/supplements");

    //Section 4/4 of the flow - "Supplements"
    cy.xpath(CLASS_VARLIST.SUPPLEMENTS_SELECTION).click()
    cy.xpath(CLASS_VARLIST.CONTINUE_AFTER_SUPPLEMENTS_SELECTION).click();
    cy.url().should("include", "/review");
    cy.xpath(CLASS_VARLIST.RESERVATION_POLICY_PAGE_VERIFICATION).contains(
      "Reservation Policy",
    );
    cy.xpath(CLASS_VARLIST.RESERVATION_POLICY_ACCEPT).click();
    cy.url().should("include", "/complete-profile");

    //Customer registration
    cy.xpath(CLASS_VARLIST.CUSTOMER_FIRST_NAME).type("Test").should("have.value", "Test");
    cy.xpath(CLASS_VARLIST.CUSTOMER_LAST_NAME).type("User").should("have.value", "User");
    cy.xpath(CLASS_VARLIST.CUSTOMER_EMAIL)
      .type("testuser@test.com")
      .should("have.value", "testuser@test.com");
    cy.xpath(CLASS_VARLIST.CUSTOMER_EMAIL_CONFIRMATION)
      .type("testuser@test.com")
      .should("have.value", "testuser@test.com");
    cy.xpath(CLASS_VARLIST.CUSTOMER_COMPANY_NAME_OPTIONAL)
      .type("TestUserCompany")
      .should("have.value", "TestUserCompany");
    cy.xpath(CLASS_VARLIST.CUSTOMER_PHONE_NUMBER)
      .type("555555555")
      .should("have.value", "+49 5555 55555");
    cy.xpath(CLASS_VARLIST.CUSTOMER_POSTAL_CODE)
      .type("12345")
      .should("have.value", "12345");
    cy.xpath(CLASS_VARLIST.CONTINUE_AFTER_CUSTOMER_INFORMATION).click();

    //Reviewing customer info
    cy.url().should("include", "/reserve/finalize");
    cy.xpath(CLASS_VARLIST.VERIFYING_RESERVATION_DATE_INFO)
      .contains("October")
      .should("be.visible");
    cy.xpath(CLASS_VARLIST.VERIFYING_NUMBER_OF_GUESTS_INFO)
      .contains("2 guests")
      .should("be.visible");
    
    cy.xpath(CLASS_VARLIST.TERMS_OF_USE_CHECKBOX).check();
    cy.xpath("//*[@id='complete']").click();
    cy.url().should("include", "/thank-you");
      cy.get('.sc-hZSUBg', { timeout: 60000 })
      .should('be.visible')
      .then((confirmationmsg) => {
          cy.wrap(confirmationmsg).should('have.text', 'Booking is confirmed');
      });
  });
});
