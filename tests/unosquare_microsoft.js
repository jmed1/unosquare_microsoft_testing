/*José F. Medrano, Sep, 23, 2020*/
const verificar = require('assert')

module.exports = {
    url: 'https://google.com',
    
    '@tags':['unosquare_microsoft_testing'],

    /*waitForCall:async function(browser){
        
        for (i = 0; i > 3; i++) {
            result  =  await browser.getText('css selector', 
                'ul[data-m*=Windows10_cont]:nthchild('+i+')')
            
            console.log("li = " + result.value)
        }

    }*/





    /*demoTestAsync: async function(browser) {
        await browser.init();
        const text = await browser.getText("#main ul li", function(result) {
          return Promise.resolve(resolve.value);
        });
        console.log('text', text);
      }

    ,*/    

    'Unosquare_Microsoft_test'(browser){
        
        const buttonSearchSelector = 'button#search.c-glyph';
        const inputSearchSelector = 'input#cli_shellHeaderSearchInput';                                               
        const textToBeSought = "Visual Studio";
        const stayInUSAButton = 'button#R1MarketRedirect-close';
        const price1 =       'li#coreui-productplacement-30l7ywa_dg7gmgf0dst3 div#coreui-productplacement-30l7ywa_0 span[itemprop=price]'
        const price_other2 = 'li#coreui-productplacement-30l7ywa_dg7gmgf0dst4 div#coreui-productplacement-30l7ywa_1 span[itemprop=price]'
        const price_other3 = 'li#coreui-productplacement-30l7ywa_dg7gmgf0dst6 div#coreui-productplacement-30l7ywa_2 span[itemprop=price]'
        
        const priceValue = 'content'
        price_saved = 0;
        price1_val2 = 0;
        price1_val3 = 0;
        const firstImage = '#coreui-productplacement-30l7ywa_dg7gmgf0dst3 a'
        const price1_second_page = 'div#ProductPrice_productPrice_PriceContainer.pi-price-text';
        const attributePriceSecondPage = "aria-label"
        //const price1_second_page = 'div#ProductPrice_productPrice_PriceContainer.pi-price-text span[aria-disabled=false]';
        //const price1_second_page = '/html/body/section/div[1]/div[1]/div[1]/div[2]/div[6]/div/div[1]/div/div/div[1]/span';                          
        const cancel_signmeup_div = 'div.c-glyph.glyph-cancel';        
        const price1_third_page = 'div.item-price > div > span.c-price > span[itemprop=price] > span[aria-hidden=true]';
        //const price1_third_page = '.item-price > div:nth-child(1) > span:nth-child(1) > span:nth-child(3) > span:nth-child(1)';
        const buttonAddToCart = '#buttonPanel_AddToCartButton';

        const selectAmount_selector = "div.item-quantity > select";
        const select20_selector = "div.item-quantity > select option:nth-child(20)";
        //const finalPrice = "span[itemprop=price]"
        //const finalPrice = "div.XsLPvCL_:nth-child(4) > div:nth-child(1) > span:nth-child(1) > span:nth-child(2) > strong:nth-child(1) > span:nth-child(1)"
        const finalPrice = "div.XsLPvCL_:nth-child(4) > div:nth-child(1) > span:nth-child(1) > span:nth-child(2) > strong:nth-child(1) > span[itemprop=price]"
        total = "";


        num_renglones = 0;
        
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
        /* 5. Print all Elements in the dropdown*/
        


        browser.elements('css selector','ul[data-m*=Windows10_cont] > li > a', function(result) {
                
            console.log("Printing all Elements in Windows 10 dropdown: ")

            result.value.forEach(function(value){
                
                num_renglones +=1;
                //result2 = JSON.stringify(value)
                //result2 = result2.trim();
                //result2 = result2.replace(/{|}/g,"")
                //console.log("result2 >" + result2)
                /*result_text = browser.elementIdText(result2)
                console.log("result_text = "+ result_text)*/

                browser.getText('css selector', 
                'ul[data-m*=Windows10_cont] li:nth-child('+(num_renglones)+') a',
                (a_s)=>{
                    console.log(JSON.stringify(a_s.value).trim().replace(/{|}/g,""))
                })            
            })
        })



        /*   result.value.forEach(function (value) {
              elementID = value;
              console.log('Checking Element - ' + elementID);
            });
          })*/

          
        /*browser.elementIdText(elementID , function(result) {
            
            console.log("dfdf:" + result)
            console.log("dfdf:" + result.value)

        })

        browser.getText('css selector', 'ul[data-m*=Windows10_cont] li', function(result) {
            
            console.log(result.value)

        })*/

        /*.getText('ul[data-m*=Windows10_cont] li', function(result) {
            return new Promise(function(resolve, reject) {
              setTimeout(function() {
                console.log('Value:', result.value);
                resolve();
              }, 1000);
            });
          })*/

        /*.perform(function(){
            var list = document.getElementsByTagName('ul[data-m*=Windows10_cont] li');
            console.log(list);
        })*/
        


        /*6.Go to Search next to shopping cart*/
        .waitForElementVisible(buttonSearchSelector)
        .click(buttonSearchSelector)
        .waitForElementVisible(inputSearchSelector)
        /*7. Search for Visual Studio */
        .setValue(inputSearchSelector, textToBeSought)
        .click(buttonSearchSelector)
        .waitForElementVisible(stayInUSAButton,10000,false)
        .click(stayInUSAButton)
        /*8. Print the price for the 3 first elements listed in Software result list*/
        /*9. Store the price of the first one*/
        .waitForElementVisible(price1)
        .getAttribute(price1, priceValue, (result)=>{
            console.log(result);
            price_saved= parseInt(result.value.slice(1),10);
            console.log("Price = "+price_saved);
        })
        .waitForElementVisible(price_other2)
        .getAttribute(price_other2, priceValue, (result)=>{
            console.log(result);
            price_saved= parseInt(result.value.slice(1),10);
            console.log("Price = "+price_saved);
        })
        .waitForElementVisible(price_other3)
        .getAttribute(price_other3, priceValue, (result)=>{
            console.log(result);
            price_saved= parseInt(result.value.slice(1),10);
            console.log("Price = "+price_saved);
        })
        /* 10. Click on the first one to go to the details page */
        .click(firstImage)
        /* 11.Once in the details page, validate both prices are the same */
        .waitForElementVisible(price1_second_page)
        //.getText("xpath",price1_second_page, result=>{
        .getAttribute(price1_second_page, attributePriceSecondPage, (result2)=>{      
        //.getText(price1_second_page, result2=>{
            console.log("Price s2 = "+ JSON.stringify(result2));
            price1_val2 = parseInt(result2.value.replace(/Current price \$/g,""),10);
            price1_val2 = parseInt(price1_val2,10);
            console.log("Price 2 = "+ price1_val2);
        })
        //.assert.ok(price_saved === price1_val2, "Precios "+price_saved+" iguales")
        .perform(()=>{
            if (price_saved === price1_val2) 
            console.log("Precios "+price_saved +" iguales");
        })
        /*12. Click Add to Cart*/
        .waitForElementVisible(buttonAddToCart)
        .click(buttonAddToCart)
        .pause(5000)
        .waitForElementVisible(cancel_signmeup_div,10000,false)
        .verify.visible(cancel_signmeup_div, "Sign me up pop up div present")
        .click(cancel_signmeup_div)
        .verify.not.visible(cancel_signmeup_div, "Sign me up pop up div is NOT present anymore.")
        .verify.visible(buttonAddToCart, "Add to cart button was still present")
        .click(buttonAddToCart)
        //.verify.not.visible(buttonAddToCart, "Add to cart button was NOT present anymore.")
        /*13. Verify all 3 price amounts are the same.*/
        .waitForElementVisible(price1_third_page)
        .getText(price1_third_page, result3=>{
            price1_val3 = parseInt(result3.value.slice(1),10);
            console.log("Price3 = "+price1_val3);
            if ( price1_val3 === price1_val2 ) 
            console.log("Precios "+price_saved +" iguales");
        })
        /*14. On the # of items dropdown select 20 and validate the Total amount is Unit Price * 20*/
        .waitForElementVisible(selectAmount_selector)
        .click(selectAmount_selector)
        .waitForElementVisible(select20_selector)
        .click(select20_selector)
        .pause(5000)
        .waitForElementVisible(finalPrice, 10000, false)

        browser.execute(function (finalPrice) {
            var innerTotal = 0;
            //a = document.querySelector("div.XsLPvCL_:nth-child(4) > div:nth-child(1) > span:nth-child(1) > span:nth-child(2) > strong:nth-child(1) > span[itemprop=price]")
            a = document.querySelector(finalPrice)
               //.forEach(a => innerTotal += Number(a.innerText));
               //.forEach(a =>{
                //innerTotal += Number(a.innerText)
               //});
            return a.innerText;
            //return innerTotal;
          //}, [], function(res) {
          }, [finalPrice], function(res) {
            total = Number(JSON.stringify(res.value).replace(/,|\"|\$|}/gi,"").trim());
            console.log("res -> "+ JSON.stringify(res))
            console.log("TOTAL = "+total)
            console.log("type of TOTAL = "+ typeof(total) )
        })

        .perform(()=>{
            console.log(total)
            if (total === 20*price1_val3)
            {
                console.log("Total amount equals sum of items' price.")
                console.log("Total Amount = " + total)
                verificar.equal(total,(20*price1_val3))
            }
            else{
                console.log("Final price = " + JSON.stringify(total))
                verificar.equal(total,(20*price1_val3),"LA SUMA DE LOS ARTÍCULOS ES INCORRECTA.")
            }

        })
    }
    ,


    
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