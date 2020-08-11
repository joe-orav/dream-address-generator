# Dream Address Generator

Dream Address Generator gets and displays a random Dream Island Address for the Animal Crossing New Horizons video game.

The site is developed using vanilla JavaScript and Sass for styling. Under the hood, the site communicates with a Python back-end that pulls the addresses from the [Dream Island Address Sharing thread](https://www.reddit.com/r/AnimalCrossing/comments/i0qzol/megathread_new_horizons_dream_address_sharing/?sort=new) from r/AnimalCrossing. The addresses are then parsed from the comments and stored in a database. Those stored addresses are then sent to the site when requested for.