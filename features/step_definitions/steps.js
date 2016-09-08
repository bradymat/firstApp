const assert = require('cucumber-assert')
const Url = require('url')
const extend = require('xtend')

const config = require('../../config')

module.exports = function () {

  // Add a new item
  // Given I am veiwing the page at "/list"
  // When I enter "Tomato" into the "newItem" input
  //   And I click on the input with a value "Add Item"
  // Then I can see "Tomato" on my list
  this.Given('I am veiwing the page at "$string"', function (pathname){
    browser.url(`http://localhost:5050${pathname}`)
  })

  this.When('I enter "$string" into the "$string" input', function (value, name) {
    browser.setValue(`input[name=${name}]`, value)
  })

  this.When('I click on the input with a value "$string"', function (value){
    browser.click(`input[name=${value}"]`)
  })

  this.Then('I can see "$string" on my list', function (value) {

  })

  // Delete and item from my shopping list
  // Given I am viewing the page at "/list"
  // # When I check the box beside items
  // When I click on the "delete item" button beside "Tomato"
  //   # And I click on "confirm" on the alert
  // Then I no longer see the item "Tomato"

  this.When('I click on the "$string" button beside "Tomato"'), function (button, value){

  }

  this.Then('I no longer see the item "Tomato"'), function (value){

  }






}
