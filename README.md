# creating Backend :-

### Npm package of backend (Node media server)
`https://www.npmjs.com/package/node-media-server`

`cd server`
`npm init -y`
`npm i node-media-server`

`Inside package.json :-`
  ```
  "scripts": {
    "start": "node src/index.js"
  },
```

`npm start` 

### open browser :-
`localhost:8000/admin`


#### Inside obs studio :-
`settings --> stream
Server :- rtmp://localhost/live
Stream key :- test `



# creating Front-end :-

`npx create-react-app front-end --template typescript`

`npm install  flv.js`

Inside `App.tsx` add this line inside src , and  test.flv comes from the Stream key which we have provided inside obs studio
and the port 8080 comes from backened server inside `src/index.js`

` <VideoPlayer src='http://localhost:8080/live/test.flv'/>`

### open browser :- 
`http://localhost:3000/`






