# Box UI Elements Heroku Template
The Box UI Elements Heroku Template project is an example that uses a React.js frontend and Express backend that handles signed request logic from a Salesforce CanvasApp. These examples are designed to be used for demonstration, development, and test purposes.


## Heroku Deployment
To deploy this project to Heroku, be sure to set your environment variables in the dashboard:



## Pre-Requisites

1. Create a JWT Application in the [Box Developer Console](https://account.box.com/developers/services) using the following [Setup Guide.](https://developer.box.com/en/guides/applications/custom-apps/jwt-setup/)
2. Copy the contents of the application JSON config file.
3. Deploy the [Box Canvas App Sample](https://github.com/kylefernandadams/box-salesforce-blueprints/tree/master/box-canvas-app)
4. Copy the CONSUMER SECRET for the CanvasApp()
5. Deploy this template app to Heroku and add the environment variables below:
- `APP_NAME`
- `BOX_CONFIG`
- `SIGNED_REQUEST_CONSUMER_SECRET`
  
[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

## Disclaimer
This project is comprised of open source examples and should not be treated as an officially supported product. Use at your own risk. If you encounter any problems, please log an [issue](https://github.com/kylefernandadams/box-ui-elements-heroku-template/issues).

## License

The MIT License (MIT)

Copyright (c) 2022 Kyle Adams

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
