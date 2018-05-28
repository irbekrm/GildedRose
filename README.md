GildedRose
====

[![Build Status](https://travis-ci.org/irbekrm/GildedRose.svg?branch=master)](https://travis-ci.org/irbekrm/GildedRose)

### Description

[Gilded Rose tech test](https://github.com/emilybache/GildedRose-Refactoring-Kata).

Refactor legacy code to make adding a new feature easier. Some parts of the legacy code cannot be altered.

From the given description:

>Hi and welcome to team Gilded Rose. As you know, we are a small inn with a prime location in a prominent city run by a friendly innkeeper named Allison. We also buy and sell only the finest goods. Unfortunately, our goods are constantly degrading in quality as they approach their sell by date. We have a system in place that updates our inventory for us. It was developed by a no-nonsense type named Leeroy, who has moved on to new adventures. Your task is to add the new feature to our system so that we can begin selling a new category of items. First an introduction to our system:

>All items have a SellIn value which denotes the number of days we have to sell the item. All items have a Quality value which denotes how valuable the item is. At the end of each day our system lowers both values for every item. Pretty simple, right? Well this is where it gets interesting:

>Once the sell by date has passed, Quality degrades twice as fast
>The Quality of an item is never negative
>“Aged Brie” actually increases in Quality the older it gets
>The Quality of an item is never more than 50
>“Sulfuras”, being a legendary item, never has to be sold or decreases in Quality
>“Backstage passes”, like aged brie, increases in Quality as it’s SellIn value approaches; Quality increases by 2 when there are 10 days or less and by 3 when there are 5 days or less but Quality drops to 0 after the concert
>We have recently signed a supplier of conjured items. This requires an update to our system:

>“Conjured” items degrade in Quality twice as fast as normal items
>Feel free to make any changes to the UpdateQuality method and add any new code as long as everything still works correctly. However, do not alter the Item class or Items property as those belong to the goblin in the corner who will insta-rage and one-shot you as he doesn’t believe in shared code ownership (you can make the UpdateQuality method and Items property static if you like, we’ll cover for you)."

### Approach

The legacy codebase consists of a single script with two classes- `Item` and `Shop`.
`Shop` class has an `updateQuality` method that uses a number of nested `if -else` statements to 
update the existing shop items according to their type.

I started by writing tests for all the existing features. Tests can later be used to ensure changes to the codebase don't break any existing features.

I wanted to refactor the code so that 

1) adding a new feature would require very little change to the existing codebase,
2) a developer could easily understand where to add code for a new feature,
3) general constraints would be implemented once and reused for all new features. 

A new feature in this case would most likely be a new item for the shop. 

The existing code uses ES6 classes, so it seemed reasonable to continue using these for consistency.

I initially wrote a number of ES6 classes extending the existing Item class(i.e Brie, Conjured, etc).
A shop would then be initialised with a list of items that would already be instances of these new classes. After discussing this approach with the coach I realised that the requirements were to not modify the way items are added to the shop.

I then decided to create a number of wrapper classes for the original shop items.
When shop's items are updated at the end of the day, for each item a new instance of wrapper class is created (depending on the name of the item it is either GenericWrapper or a class that extends GenericWrapper, such as BrieWrapper).
`updateQuality` method of that instance is then called. 

Wrapper classes have `item` property that holds a reference to the original item. They also have setters and getters that allow
to access item's `sellIn` and `quality` properties as if they were properties of the wrapper instance itself.

`GenericWrapper` class has a `setState` method that implements the rules that apply to most items. This method is inherited by the other wrapper classes that extend `GenericWrapper`. 

When a developer wants to add a new item to the list, they should:

1) create a new wrapper class extending `Generic Wrapper` class
2) implement rules for updating the new item in `updateQuality` method
3) call `setState` from `updateQuality` passing the value by which item's quality needs to be incremented. `setState` method implements generic constraints for `quality` (0 <= quality >= 50) and increments the `sellIn` property of item.
4) import the new class into the `shop` script and add a new key-value pair to `specialItems` object (in `shop` script such that the key
is the name of the item and value is the class name.

### Use 

[Clone the repository](https://github.com/irbekrm/GildedRose.git)

*npm install* - install dependencies

*npm test* - run tests and view test coverage

*npm run lint* - run ESLint linter

**Interact with the code:**

*npm start* - will start a console with Shop and Item classes preloaded

`Create some new items
const item1 = new Item('Aged Brie', 3, 8), item2 = new Item('Conjured Mana Cake', 2, 9);`

`const shop = new Shop([item1, item2]); // Create new shop instance with items`

`shop.updateQuality(); // Update state of the shop items`


## Tech

* Core JavaScript
* Node.js
* Mocha
* Chai
* ESLint
