# "Advanced" Options

Here is some `totaly optional` advanced options you can use.

## Api authorization header
If you want to allow only authenticated clients to post to your board, you can set a `CLIENT_AUTH_TOKEN` env variable and now only users who set a `Authorization: Bearer ?????` header in the request can send requests to your board.

### Configure :: Nodejs

