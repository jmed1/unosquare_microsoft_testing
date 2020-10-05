/*José F. Medrano, Sep, 23, 2020*/
module.exports = {
    url: 'https://google.com',
    
    '@tags':['unosquare_microsoft_testing'],

    'Unosquare_Microsoft_test'(browser){
        
        const buttonSearchSelector = 'button#search.c-glyph';
        const inputSearchSelector = 'input#cli_shellHeaderSearchInput';                                               
        const textToBeSought = "Visual Studio";
        const stayInUSAButton = 'button#R1MarketRedirect-close';
        const price1 = '#coreui-productplacement-30l7ywa_0 span[itemprop=price]'
        const priceValue = 'content'
        price_sum = 0;
        price1_val2 = 0;
        price1_val3 = 0;
        const firstImage = '#coreui-productplacement-30l7ywa_dg7gmgf0dst3 a'
        //const price1_second_page = 'div#ProductPrice_productPrice_PriceContainer.pi-price-text span';
        const price1_second_page = '#ProductPrice_productPrice_PriceContainer > span:nth-child(1)';                          
        //const price1_second_page = '/html/body/section/div[1]/div[1]/div[1]/div[2]/div[6]/div/div[1]/div/div/div[1]/span';                          
        const cancel_signmeup_div = 'div.c-glyph.glyph-cancel';        
        const price1_third_page = 'div.item-price > div > span.c-price > span[itemprop=price] > span[aria-hidden=true]';
        //const price1_third_page = '.item-price > div:nth-child(1) > span:nth-child(1) > span:nth-child(3) > span:nth-child(1)';
        const buttonAddToCart = '#buttonPanel_AddToCartButton';
        
        /*1. Go to https://www.microsoft.com/en-us/*/
        browser.timeoutsImplicitWait(40000, function(result) {
            console.log('Setting timeoutsImplicitWait to 40000');})
        .url('https://www.microsoft.com/en-us/')
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
        /*6.Go to Search next to shopping cart*/
        .waitForElementVisible(buttonSearchSelector)
        .click(buttonSearchSelector)
        .waitForElementVisible(inputSearchSelector)
        /*7. Search for Visual Studio */
        .setValue(inputSearchSelector, textToBeSought)
        .click(buttonSearchSelector)
        .waitForElementVisible(stayInUSAButton)
        .click(stayInUSAButton)
        /*9. Store the price of the first one*/
        .waitForElementVisible(price1)
        .getAttribute(price1, priceValue, (result)=>{
            console.log(result);
            price_sum+= parseInt(result.value.slice(1),10);
            console.log("sum = "+price_sum);
        })
        /* 10. Click on the first one to go to the details page */
        .click(firstImage)
        /* 11.Once in the details page, validate both prices are the same */
        .waitForElementVisible(price1_second_page)
        //.getText("xpath",price1_second_page, result=>{
        .getText("css selector",price1_second_page, result=>{
            price1_val2 = parseInt(result.value.slice(1),10);
        })
        //.assert.ok(price_sum === price1_val2, "Precios "+price_sum+" iguales")
        .perform(()=>{
            if (price_sum === price1_val2) 
            console.log("Precios "+price_sum +" iguales");
        })
        /*12. Click Add to Cart*/
        .waitForElementVisible(buttonAddToCart)
        .click(buttonAddToCart)
        .waitForElementVisible(cancel_signmeup_div)
        .verify.visible(cancel_signmeup_div, "Sign me up pop up div present")
        .click(cancel_signmeup_div)
        .verify.not.visible(cancel_signmeup_div, "Sign me up pop up div is NOT present anymore.")
        .verify.visible(buttonAddToCart, "Add to cart button was still present")
        .click(buttonAddToCart)
        //.verify.not.visible(buttonAddToCart, "Add to cart button was NOT present anymore.")
        /*13. Verify all 3 price amounts are the same.*/
        .waitForElementVisible(price1_third_page)
        .getText(price1_third_page, result=>{
            price1_val3 = parseInt(result.value.slice(1,10));
        })
        //.assert(price1_val3 === price1_val2, "Precios "+price_sum+" iguales")
        .perform(()=>{
            if ( price1_val3 === price1_val2 ) 
            console.log("Precios "+price_sum +" iguales");
        })

        /*14. On the # of items dropdown select 20 and validate the Total amount is Unit Price * 20*/



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

//#coreui-productplacement-30l7ywa_0 > div:nth-child(3) > div:nth-child(1) > span:nth-child(3) > span:nth-child(1)
//#coreui-productplacement-30l7ywa_1 > div:nth-child(3) > div:nth-child(1) > span:nth-child(3) > span:nth-child(1)