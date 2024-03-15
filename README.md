## **Creators: Leah Sarles, Arni Tiwari, Claire Ogawa, Shafay Syed**

### **Product Vision**

For a scrapbooker who needs a medium to digitize their memories, the ScrapJam is a digital scrapbooking journal that provides an accessible, streamlined platform to catalog text and images entries.

Unlike our competitors, MyMemories and Serif CraftArtist, our product does not have a steep learning curve and is accessible to elderly users and those with motor disabilities.

Our product is portable, interactive, and provides users with a comfortable, inviting environment to journal their memories.

### **Link to our Figma Prototype**

Most recent update: March 7th
https://www.figma.com/file/WPc1qrg8VjsRQIWVqZRZLH/CSC-307---ScrapJam?type=design&node-id=0-1&mode=design&t=hwHyXoccebNgTESh-0

### **Link to our GitHub Repo**

https://github.com/artiwari07/scrapjam_app

### **Link to our GitHub Project Board**

https://github.com/users/artiwari07/projects/1

### UML

For detailed documentation on our project's structure, including our UML Class Diagram, see our Wiki : https://github.com/artiwari07/scrapjam_app/wiki/UML-Diagram

### **How to set up the development environment**

Front end azure deployment: https://zealous-meadow-02867d41e.5.azurestaticapps.net/
Back end azure deployment: https://scrapjambackend.azurewebsites.net/

### **_IF you want to run our program locally:_**

First, git pull our repo.
Then, in scrapjam_app/packages/express-backend, create a .env file with the following contents:

TOKEN_SECRET = 09f26e402586e2faa8da4c98a35f1b20d6b033c6097befa8be3486a829587fe2f90a832bd3ff9d42710a4da095a2ce285b009f0c3730cd9b8e1af3eb84df6611
MONGODB_URL = mongodb+srv://tiwariarni:HfY!_PD4uGsZP3z@scrapjam.5z2ibyz.mongodb.net/?retryWrites=true&w=majority&appName=ScrapJam

However, we already have our environment variables configured with Azure, so you are able to view our live deployment via the links above.

To run our program locally, you must change all occurences of the frontend and backend deployed link to [localhost 3000](http://localhost:3000/) and [local host 8000](http://localhost:8000/), respectively

ALSO to ensure that you can run our program locally, install the following dependencies in the packages/react-frontend folder

### **Front end dependencies**

"dependencies": {
"@testing-library/jest-dom": "^5.17.0",
"@testing-library/react": "^13.4.0",
"@testing-library/user-event": "^13.5.0",
"axios": "^1.6.7",
"re-resizable": "^6.9.11",
"react": "^18.2.0",
"react-cookie": "^7.1.0",
"react-dom": "^18.2.0",
"react-draggable": "^4.4.6",
"react-grid-layout": "^1.4.4",
"react-lottie-player": "^1.5.6",
"react-modal": "^3.16.1",
"react-router-dom": "^6.22.1",
"react-scripts": "5.0.1",
"react-textarea-autosize": "^8.5.3",
"reactjs-popup": "^2.0.6",
"web-vitals": "^2.1.4"
},

Install each package using
npm install [package_name]

### **To run the program locally:**

RUN
**npm start**
in the root directory

AND
**node backend.js**
OR **npm run dev**
in the packages/express-backend folder

If you would like to run our test cases, type
**npm run test**
in the packages/react-front/folder

## **Important Note: BEFORE PUSHING CODE **

For our continous deployment to work properly, before you stage your files to commit,
please run the following command in the root directory:
**npx prettier --write .**

And, to check that you are passing all eslint and prettier checks, run the following command in the root directory:
**npx eslint . && npx prettier --check .**

**_Thank you for checking out our repo!_**
