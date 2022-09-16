Changes:

- Please run 'npm i' command now to install all relevant dependencies we will need for this project!
- Some code from the previous project was erased. The only route this API will respond to is the '/authors' route, where we will perform different CRUD operations and interact with our database. You can traverse the files to read the comments.
- You will need some local setup before continuing with this tutorial. Please go through the following steps:
  - For this project, we will connect to a MongoDB database. For that you need to create a new Project in Mongo Atlas and add a free cluster to it.
  - To generate your Mongo URI for you to connect your backend with your database, you need to click on "Connect" when on the main page for your cluster, and click on "Connect your application".
  - It will generate your URI boilerplate, that should look approximately like this: 'mongodb+srv://<username>:<password>@<clusterNmae>.<clusterNum>.mongodb.net/<databaseName>?retryWrites=true&w=majority' (the databaseName is optional. If you skip it, whenever you create a document in your database through your backend/ODM, the database that will contain the collection will default to 'test').
  - From here, create locally a .env file that sits at the root of your project, and create a variable meant to be your Mongo URI, with the above link as its value.
  - From here on, you can go to the dbConnection.js file in the DB folder for the next step.