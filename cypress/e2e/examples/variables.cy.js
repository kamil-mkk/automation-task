var CONSTANTS = {
    Restaurant_Reservation_URL: 'https://usmangxm.superbexperience.com/', 
}



var CLASS_VARLIST = {
    COOKIES_POPUP: "//*[@id='root']/div/div[1]",
    COOKIES_POPUP_ACCEPT: "//*[@id='rcc-confirm-button']",
    RESERVE_YOUR_TABLE: "//a[@id='reserve-btn']",
    CHOOSE_YOUR_EXPERIENCE: "//*[@id='experience']/div[1]",
    RESERVE_A_TABLE_HERE: "//button[normalize-space()='reserve a table here']",
    SELECT_NUMBER_OF_GUESTS: "//*[@id='guests']/div[1]",
    NUMBER_OF_GUESTS_PICKER: "//button[normalize-space()='2']",
    DATE_MONTH_CHECK: "[data-test='month-year']",
    CURRENT_OR_FUTURE_DATE: "[data-test='calendar-navigation-next']",
    CHOOSE_DATE: "//*[@id='reservation']/div[2]/div/div[1]",
    PICKING_DATE: "[data-test='calendar-days'] > :nth-child(20)",
    CALENDAR_AVAILABILITY: "//div[@class='sc-gmeYpB dDrpOW']",
    DATE_PICKER: "//*[@id='reservation']/div[2]/div/div[4]/div/ul[2]/li[31]",
    TOP_BAR_SELECTION_CHOOSE_EXP: "//*[@id='reservation']/div[1]/div/div[1]/h5[2]",
    TOP_BAR_SELECTION_GUESTS_SELECTED: "(//h5[contains(text(),'2')])[2]",
    TOP_BAR_SELECTION_CHOOSE_DATE: "(//h5[normalize-space()='Choose date'])[1]",
    SELECTED_DATE_CONFIRMATION: "//*[@id='reservation']/div/div/div[6]/div/div[1]/div[2]/ul[2]/li[3]/span",
    VERIFYING_LUNCH_OPTION_SELECTED: "//*[@id='reservation']/div/div/div[6]/div/div[2]/div[1]/div/div[1]",
    TIME_SLOT_SELECTION: "/html/body/div[1]/div/div[1]/div[2]/div/div/div[6]/div/div[2]/div[2]/div[2]/div[2]/div[1]/span",
    SUPPLEMENTS_SELECTION: "//*[@id='reservation']/div[2]/div/div/div[2]/ul/li/div[2]/div/div/button[2]/span", 
    CONTINUE_AFTER_SUPPLEMENTS_SELECTION: "//*[@id='continue']",
    RESERVATION_POLICY_PAGE_VERIFICATION: "//*[@id='reservation']/div/div/div[1]",
    RESERVATION_POLICY_ACCEPT: "//*[@id='confirm']",
    CUSTOMER_FIRST_NAME: "//*[@id='firstName']",
    CUSTOMER_LAST_NAME: "//*[@id='lastName']",
    CUSTOMER_EMAIL: "//*[@id='email']",
    CUSTOMER_EMAIL_CONFIRMATION: "//*[@id='emailConfirmation']",
    CUSTOMER_COMPANY_NAME_OPTIONAL: "//*[@id='profile-form']/div[4]/div/input",
    CUSTOMER_PHONE_NUMBER: "//*[@id='profile-form']/div[5]/div[1]/div/input",
    CUSTOMER_POSTAL_CODE: "//*[@id='profile-form']/div[5]/div[2]/div/input",
    CONTINUE_AFTER_CUSTOMER_INFORMATION: "//button[normalize-space()='Continue']",
    VERIFYING_RESERVATION_DATE_INFO: "//*[@id='reservation']/div/div/div[1]/div[2]/div/div[1]/span",
    VERIFYING_NUMBER_OF_GUESTS_INFO: "//*[@id='reservation']/div/div/div[1]/div[2]/div/div[2]/div[2]/span",
    TERMS_OF_USE_CHECKBOX: "//*[@id='tnc']",
    BOOKING_CONFIRMATION_MESSAGE: "//h2[normalize-space()='Booking is confirmed']",
    VERIFYING_DINNER_OPTION_SELECTED: "//*[@id='reservation']/div/div/div[6]/div/div[2]/div[1]/div/div[2]"


    


} 

module.exports = {
    CONSTANTS,
    CLASS_VARLIST 
}