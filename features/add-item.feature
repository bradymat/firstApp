Feature: Add Item to the shopping list

  # @watch
  Scenario: I want to add a new item
    Given I am veiwing the page at "/list"
    When I enter "Tomato" into the "newItem" input
      And I click on the input with a value "Add"
    Then I can see "Tomato" on my list
