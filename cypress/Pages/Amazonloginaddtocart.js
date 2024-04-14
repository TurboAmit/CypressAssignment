export class Amazonloginaddtocart {

    AmazonLocators = {

        //login process locators
        emailormobilenumber: '#ap_email',
        password: '#ap_password',
        keepsignin: 'input[type="checkbox"]',
        signinbutton: '#signInSubmit',
        continue: '#continue',
        navigatesignbtn: '#nav-signin-tooltip > .nav-action-signin-button > .nav-action-inner',

        //search process locators
        searchinputbox: '#twotabsearchtextbox',
        searchbtn: '#nav-search-submit-button',

        //price dropdown process locators
        priceDD: '#p_36-title',
        lowprice: '#low-price',
        highprice: '#high-price',
        expandbtn: '#p_n_size_browse-vebin-title > .a-size-base',
        gobtn: '.a-button-input',

        //Best selling book selection process locators
        firtsbook: '#p13n-asin-index-0 > ._cDEzb_iveVideoWrapper_JJ34T',
        addtocartbtn: '#add-to-cart-button',
        secondbook: '#p13n-asin-index-1 > ._cDEzb_iveVideoWrapper_JJ34T',

        //L and M Tshirt selection process locators
        tshirt: '[data-component-type="s-search-result"]',
        clothdd: '#native_dropdown_selected_size_name',
        msize: '[data-value="M"]',

        //Cart verification process locators
        activecart: '#activeCartViewForm',
        carticon: '.nav-cart-icon',
        subtotaltext: '#sc-subtotal-label-buybox',
        subtotalprice: '#sc-subtotal-amount-buybox',
        buyproduct: '#sc-buy-box-ptc-button > .a-button-inner > .a-button-input',
        deleteAllProductsFromCart: '.a-declarative',
        abanner: '#banner-image',
        cartblock: '[data-action="delete"]',
        logout: '.nav-hidden-aria',
        //new locator
        footernavigation: '#navFooter',
        mobile: '[data-component-type="s-impression-logger"]',
        wishlist: '#wishListMainButton',
        buybtn : '#buy-now-button',

    }

    openURL() {
        cy.visit(Cypress.env('URL'))
    }

    navigatesignButton() {

        cy.get(this.AmazonLocators.navigatesignbtn).click({
            force: true
        })
    }

    enterEmailorMobilenumber(Emailmno) {
        cy.get(this.AmazonLocators.emailormobilenumber).type(Emailmno)
    }
    enterPassword(pass) {
        cy.get(this.AmazonLocators.password).type(pass)
    }
    selectCheckbox() {
        cy.get(this.AmazonLocators.keepsignin).check()

    }
    clickoncontinuebutton() {
        cy.get(this.AmazonLocators.continue).click()
    }
    clickonsigninbutton() {
        cy.get(this.AmazonLocators.signinbutton).click()

    }
    searchinputbox(inputbox) {
        cy.get(this.AmazonLocators.searchinputbox).type(inputbox, {
            delay: 0
        })
    }
    searchbtn() {
        cy.get(this.AmazonLocators.searchbtn).click()
    }

    priceDD() {

        cy.get(this.AmazonLocators.priceDD).click({
            force: true
        })

    }

    lowprice() {

        cy.get(this.AmazonLocators.lowprice).type('200', {
            force: true
        })

    }
    highprice() {

        cy.get(this.AmazonLocators.highprice).type('500', {
            force: true
        })

    }
    gobtn() {

        cy.get(this.AmazonLocators.gobtn).click({
            multiple: true,
            force: true
        })
     

    }
    bestsellertag() {
        cy.scrollTo(0, 300)
        cy.get('.a-badge-text').contains('Best seller').wait(6000).click({
            force: true
        })

    }

    firstbook() {
        cy.get(this.AmazonLocators.firtsbook).click()
    }
    addtocartbtn() {

        cy.get(this.AmazonLocators.addtocartbtn).should('not.have.text', '0').click({
            force: true
        })

    }
    secondbook() {
        cy.get(this.AmazonLocators.secondbook).click()
    }
    goback1() {
        cy.go(-1)
    }
    goback2() {
        cy.go(-1)
    }

    expandbtn() {
        cy.get(this.AmazonLocators.expandbtn).click({
            force: true
        })
    }
    msize() {
        cy.get(this.AmazonLocators.msize).click()
    }
    lsize() {
        cy.get(this.AmazonLocators.lsize).click()
    }
    firsttshirt() {

        cy.get(this.AmazonLocators.tshirt).contains('colors/patterns').first().click({
            force: true
        })

    }
    MclothDD() {
        cy.get(this.AmazonLocators.clothdd).select('M')

    }
    LclothDD() {
        cy.get(this.AmazonLocators.clothdd).select('L')

    }

    carticon() {
        cy.visit('https://www.amazon.in/gp/cart/view.html?ref_=nav_cart')
    }
    subtotaltext() {
        cy.get(this.AmazonLocators.subtotaltext).should('be.visible')
    }
    subtotalprice() {
        
        cy.get('span#sc-subtotal-amount-buybox').wait(10000).invoke('text').then((subtotal) => {
            const subtotalAmount = parseFloat(subtotal.replace(/[^0-9.]/g, '').replace(',', '')).toFixed(2);
            expect(parseFloat(subtotalAmount)).to.be.at.most(2000);
        })
    }
    buyproduct() {

        cy.get(this.AmazonLocators.buyproduct).click()

    }
    deleteAllProductsFromCart() {
        cy.get(this.AmazonLocators.cartblock).each(($deleteButton) => {
            // Click on each "Delete" button
            cy.wrap($deleteButton).click({
                force: true
            });
        });

    }
   
    abanner() {
        cy.visit('https://www.amazon.in/ref=chk_help_homefooter_pri')
    }
    navigateLogout() {

        cy.get(this.AmazonLocators.logout).click({
            force: true
        })
    }
    footernavigation(){
        cy.get(this.AmazonLocators.footernavigation).should('be.visible')
        }
    logfooter(){
   cy.get(this.AmazonLocators.footernavigation).find('a').then(($links) => {
            // Log the number of footer links
            cy.log('Number of footer links:', $links.length)})      
    }
    Aboutuslink(){
        cy.contains('About Us').invoke('removeAttr', 'target').click()
    }

    amazonscience(){
        cy.contains('Amazon Science').invoke('removeAttr', 'target').click()
    }

    amazonhelp(){
        cy.contains('Help').invoke('removeAttr', 'target').click()
        
    }
    mobile(){

        cy.get(this.AmazonLocators.mobile).contains('colors/patterns').first().click()
        
    }
    wishlist(){
        cy.get(this.AmazonLocators.wishlist).click()
        cy.url().should('include','/signin')
    }
    buybtn(){
        cy.get(this.AmazonLocators.buybtn).click()
        cy.url().should('include','/signin')
    }




}