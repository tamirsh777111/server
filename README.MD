# Biz server

to run the server:

### `npm start / npm run dev`

Runs the app in the development mode.\
Open [http://localhost:3030](http://localhost:3030) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `Users end points`

Method: POST, Authorization: all, Action: register
http://localhost:3030/api/users/register

Method: POST, Authorization: all, Action: login
http://localhost:3030/api/users/login

Method: GET, Authorization: admin, Action: Get all users
http://localhost:3030/api/users

Method: GET, Authorization: The registered user or admin, Action: Get all users
http://localhost:3030/api/users/:id

Method: PUT, Authorization: The registered user, Action: Edit user
http://localhost:3030/api/users/:id

Method: PATCH, Authorization: The registered user, Action: Change isBusiness status
http://localhost:3030/api/users/:id

Method: DELETE, Authorization: The registered user or admin, Action: Delete user
http://localhost:3030/api/users/:id

### `Cards end points`

Method: GET, Authorization: all, Action: Get all cards
http://localhost:3030/api/cards

Method: GET, Authorization: all, Action: Get card
http://localhost:3030/api/cards/:id

Method: GET, Authorization: The registered user, Action: Get user cards
http://localhost:3030/api//cards/my-cards

Method: PUT, Authorization: The registered user, Action: Edit user
http://localhost:3030/api/users/:id

Method: POST, Authorization: Business user, Action: Create new card
http://localhost:3030/api/cards

Method: PATCH, Authorization: A registered user, Action: Like card
http://localhost:3030/api/cards/:id

Method: DELETE, Authorization: The user who created the card or admin, Action: Delete card
http://localhost:3030/api/cards/:id
