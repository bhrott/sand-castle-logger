# "Advanced" Options

Here is some `totaly optional` advanced options you can use.

To add advanced features to your Sand Castle Logger instance, create a `options.json` file in root folder (same path of `package.json`).

## Api authorization header
If you want to allow only authenticated clients to post to your board, you can set a `clientAuthToken` variable and now only users who set a `Authorization: Bearer ?????` header in the request can send requests to your board.

```js
// options.js
{
    "clientAuthToken": {
		// my-awesome-app -> namespace token of your board 
		// my_secret_code_123 -> the authorization bearer token
		"my-awesome-app": "my_secret_code_123"
	}
}
```

Now, in the request, the client must send this header with the log payload:

```
POST http://localhost:3000/api/log/my-awesome-app
HEADERS
    - Authorization: Bearer my_secret_code_123
```
```json
{
	"metadata": {
		"title": "/api/users/test",
		"type": "error",
		"icon": "fa-bug"
	},
	"body": {
		"error": "internal_error",
		"error_description": "unable to connect to database."
	}
}
```

