# Apply With LinkedIn Developer Sample  

This is a sample app that allows you to plug in an API key and an integration context to see what the rendered widget looks like. It also shows what a sample success or confirmation page looks like.

## Getting Started

Get a fresh copy of the project from the developer docs page to make sure you have the latest version. Make sure to host the files in any webserver of your choice so you have a domain to whitelist. Make sure to whitelist the domain you are hosting on (for eg: http://localhost:5000) in the ValidJSSdkDomains field using the provisioning API.

## Running the demo

Open the starting page which is the apply.html. 

For eg:

```
http://localhost:5000/apply.html
```


## Steps to see the AWLI Widget


1. Enter a valid API Key with the current domain whitelisted.

2. Enter a valid integration context received from the customer configuration plugin.

3. Click on the load button to load the apply with linkedin widget on the page.

4. Click on the AWLI button, enter Linkedin credentials and sign in

5. Once Oauth screen popsup click "Allow" to prefill the form, check the console for the full output.

5. Verify the prefilled form and click on submit to submit the application.

6. Once redirected to the confirm page, look at the trackConversion call in developer tools.


## Error handling

If the widget does not load or you have any errors prefilling the form please check the console for errors. Also when in the confirmation page, please check the console to make sure there are no errors trying to initialize the widget.

Error may look like:

```
Error trying to initialize the widget! Error is :<Error>
```


