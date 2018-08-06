# Sand Castle Logger

![sand-castle-logger](docs/res/sand-castle-logger-cover.png)


## About
Sand castle logger is a simple realtime logger for your applications.

How it works:

1) Open the dashboard on your browser: <br />
![open-browser](docs/res/browser-empty.png)


2) Send a request to the api: <br />
![send-request](docs/res/send-request.png)


3) View the log appears on dashboard: <br />
![dashboard-with-log](docs/res/dashboard-with-log.png)


And that's it =).


## Install and Run
We strongly recommend you to use Docker to avoid node version errors.

### NodeJS
* Clone this repository
* Run `npm install`
* Run `npm start`
* Open `http://localhost:3009` on your browser

### Docker
* Clone this repository
* Run `make run`
* Open `http://localhost:3009` on your browser

Available commands:
* `make run`: start the service
* `make run-with-logs`: start the service and keep console logs
* `make down`: stop the service


## Logging

### Chose your dashboard
After you install and open dashboard on your browser, you now can send logs to it.

When you open the dashboard, realize the token param on url: `http://localhost:3009/?&t=default`.

The `t=default` is customizable. You can set new value like `http://localhost:3009/?&t=potato`. It allow you to have multiple dashboards listening different namespace logs.

The name of this parameter is `namespace token`.

### Send logs to api
After you chose your dashboard (or chose to use `default`), just send a `POST` request to `http://localhost:3009/api/log/{namespace token}`.

The body of the request must be:
```json
{
	"metadata": {
		"title": "your log title",

		"type": "type of the error (default=info)",
		"icon": "font awesome icon (default=null)",
		"uuid": "a unique id for your log (default=auto-generated)"
	},
	"body": {}
}
```

When:
* `metadata.`
    * `title`: the title of the log.
    * `type` (optional): the type of the log (`error` | `info` | `success`)
    * `icon` (optional): any [Font-Awesome](http://fontawesome.io/icons/) icon.
	* `uuid` (optional): some id to let you identify your log.
* `body`: any `json object` you want to log.


**Ex:** <br />
Dashboard URL: `http://localhost:3009/?&t=my-awesome-app`

API Request:<br />
`POST http://localhost:3009/api/log/my-awesome-app`
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

![log anathomy](docs/res/log-anathomy.png)


## "Advanced"

If you want, take a look in [Advanced Options](docs/advanced.md)



## Thanks To
**Icon:** <div>Icons made by <a href="http://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>

## Release Notes

### 1.3.0
* Change: change default port to 3009 due conflicts with default webapps port (3000)
* Feat: adding docker-compose to make start/stop easier

### 1.2.2
* Feat: adding `onDisconnect` alert message

### 1.2.1
* Feat: adding `uuid` to logs.
* Fix: wrong options parse.

### 1.1.0
* Feat: adding client auth header options in advanced settings.

### 1.0.1
* Fix: cached time on log item.

### 1.0.0: First release
