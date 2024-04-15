# QA Automation Assignment

This repository contains automated test cases for testing the functionality of the Amazon.in website. The tests are designed to cover various scenarios outlined in the assignment brief.

## **Important Notes**

1. **Tool Selection**: Cypress and vscode with npm configuration
2. **Platform Independence**: The code should be runnable on any machine, regardless of the operating system.
5. **TestData**: Please make sure to change username password from fixture > testdata file with your valid login credentials

## **Problem Statement**

Written the code to cover below test scenarios using cypress

### **Scenario 1**

- Visit [www.amazon.in](https://www.amazon.in) and login.
- Search for the keyword "BOOK" in the search box.
- Select a price range and two best-selling books.
- Add L and M size clothes to the cart.
- Verify the correctness of products added to the cart and their prices.
- Ensure that the total amount does not exceed Rs 2000.
- Proceed to buy and click on the Amazon.in homepage.
- Delete all products from the cart and verify that it is empty.
- Logout from the account.

### **Scenario 2**

- Users should not be able to add products to the wishlist or checkout without logging in.

### **Scenario 3**

- Calculate all the links in the footer.
- Right-click on "About Us," "Amazon Science," and "Help" links.
- Open each link in a new tab and verify their functionality.

## **Framework Design**

The framework is designed using a modular approach to enhance maintainability, scalability, and reusability of the code. It includes:

- **Page Object Model (POM)** for managing web elements and actions on web pages.
- **Configuration management** for handling environment-specific data.
- **Utility classes** for common functionalities such as logging, reading configuration files.
- **Custom assertions** for validating test outcomes.

## **Object-Oriented Programming (OOP)**

The framework is built using OOP principles to improve code organization, maintainability, and readability. Each page of the application is represented as a class, encapsulating related functionalities and attributes.

## **Assertion**

Assertions are strategically placed within the test cases to validate expected outcomes against actual results. 
