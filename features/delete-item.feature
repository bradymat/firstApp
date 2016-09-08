Feature: delete an item

  Scenario: I want to delete a particular item from my shopping list
    Given I am viewing the page at "/list"
    # When I check the box beside items
    When I click on the "delete item" button beside "Tomato"
      # And I click on "confirm" on the alert
    Then I no longer see the item "Tomato"
