## Pure Node.ja static file server
### Will be used as an example for my new Medium article

#### Setup
```
git clone https://github.com/Cu7ious/callbacks-to-async-node-server.git
npm i
```

### Attention: this project requires .env inside ./src directory

## .env example
```
const path = require('path')

module.exports = {
  ROOT: path.join(path.dirname(__filename), '../', 'public'),
  TOKEN_SECRET: 'secret'
}

```


#### Start
```
./start.sh
```

Will listen on port `localhost:8080`

Convenient way to test it is to use [Postman](https://www.getpostman.com/)
