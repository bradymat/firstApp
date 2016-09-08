Feature: Search for a blog

 Scenario: I  want to search for a particular blog
  Given I am viewing the page at "/blogs"
  When I enter search terms "Brady"
  Then I can see the results "Brady" but not "Peter"
