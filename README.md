# Notes-App-Backend-CRUD
A note taking application can send data to the API and it would save all the data in MongoDB in HTML format.

Demo Video: https://drive.google.com/file/d/1NQsmpf-vF0iqFAKbAjpJIzMIZ0H_tYEN/view?usp=sharing

To run the APIs locally,

Clone the repository.
Run the command "npm install".
After installation, run the command "npm start".
The API would be available on localhost:3000.

GET: localhost:3000/api/notes
POST: localhost:3000/api/notes
PUT: localhost:3000/api/notes/id
DELETE: localhost:3000/api/notes/id

While testing the APIs, provide input as JSON in body.

JSON Format:
{
  "title": "SampleNote2",
  "content": "This is a sample note content. \n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae ligula at nisi tincidunt faucibus."
}

The directory has:

src folder: Contains all the code in TypeScript. Has different subfolders - controllers, models, routes, and also has app.ts

.env - Used for environment variables, using this is better than specifying everything in the code files.

package.json - Has details regarding dependencies and scripts to run and build code.

tsconfig.json - Used for configuring TypeScript.

.gitignore - Used to not track files and folders that need not be uploaded in the repository.

controllers folder -> note.controller.ts : Has CRUD functions with appropriate errors.

models folder -> note.models.ts : Contains Schema to save each note.

routes -> note.routes.ts : Contains routing information for the APIs and the URL paths.

dist folder: TypeScript Code compiled to JavaScript is saved here.