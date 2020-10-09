module.exports = {

url: 'https://www.microsoft.com/en-us/',

elements:{
    MenuDiv_selector               : 'nav#uhf-g-nav.c-uhfh-gnav',
    Office_linkSelector            : 'a#shellmenu_1.c-uhf-nav-link',
    Windows_linkSelector           : 'a#shellmenu_2.c-uhf-nav-link',
    Surface_linkSelector           : 'a#shellmenu_3.c-uhf-nav-link',
    Xbox_linkSelector              : 'a#shellmenu_4.c-uhf-nav-link',
    Deals_linkSelector             : 'a#shellmenu_5.c-uhf-nav-link',
    Support_linkSelector           : 'a#l1_support.c-uhf-nav-link',
    
    WindowsButton_sel              : 'button#c-shellmenu_52',
    WindowsElements_sel            : 'ul[data-m*=Windows10_cont] > li > a',
    WindowsElements_sel_FirstPart  : 'ul[data-m*=Windows10_cont] li:nth-child(',
    WindowsElements_sel_SecondPart : ') a',

    buttonSearchSelector           : 'button#search.c-glyph',    
    
    inputSearchSelector            : 'input#cli_shellHeaderSearchInput',
    stayInUSAButton                : 'button#R1MarketRedirect-close',
    price1                         : 'li#coreui-productplacement-30l7ywa_dg7gmgf0dst3 div#coreui-productplacement-30l7ywa_0 span[itemprop=price]',
    priceItem2                     : 'li#coreui-productplacement-30l7ywa_dg7gmgf0dst4 div#coreui-productplacement-30l7ywa_1 span[itemprop=price]',
    priceItem3                     : 'li#coreui-productplacement-30l7ywa_dg7gmgf0dst6 div#coreui-productplacement-30l7ywa_2 span[itemprop=price]',
    firstImage                     : '#coreui-productplacement-30l7ywa_dg7gmgf0dst3 a',
    price1_second_page             : 'div#ProductPrice_productPrice_PriceContainer.pi-price-text',
    attributePriceSecondPage       : "aria-label",
    cancel_signmeup_div            : 'div.c-glyph.glyph-cancel',
    price1_third_page              : 'div.item-price > div > span.c-price > span[itemprop=price] > span[aria-hidden=true]',
    buttonAddToCart                : '#buttonPanel_AddToCartButton',
    selectAmount_selector          : "div.item-quantity > select",
    select20_selector              : "div.item-quantity > select option:nth-child(20)",
    finalPrice                     : "div.XsLPvCL_:nth-child(4) > div:nth-child(1) > span:nth-child(1) > span:nth-child(2) > strong:nth-child(1) > span[itemprop=price]"

},

props:{
    textToBeSought                 : 'Visual Studio',
    x_price                        : 0,
    priceValue                     : 'Content',
    finalPrice_selector_string     : "div.XsLPvCL_:nth-child(4) > div:nth-child(1) > span:nth-child(1) > span:nth-child(2) > strong:nth-child(1) > span[itemprop=price]"
},

commands:[{

    waitnClick(selector){
        const page = this;
        
        page.waitForElementVisible(selector, 10000, false, ()=>{
            console.log(`${selector} is visible`)
            page.click(selector)
        },`${selector}`)

        return page;
    }
    ,

    waitnPrintnStorePrice(selector,attribute){
        const page = this;
        
        page.waitForElementVisible(selector, 10000, false, ()=>{
            console.log(`${selector} is visible`)
            
            page.getAttribute(selector,attribute,(result)=>{
                console.log(result);
                page.props.x_price = parseInt(result.value.replace(/Current price \$|\$|\,/g,""),10);
                console.log("Price = " + page.props.x_price);
            })    

        },`${selector}`)

        return page;
    }
    ,

    validatePricesAreEqual(price_A, price_B){
        
        const page = this;
        
        if (price_A === price_B){
            console.log(`Comparing prices ${price_A} and ${price_B}`)
            page.api.verify.ok(true, "Prices are equal.");    
        }
        else{
            console.log(`Comparing prices ${price_A} and ${price_B}`)
            page.api.verify.ok(false,"Precios are diferentes");
        }

        return page;
    }
}]

}