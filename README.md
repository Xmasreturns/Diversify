#Diversify
Diversify is a mobile portal to your Guild Wars 2 commerce and investments. Given an official API key, it can:
* Show a history of items that you've purchased and sold
* Follow any purchases that you tag as investments
* Watch the price of bookmarked items
* Summarize the performance of your past investments
* Link portfolio items to track them in tandem

##Investment and You
Investment can be as simple as putting some of your extra gold into an item. Generally, this is followed by selling the item when it reaches a point at which you profit.

As more items become part of your portfolio, they will inevitably become harder to keep track of. This applies even more so when thinking of upfront costs, transaction taxes, and become tied up through crafting or mystic forge recipes.

##Design choices
Diversify by default will not track extra or missing quantities of items previously marked as investments. That means that if you choose to "invest" in 100 Silk Scraps and NPC them  instead of selling them, the investment will be considered a loss.

In cases of crafting an item to be sold using past investments, the sale transaction can later be marked as part of an investment by linking portfolio items. If additional item costs are involved (e.g. items purchased from NPC), they must be added manually in the Investments tab. A simple calculator is included to simplify this calculation.

Note: Cases where only a subset of a transaction is investment-related are not automatically handled. As a result, these must be corrected manually in the Investments tab.

##Link
https://gw2-diversify.herokuapp.com/
