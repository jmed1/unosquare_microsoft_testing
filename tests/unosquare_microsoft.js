/*José F. Medrano, Sep, 23, 2020*/
module.exports = {
    url: 'https://google.com',
    
    '@tags':['unosquare_microsoft_testing'],

    'Unosquare_Microsoft_test'(browser){
        
        const searchIconSelector = 'form#c-search';
        const searchIconSelectorLarge = 'form#searchForm.c-search-js-focused';                                                        
        const textToBeSought = "Visual Studio";
        const stayInUSAButton = 'button#R1MarketRedirect-close';
        
        /*1. Go to https://www.microsoft.com/en-us/*/
        browser.url('https://www.microsoft.com/en-us/')
        .waitForElementVisible('nav#uhf-g-nav.c-uhfh-gnav')
        /*2. Validate all menu items are present (Office - Windows - Surface - Xbox - Deals - Support)*/
        .verify.containsText("a#shellmenu_1.c-uhf-nav-link","Office", "Office link present")
        .verify.containsText("a#shellmenu_2.c-uhf-nav-link","Windows", "Windows link present")
        .verify.containsText("a#shellmenu_3.c-uhf-nav-link","Surface")
        .verify.containsText("a#shellmenu_4.c-uhf-nav-link","Xbox", "Xbox link present")
        .verify.containsText("a#shellmenu_5.c-uhf-nav-link","Deals", "Deals link present")
        .verify.containsText("a#l1_support.c-uhf-nav-link","Support", "Support link present")
        /*3. Go to Windows (Trying to click on the Windows link)*/
        .click('a#shellmenu_2.c-uhf-nav-link')
        /*4. Once in Windows page, click on Windows 10 Menu*/
        .assert.urlEquals('https://www.microsoft.com/en-us/windows/', "Windows Link to Windows product webpage")
        /*Windows 10 Menu*/
        .waitForElementVisible('button#c-shellmenu_52')
        /*Clicking on Windows 10 Menu dropdown list*/
        .click('button#c-shellmenu_52')
        /*.click(searchIconSelector)
        .waitForElementVisible(searchIconSelectorLarge)
        .setValue(searchIconSelectorLarge, textToBeSought)
        .waitForElementVisible(stayInUSAButton)
        .click(stayInUSAButton)*/

    },

    'prueba': function (browser) {
        /*var google = browser.page.google();*/
        //nightwatch
          //url.navigate()
          /*.assert.titleContains('Nightwatch.js');*/
   
        //nightwatch.api.elements('ul li', function(result) {
        browser
        .url('https://www.microsoft.com/en-us/windows')
        .elements('css selector','ul li')
        .getText('css selector', 'ul li')        
        /*.elements('css selector','ul li', function(result) {
          console.log(result);
        });*/
   
        browser.end();
     }

}