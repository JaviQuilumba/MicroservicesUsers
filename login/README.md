# Microservice for Login Users

<p>
This microservice performs the action of verifying the credentials of users registered on the cinema platform. It has an interface where it calls this microservice through a defined URL. The microservice performs this action through an API endpoint and stores it in a cloud-hosted Postgres database. 
</p>


#### How to install and run the project? :wrench:
The project requires Node.js and npm installed on your system. To install and run the project, follow these steps:

###### Clone the repository:

- `git clone <URL_OF_REPOSITORY>`
- `cd <URL_OF_REPOSITORY> `

###### Install dependencies:

- `npm install`

###### Configure environment variables:
Create an `.env` file in the root of the project and set the following environment variables:

- `DB_USER=your_postgresql_user`
- `DB_HOST=your_postgresql_host`
- `DB_DATABASE=your_postgresql_database`
- `DB_PASSWORD=your_postgresql_password`
- `DB_PORT=server_port`


###### Execute the server:
- `npm start`

#### How to use the project :computer:
<p>
To use the microservice, follow the steps above to install and run the project. Once the program is running you can make use of the frontend of the cinema platform which should also run on your local machine or you can make use of the Swagger documentation available, with which it would no longer be necessary to have the frontend of the cinema platform to test this microservice, you can access through the URL of your local machine by increasing the following path at the end of the URL: `/swaggerLogin`.
</p>


`Frontend Cinema Platform` : <https://github.com/JaviQuilumba/CinemaPlatform.git>

#### Technologies used for this microservice
- **Node.js** with the Express.js framework for the backend server.
- **PostgreSQL** for the database.
- **Swagger** for API documentation.
- **Docker** for optional containerization.


###  License  
This project is licensed under the (AFL-3.0) License - see the [LICENSE](https://opensource.org/license/afl-3-0-php) file for details.
