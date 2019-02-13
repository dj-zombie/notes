# Notes

A simple note taking application with the ability to add and edit notes.

## Development

- `$ npm install`
- `$ npm run start`
- Server with hot reloading: `$ nodemon server.js`
- In a browser load http://localhost:5000

## Production

- `$ npm run build`
- `$ env PORT=80 node server.js`

### Heroku Deployment

`$ heroku git:remote -a application-name`
`$ git add .`
`$ git commit -am 'prepare to deploy'`
`$ git push heroku master`

