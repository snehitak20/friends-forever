# friends-forever

## Description

The main objective of this project is to create an API from scratch for a social network web application. Users can add/remove friends, create/update/delete thoughts, and react to friends' thoughts. The keys to this project are the use of Express.js for routing, the MongoDB database, and Mongoose ODM. 

USER ROUTES:
* GET all users: `/api/users`
* GET user by ID: `/api/users/:id`
* POST (create) an user: `/api/users`
* PUT (update) user by ID: `/api/users/:id` 
* DELETE user by ID: `/api/users/:id`

[![User Routes](./assets/userRoutes.gif)](https://drive.google.com/file/d/1cJOf6A5Tw4K7Nw_dq4Z0hl7aFAm7NnCk/view?usp=sharing "video")

[Link to video](https://drive.google.com/file/d/1cJOf6A5Tw4K7Nw_dq4Z0hl7aFAm7NnCk/view?usp=sharing)

THOUGHTS ROUTES: 
* GET all thoughts: `/api/thoughts`
* GET thought by ID: `/api/thoughts/:id`
* POST (create) a thought: `/api/thoughts`
* PUT (update) thought by ID: `/api/thoughts/:id`
* DELETE thought by ID: `api/thoughts/:id`

[![Thoughts Routes](./assets/thoughtsRoutes.gif)](https://drive.google.com/file/d/1qMnr_ac9gsqyugD8cOqGyXFeXbFEj8_W/view?usp=sharing "video")

[Link to video](https://drive.google.com/file/d/1qMnr_ac9gsqyugD8cOqGyXFeXbFEj8_W/view?usp=sharing)

FRIENDS ROUTES: 
* POST (create) a friend by ID: `/api/users/:userId/friends/:friendId` 
* DELETE a friend by ID: `/api/users/:userId/friends/:friendId` 

[![Friends Routes](./assets/friendsRoutes.gif)](https://drive.google.com/file/d/1Fx6NWxSPixuCTAO4NeGcvOIfDrKyo54l/view "video")

[Link to video](https://drive.google.com/file/d/1Fx6NWxSPixuCTAO4NeGcvOIfDrKyo54l/view)

REACTIONS ROUTES: 
* POST (create) a single reaction to thought by ID: `/api/thoughts/:thoughtId/reactions`
* DELETE a reaction by ID from thought by ID: `/api/thoughts/:thoughtId/reactions/:reactionId`
 
[![Reaction Routes](./assets/reactionRoutes.gif)](https://drive.google.com/file/d/1sXgXO2qhz3DYhy0KfZDRRkDvPMNL0fCY/view "video")

[Link to video](https://drive.google.com/file/d/1sXgXO2qhz3DYhy0KfZDRRkDvPMNL0fCY/view)

## Usage
* Run `npm install` to make sure everything is up-to-date
* To start the server: `npm start` 

## Technologies Used
* JavaScript
    * Express.js
    * Moment.js
* MongoDB
* Mongoose 

## Installation

1. Create a new repository on Github. 
    - Press the "+" sign on the top right hand corner, or the "new" button on your GitHub homepage. 
    - Create an unique name for your repository, and make the respository public. 
    - Click the "README" option to include the "README" page. 
    - Your new repository has been created.
2. Open GitBash (PC users) or Terminal (Mac users).
    - Navigate to where you want to clone your new repository onto your local machine. 
        - Use `cd` to help you navigate. 
3. To clone the new repository onto your local machine. 
    - Click the respository that you just made on github.com.
    - Click the "code" button and choose the SSH option. 
    - Copy the SSH option to your clipboard. 
    - On GitBash/Terminal, enter the command `git clone git@github.com:<UserNAME>/<demo-repo>.git`
        - After `git clone`, paste the SSH option from your clipboard into GitBash/Terminal.
        - Since the SSH option was used, enter the password for the SSH key when asked. 
4. You have now cloned your new repository.
    - Using `cd`, navigate into your new repository from the location that you have saved it in. 
    - Use `ls` to see what is inside the new repository currently. 
        - It should only include the README page as of now.
5. Tranferring the project files into your new directory on your local machine. 
    - Using Finder/Explorer, copy the corresponding files that are needed to edit your project. 
    - In another Finder/Explorer window, navigate to your new repository, and paste the files directly into that folder. 
6. On GitBash/Terminal, after pasting the project files into the new repository. 
    - Use `ls` to see what is now inside the new repository.
        - This should now include the README page, and the project files that you have copy-pasted in. 
7. Use `git status` to see if there any changes that need to be made to the repository. 
    - At this point, git will tell you that there is an untracked file .
8. Use `git add .` to add the new project files, and allow the new files to be tracked by git.
9. Use `git commit -m "add base project files"` to commit the changes have recently been made to the repository. 
10. Use `git push origin main` to sync your local machine with GitHub. 
    - Enter your SSH password when prompted. 
11. Use `code .` to open the files on a code reader of your choice.
12. Edit the files as necessary in your code reader. 
13. Periodically, and when you are finished with editing your code: 
    - Follow Steps 7-10 to keep your repository up to date with the changes that have been made. 
14. This requires Terminal to start the server. 
    * Run `npm install`.
    * To start the server: `npm start` 
15. You have successfully completed this project!

## Credits

Initial prompt given by UC Berkeley Extension, Coding Bootcamp. 

## Reflection

This project required the understanding of many different concepts. Express.js is useful in creating the different route to establish the different API routes. MongoDB is used to create the initial database. Mongoose is primarily used to build out the schemas and models, and establishes the connection to the server. The hardest part of this project was writing the differrent routes. This project stands out because it is a working database with a proper backend. 

## License

Licensed under the [MIT](https://choosealicense.com/licenses/mit/#) license. 

## Contributors

Feel free to reach out to me at the following: 
* [LinkedIn](https://www.linkedin.com/in/snehita-kolli-0abb23b1/) || [GitHub](https://github.com/snehitak20)
