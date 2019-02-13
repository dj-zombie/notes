# Notes

A simple note taking application with the ability to add and edit notes.

![screenshot](https://user-images.githubusercontent.com/42399304/52692249-454e7100-2f18-11e9-85b6-e105da5f13c5.png)

## Development

- `$ npm install`
- `$ npm run start`
- Server with hot reloading: `$ nodemon server.js`
- In a browser load http://localhost:5000

## Production

- `$ npm run build`
- `$ env PORT=80 node server.js`

### Heroku Deployment

- `$ heroku git:remote -a application-name`
- `$ git add .`
- `$ git commit -am 'prepare to deploy'`
- `$ git push heroku master`

