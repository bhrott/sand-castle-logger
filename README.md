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
* Open `http://localhost:3000` on your browser

### Docker
* Clone this repository
* Run `sh scripts/docker/build.sh`
* Run `sh scripts/docker/run.sh`
* Open `http://localhost:3000` on your browser


## Logging

### Chose your dashboard
After you install and open dashboard on your browser, you now can send logs to it.

When you open the dashboard, realize the token param on url: `http://localhost:3000/?&t=default`.

The `t=default` is customizable. You can set new value like `http://localhost:3000/?&t=potato`. It allow you to have multiple dashboards listening differents namespace logs.

The name of this parameter is `namespace token`.

### Send logs to api
After you chose your dashboard (or chose to use `default`), just send a `POST` request to `http://localhost:3000/api/log/{namespace token}`.

The body of the request must be:
```json
{
	"metadata": {
		"title": "your log title",
		"type": "error",
		"icon": "fa-bug"
	},
	"body": {}
}
```

When:
* `metadata.`
    * `title`: the title of the log.
    * `type`: the type of the log (`error` | `info` | `success`)
    * `icon`: any [Font-Awesome](http://fontawesome.io/icons/) icon.
* `body`: any `json object` you want to log.


![log anathomy](docs/res/log-anathomy.png)

## Release Notes

### 1.0.0: First release