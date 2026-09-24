COLORS-LAMP



Description



This project is a web-based color management application developed for COP4331. The application allows users to log in and search a database for colors, or add their own to the list. It is a web interface connected to a PHP/MySQL backend.



Technologies Used



* DigitalOcean - used to buy server for website
* GoDaddy - used to buy domain
* HTML
* CSS
* JavaScript
* PHP
* FileZilla - used to upload HTML, JS, CSS, and PHP files to server
* Postman - used to test API endpoints
* Putty - used to connect to the server to create the MySQL database



Setup

1. After purchasing a LAMP stack from DigitalOcean you can install Putty to easily SSH in to your droplet.

2\. Then purchase a domain and connect the IPv4 address of the server to the domain name.

3\. Connect to MySQL in Putty and begin to create the database. First create the database itself and then create the tables. Initialize some data for the users and colors.

4\. Create a User and Password to connect API usage to the database by creating a local config.php file using config.example.php as a template.

5\. Enter the appropriate database connection information in config.php.

6\. Create the directories: css, js, and LAMPAPI.

7\. Use FileZilla to upload all files to server.

8\. Test to make sure API endpoints work using Postman.

9\. Go to domain URL and test website.



The application I created using these files can be found at http://cop4331fall26.xyz



Assumptions and Limitations



* A working PHP and MySQL environment is required.
* A configured MySQL database is required for the backend functionality.
* Database credentials must be supplied locally through config.php.
* config.php is not included in the GitHub repository for security reasons.



AI Usage



AI tools were used for assistance with Git/GitHub setup and documentation. The application code and functionality were developed from the course project.





