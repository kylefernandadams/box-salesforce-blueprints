# box-ui-elements-aura
Box UI Elements Lightning example that leverages Salesforce Lightning Aura components.

# Related Documentation
   * [Lightning Aura Components](https://developer.salesforce.com/docs/component-library/overview/components)
   * [Box UI Elements](https://developer.box.com/en/guides/embed/ui-elements/)
   * [Box Token Exchange](https://developer.box.com/en/guides/embed/ui-elements/access/)

## Pre-Requisites

1. Ensure you've completed pre-requisites in the [parent project documentation](../README.md)
2. Open the source from this repo in VS Code.
3. In VS Code, use the cmd+shift+p shortcut and select SFDX: Authorize Org
4. Decrypt your Box JWT Private Key using the [parse_box_config.py](/scripts/parse_box_config.py) script. The script will decrypt your Box-generated application config file and create a new sfdc_box_config.json file at the root of the sfdx project.
   
    > Note: this is necessary since Salesforce will throw an exception if you try to use an encrypted private key.

```
python3 ./scripts/parse_box_config.py /path/to/12345_box_congig.json
```
5. Update the [BoxConnection](/force-app/main/default/classes/BoxConnection.cls) Apex class with the values found in the newly generated sfdc_box_config.json file.

    * [String publicKeyId = 'PUBLIC_KEY_ID';](/force-app/main/default/classes/BoxConnection.cls#L11)
    * [String privateKey = 'DECRYPTED_PRIVATE_KEY';](/force-app/main/default/classes/BoxConnection.cls#L12)
    * [String enterpriseId = 'ENTERPRISE_ID';](/force-app/main/default/classes/BoxConnection.cls#L13)
    * [String clientId = 'CLIENT_ID';](/force-app/main/default/classes/BoxConnection.cls#L14)
    * [String clientSecret = 'CLIENT_SECRET';](/force-app/main/default/classes/BoxConnection.cls#L14)
6. Deploy your project source to either you scratch org or developer org in the next section.

## Deploy to your Org
Push to Scratch Org:
```
sfdx force:source:push
```

Deploy to Developer/Production Org:
```
sfdx force:source:deploy -p force-app -u username@company.com
```
6. In the [Box Developer Console](https://account.box.com/developers/services) configure your application CORS domains as per the following documentation:
  > Note: This may not be a comprehensive list. When testing your Lightning component, monitor the Chrome/Firefox dev tools console output for any CORS errors.

  * https://developer.box.com/en/guides/applications/custom-apps/jwt-setup/#cors-domains with the following Salesforce Lightning Domains
  * https://<your_custom_domain>-dev-ed.lightning.force.com : General Lightning domain
  * https://<your_custom_domain>-dev-ed--c.container.lightning.com : Lightning container domain
  * https://<your_custom_domain>.livepreview.salesforce-communities.com : Communities preview


## Project Contents
1. [ContentExplorer](/force-app/main/default/aura/ContentExplorer): Lightning Aura component
    * [ContentExplorer.cmp](/force-app/main/default/aura/ContentExplorer/ContentExplorer.cmp): View / Markup that also contains the lightning:contain (ie iFrame)
    * [ContentExplorer-meta.xml](/force-app/main/default/aura/ContentExplorer/ContentExplorer.cmp-meta.xml): Metadata File
    * [ContentExplorer.css](/force-app/main/default/aura/ContentExplorer/ContentExplorer.css): Contains styles for the component.
    * [ContentExplorer.design](/force-app/main/default/aura/ContentExplorer/ContentExplorer.design): Containing the Display name for the component. File required for components used in Lightning App Builder, Lightning pages, Experience Builder, or Flow Builder.
    * [ContentExplorer-meta.svg](/force-app/main/default/aura/ContentExplorer/ContentExplorer.svg): Custom icon resource for components used in the Lightning App Builder or Experience Builder.
    * [ContentExplorerController.js](/force-app/main/default/aura/ContentExplorer/ContentExplorerController.js): Contains client-side controller methods to handle events in the component.
    * [ContentExplorerHelper.js](/force-app/main/default/aura/ContentExplorer/ContentExplorerHelper.js): NOT USED - JavaScript functions that can be called from any JavaScript code in a component’s bundle.
    * [ContentExplorerRenderer.js](/force-app/main/default/aura/ContentExplorer/ContentExplorerRenderer.js): NOT USED - Client-side renderer to override default rendering for a component.
2. [ContentExplorerController](/force-app/main/default/classes/ContentExplorerController.cls): Apex server-side controller that creates a Box JWT Connection and contains token exchange logic.
3. [staticresources/explorer](/force-app/main/default/staticresources/explorer): Static application source files for the Content Explorer Box UI Element.
4. [staticresources/preview](/force-app/main/default/staticresources/preview): Static application source files for the Content Preview Box UI Element.
6. [CSP Trusted Sites](/force-app/main/default/cspTrustedSites): This essentially whitelists the pertinent Box URLs in the Salesforce CSP Trusted Sites setup page.
    > Why manually configure [CSP Trusted Sites](https://help.salesforce.com/articleView?id=csp_trusted_sites.htm) for Box when you can automate it?
    > Note: You may all need to update Remote Site Settings found in the Setup.


## Disclaimer
This project is a collection of open source examples and should not be treated as an officially supported product. Use at your own risk. If you encounter any problems, please log an [issue](https://github.com/kylefernandadams/box-salesforce-blueprints/issues).

## License

The MIT License (MIT)

Copyright (c) 2020 Kyle Adams

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
