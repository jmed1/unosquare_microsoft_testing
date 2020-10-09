/*José F. Medrano, Sep, 23, 2020*/
//chai = require('chai')

const verificar = require('assert');

module.exports = {
    url: 'https://google.com',
    
    '@tags':['unosquare_microsoft_testing'],

    'Unosquare_Microsoft_test'(browser){
                
        const priceValue = 'content'
        price_saved = 0;
        price1_val2 = 0;
        price1_val3 = 0;
        const attributePriceSecondPage = "aria-label"
        const finalPrice = "div.XsLPvCL_:nth-child(4) > div:nth-child(1) > span:nth-child(1) > span:nth-child(2) > strong:nth-child(1) > span[itemprop=price]"
        total = "";
        num_renglones = 0;

        const page = browser.page.microsoft_testing();
        page
        .perform(()=>{console.log('/*1. Go to https://www.microsoft.com/en-us/*/')})
        /*1. Go to https://www.microsoft.com/en-us/*/
        
        .navigate()

        .perform(()=>{console.log('/*2. Validate all menu items are present (Office - Windows - Surface - Xbox - Deals - Support)*/')})
        /*2. Validate all menu items are present (Office - Windows - Surface - Xbox - Deals - Support)*/
        
        .waitForElementVisible('@MenuDiv_selector',2000,false)
        .verify.containsText('@Office_linkSelector',"Office", "Office link present")
        .verify.containsText('@Windows_linkSelector',"Windows", "Windows link present")
        .verify.containsText('@Surface_linkSelector',"Surface", "Surface link present")
        .verify.containsText('@Xbox_linkSelector',"Xbox", "Xbox link present")
        .verify.containsText('@Deals_linkSelector',"Deals", "Deals link present")
        .verify.containsText('@Support_linkSelector',"Support", "Support link present")

        .perform(()=>{console.log('/*3. Go to Windows (Trying to click on the Windows link)*/')})
        /*3. Go to Windows (Trying to click on the Windows link)*/
        
        .click('@Windows_linkSelector')
        
        .perform(()=>{console.log('/*4. Once in Windows page, click on Windows 10 Menu*/')})
        /*4. Once in Windows page, click on Windows 10 Menu*/
        
        .assert.urlEquals('https://www.microsoft.com/en-us/windows/', "Windows Link to Windows product webpage")
        /*Windows 10 Menu*/                
        //.waitForElementVisible('@WindowsButton_sel', 10000, false, 'Windows Button Dropdown is visible')
        /*Clicking on Windows 10 Menu dropdown list*/
        .verify.visible('@WindowsButton_sel', 'Windows Button Dropdown is visible')
        .click('@WindowsButton_sel')

        .perform(()=>{console.log('/* 5. Print all Elements in the dropdown*/')})
        /* 5. Print all Elements in the dropdown*/
        
        //browser.elements('css selector','@WindowsElements_sel', function(result) {
        page.api.elements('css selector','ul[data-m*=Windows10_cont] > li > a', function(result) {
                
            console.log("Printing all Elements in Windows 10 dropdown: ")
            
            result.value.forEach(function(value){    
                num_renglones +=1;                                
                page.getText('css selector', 
                'ul[data-m*=Windows10_cont] li:nth-child('+(num_renglones)+') a',
                (a_s)=>{
                    console.log(JSON.stringify(a_s.value).trim().replace(/{|}/g,""))
                })            
            })
        })

        .perform(()=>{console.log('/*6.Go to Search next to shopping cart*/')})
        /*6.Go to Search next to shopping cart*/
        
        page.waitnClick('@buttonSearchSelector')
        .waitForElementVisible('@inputSearchSelector')
        
        .perform(()=>{console.log('/*7. Search for Visual Studio */')})
        /*7. Search for Visual Studio */
        
        .setValue('@inputSearchSelector', page.props.textToBeSought)
        .click('@buttonSearchSelector')
        /*Dismissing stay in USA pop up div.*/
        .waitnClick('@stayInUSAButton')
        
        .perform(()=>{console.log('/*8. Print the price for the 3 first elements listed in Software result list*/')})
        /*8. Print the price for the 3 first elements listed in Software result list*/
        
        .waitnPrintnStorePrice('@price1', page.props.priceValue)
        
        .perform(()=>{console.log('/*9. Store the price of the first one*/')})
        /*9. Store the price of the first one*/
        
        /*The value must be saved immediately after being retrieved by waitnPrintnStorePrice 
        otherwise it is lost on the next call of the function*/
        .perform(()=>{
            //Save stored price.
            price_saved = page.props.x_price
            console.log("price_saved = " + price_saved)
        })

        .perform(()=>{console.log('/*8. Print the price for the 3 first elements listed in Software result list*/')})
        /*8. Print the price for the 3 first elements listed in Software result list*/
        
        .waitnPrintnStorePrice('@priceItem2', page.props.priceValue)
        .waitnPrintnStorePrice('@priceItem3', page.props.priceValue)
        
        .perform(()=>{console.log('/* 10. Click on the first one to go to the details page */')})
        /* 10. Click on the first one to go to the details page */
        
        .click('@firstImage')
        
        .perform(()=>{console.log('/* 11.Once in the details page, validate both prices are the same */')})
        /* 11.Once in the details page, validate both prices are the same */        
        
        .waitnPrintnStorePrice('@price1_second_page',attributePriceSecondPage)
        .perform(()=>{
            //Saving last price obtained.
            price1_val2 = page.props.x_price
            //console.log("price1_val2 ="+price1_val2)
        })
        
        .perform(()=>{
            //Perform the following statements synchronously
            console.log('Comparing prices')
            page.validatePricesAreEqual(price_saved,price1_val2)
        })
        
        .perform(()=>{console.log('/*12. Click Add to Cart*/')})
        /*12. Click Add to Cart*/
        
        .waitnClick('@buttonAddToCart')
        .pause(5000)
        .verify.visible('@cancel_signmeup_div', "Sign me up pop up div present")
        .waitnClick('@cancel_signmeup_div')
        .verify.not.visible('@cancel_signmeup_div', "Sign me up pop up div is NOT present anymore.")
        .verify.visible('@buttonAddToCart', "Add to cart button was still present")
        .waitnClick('@buttonAddToCart')
        
        .perform(()=>{console.log('/*13. Verify all 3 price amounts are the same.*/')})
        /*13. Verify all 3 price amounts are the same.*/
        
        .waitForElementVisible('@price1_third_page',10000,false)
        .getText('@price1_third_page', result3=>{
            price1_val3 = parseInt(result3.value.slice(1),10);
            console.log("Price3 = "+price1_val3);
        })
        .perform(()=>{
            //Perform the following statements synchronously
            console.log("Verifying all 3 prices amounts are the same.");
            page.validatePricesAreEqual(price_saved,price1_val2)
            page.validatePricesAreEqual(price1_val2,price1_val3)
        })

        .perform(()=>{console.log('/*14. On the # of items dropdown select 20 and validate the Total amount is Unit Price * 20*/')})
        /*14. On the # of items dropdown select 20 and validate the Total amount is Unit Price * 20*/
        
        .waitnClick('@selectAmount_selector')
        .waitnClick('@select20_selector')
        .pause(5000)
        .waitForElementVisible('@finalPrice', 10000, false)

        //page.api.execute(function (final_price_string) {
        page.api.execute(function (finalPrice) {
            let innerTotal = 0;
            a = document.querySelector(finalPrice)
            return a.innerText;
          }, [finalPrice], function(res) {
            total = Number(JSON.stringify(res.value).replace(/,|\"|\$|}/gi,"").trim());
            /*console.log("res -> "+ JSON.stringify(res))
            console.log("TOTAL = "+total)
            console.log("type of TOTAL = "+ typeof(total) )*/
        })

        .perform(()=>{
            console.log(total)
            const unit_price = price1_val3;
            const num_of_purchased_units = 20
            page.validatePricesAreEqual( total, (num_of_purchased_units*unit_price) )

            if (total === num_of_purchased_units*unit_price)
            {
                console.log("Total amount equals sum of items' price.")
                console.log("Total Amount = " + total)
            }
            else{
                console.log("Final price = " + JSON.stringify(total))
                console.log("Incorrect Total SUM")
            }
        })
    }
}
