# Specifications for the Angular Assessment

Specs:
- [x] Use Angular to build the app

- [x] Must contain some sort of nested views

    All my views are nested within My home view which has a banner/nav bar at the top.

- [x] Must contain some sort of searching as well as filtering based on some criteria. Ex: All items in the "fruit" category, or all tasks past due

    My components index page allows you to search by keyword and also contains a filter for any price range you want.

- [x] Must contain at least one page that allows for dynamic updating of a single field of a resource. Ex: Allow changing of quantity in a shopping cart

    My stereoDisplay directive allows the user to watch their stereo profile come together as they choose components, and includes a running price total.

- [x] Links should work correctly. Ex: Clicking on a product in a list, should take you to the show page for that product

- [x] Data should be validated in Angular before submission

    I worked a ton on creating great validations for my stereo/components form, including custom validations for proper price input, calls to the database to ensure unique component names, and a couple different validations that depend upon the interplay of multiple form fields.

- [x] Must talk to the Rails backend using $http and Services

  I utilize lots of $http functions inside a DataService service that gets called on by various controllers/directives as well as by various resolve properties in my app.js file.

- [x] Your README.md includes a short description, install instructions, a contributors guide and a link to the license for your code

Confirm
- [x] You have a large number of small Git commits

    A large number of my commits are small!

- [x] Your commit messages are meaningful

    I think so.

- [x] You made the changes in a commit that relate to the commit message

    Yes.

- [x] You don't include changes in a commit that aren't related to the commit message

    For the most part, I complied with this.
