I) App Requirements:

1. This app will display a single joke for user read.
2. User can like or dislike joke.User can change votes again.
3. The app will record the vote and save it in database
4. When there is no more jokes to show , the app will display: "That's all the jokes for today! Come back another day!"

- Note: App use cookie to track if a user has voted

II) Technical

-Front-end: React Js , axios
-Back-end: NodeJs(ExpressJs) ,cors , Sequelize-CLI , nodemon
-Database: MySQL

III) Database

1. Table JokeStories with column id,title,subTitle,story,vote
2. Api call method: GET(Get all jokes) , PUT ( update the vote )

IV) App flow

1. First render:

- App will call GET method to get all the joke stories and display first story into UI( home screen ) -> if success App will render vote buttons ( like and dislike ) else render LoadingPage

- App will initial user vote (using cookie)

2. Vote Buttons(like or dislike) onClick -> App will save user vote and store it into cookie and show modal with vote user has voted and render to UI will two buttons ( Vote again and Switch To Next Joke )

3. Vote Again Button onClick -> Close Modal and Reset User Vote(cookie).
   Switch To Next Story Button onClick -> call PUT method if success close modal and store vote into database and reset user vote(cookie) and Switch to next story and check if there are no more story so display "That's all the jokes for today! Come back another day!" else switch to next story else console.log("Err")
