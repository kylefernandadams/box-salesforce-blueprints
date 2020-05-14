# Box Salesforce Blueprints
The Box Salesforce Blueprints project is a collection of examples that can be use independently of the Box for Salesforce managed package or in conjunction. These examples are designed to be used for demonstration, development, and test purposes.

## Examples
1. [box-ui-elements-aura](/box-ui-elements-aura): Box UI Elements Lightning example that leverages Salesforce Lightning Aura components.
2. [box-ui-elements-lcc](/box-ui-elements-lcc): Box UI Elements Lightning example that leverages the lightning:container component and messaging system.


## Pre-Requisites

1. Clone this github repo.
2. Setup your Salesforce DX environment: https://developer.salesforce.com/docs/component-library/documentation/lwc/lwc.install_setup_develop
3. Install the Box Salesforce SDK Unmanaged Package:

    * Production/Developer Org: https://login.salesforce.com/packaging/installPackage.apexp?p0=04t4P000000i6J9
    * Sandbox Org: https://test.salesforce.com/packaging/installPackage.apexp?p0=04t4P000000i6J9

4. Create a JWT Application in the [Box Developer Console](https://account.box.com/developers/services) using the following [Setup Guide.](https://developer.box.com/en/guides/applications/custom-apps/jwt-setup/)
5. Open the source from this repo in VS Code.
6. In VS Code, use the cmd+shift+p shortcut and select SFDX: Authorize Org.
7. Change directory to one of the example projects.
8. Refer to the documentation in each of the example projects.
* OPTIONAL: Install and Configure the Box for Salesforce Managed Package: https://community.box.com/t5/How-to-Guides-for-Integrations/Installing-and-Configuring-Box-For-Salesforce/ta-p/180
    > Note: Dont forget to add the Box VisualForce components to each of the record type layouts.

## Disclaimer
This project is a collection of open source examples and should not be treated as an officially supported product. Use at your own risk. If you encounter any problems, please log an [issue](https://github.com/kylefernandadams/box-salesforce-blueprints/issues).

## License

The MIT License (MIT)

Copyright (c) 2020 Kyle Adams

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
