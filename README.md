# Pnyx

*STATUS :* Abandoned :skull: ...

Pnyx is a community driven news aggregator

  - Click love to upvote your favourite story
  - Engage in discussion with comments
  - Submit your stories

### Tech

* Create-react-app
* Node.js 10+ 
* express .js
* postgres 11

### Installation

The simplest way to test the locally is with **Docker** and **docker-compose** . Please check that you have them both installed.

```sh
$ git clone git@github.com:nickosmark/stathmos.git
$ cd inside the folder
$ docker-compose up -d 
```
This run the create-react-app dev server on port 3001 and express api on port 5001

You can attach your console to the logs with: 
```sh
$ docker-compose logs -f -t
```
ctrl^c to detach

### Known issues

 - Axios: Module not found when running dev server inside docker-compose
 - Create react dev server won't proxy the requests to server(backend) service


License
----

MIT


