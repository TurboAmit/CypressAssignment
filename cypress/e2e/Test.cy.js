import {beforeEach} from "mocha"
import { describe,it} from 'mocha'
import {Amazonloginaddtocart} from "../Pages/Amazonloginaddtocart"

const homeob = new Amazonloginaddtocart()

import testdata from "../fixtures/testdata.json"

describe('Test Scenario 1', () => {

    //login to amazon webpage
    beforeEach(() => {
        homeob.openURL()
        homeob.navigatesignButton()
        homeob.enterEmailorMobilenumber(testdata.emailormobilenumber)
        homeob.clickoncontinuebutton()
        homeob.enterPassword(testdata.password)
        homeob.selectCheckbox()
        homeob.clickonsigninbutton()

    })

    it('add bestseller book to the cart', () => {
        homeob.openURL()
        homeob.searchinputbox(testdata.searchinputbox1)
        homeob.searchbtn()
        homeob.priceDD()
        homeob.lowprice(testdata.lowprice)
        homeob.highprice(testdata.highprice)
        homeob.gobtn()
        homeob.bestsellertag()
        homeob.firstbook()
        homeob.addtocartbtn()
        homeob.goback2()
        homeob.secondbook()
        homeob.addtocartbtn()

    })
    it('add clothes to the cart', () => {
        homeob.searchinputbox(testdata.searchinputbox2)
        homeob.searchbtn()
        homeob.priceDD()
        homeob.lowprice(testdata.lowprice)
        homeob.highprice(testdata.highprice)
        homeob.gobtn()
        homeob.firsttshirt()
        homeob.MclothDD()
        homeob.addtocartbtn()
        homeob.goback1()
        homeob.LclothDD()
        homeob.addtocartbtn()
    })
    it('subtotal verification with delete all product and logout', () => {

        homeob.carticon()
        homeob.subtotaltext()
        homeob.subtotalprice()
        homeob.buyproduct()
        homeob.abanner()
        homeob.carticon()
        homeob.deleteAllProductsFromCart()
        homeob.navigateLogout()
    })
})
    describe('Test Scenario 2',()=>{

        it('add item to wishlish without login',()=>{
    
            homeob.openURL()
            homeob.searchinputbox(testdata.searchinputbox3)
            homeob.searchbtn()
            homeob.mobile()
            homeob.wishlist()
        })   
        it('user unable to proced to checkout witout login',()=>{
            homeob.openURL()
            homeob.searchinputbox(testdata.searchinputbox3)
            homeob.searchbtn()
            homeob.mobile()
            homeob.buybtn()
    
        })
        
    })
    
    describe('Test Scenario 3',()=>{
    
        it('search for all links',()=>{
    
            homeob.openURL()
            homeob.footernavigation()
            
            
        })   
        it('open About US in new tab',()=>{
    
            homeob.openURL()
            homeob.footernavigation()
            homeob.Aboutuslink()
            
        }) 
        it('open Amazon Science in new tab',()=>{
    
            homeob.openURL()
            homeob.footernavigation()
            homeob.amazonscience()
            
        })
        it('open Help in new tab',()=>{
    
            homeob.openURL()
            homeob.footernavigation()
            homeob.amazonhelp()
            
        })  
    })
   

