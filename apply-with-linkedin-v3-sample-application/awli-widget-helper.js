function renderWidget(params, apiKey, env) {
    let widgetContainerElem = document.querySelector('#widget-container');
    widgetContainerElem.innerHTML = '';
    let xdoorElem = document.createElement('script');
    const xdoorUrl = `https://platform.linkedin${env === 'EI' ? '-ei' : ''}.com/in.js`;
    const widgetUrl = `https://www.linkedin${env === 'EI' ? '-ei' : ''}.com/talentwidgets/extensions/apply-with-linkedin-widget-v3`;
    
    xdoorElem.src = xdoorUrl;
    xdoorElem.innerHTML = `api_key:${apiKey}
      extensions:AwliWidget@${widgetUrl}
      userSessionEnabled: true
      `;
      
    let widgetElem = document.createElement('script');
    widgetElem.type = 'IN/AwliWidget';
    for (let paramKey in params) {
        const paramValue = params[paramKey];
        widgetElem.setAttribute(paramKey,paramValue);
    }
    widgetElem.setAttribute('data-callback-method', 'handleProfileData');
    widgetElem.setAttribute('data-company-job-code', 'test-1234'); 
    // widgetElem.setAttribute('data-integration-context', params['data-integration-context']);
    // widgetElem.setAttribute('data-callback-method', 'handleProfileData');
    // widgetElem.setAttribute('data-mode', params['data-mode']);
    // widgetElem.setAttribute('data-color', params['data-color']);
    // widgetElem.setAttribute('data-size', params['data-size']);
    // // process optional params
    // OPTIONAL_PARAMS.forEach((param) => {
    //     if (params[param]) {
    //         widgetElem.setAttribute(param, params[param]);
    //     }
    // });

    widgetContainerElem.append(xdoorElem);
    widgetContainerElem.append(widgetElem);
    
}

function renderWidgetWithCustomValues(e, dataParams) {
    e.preventDefault();
    const apiKey = document.querySelector('#data-api-key').value;
    const env = document.querySelector('#env').value || 'prod';
    let params = {};
    for (let i = 0; i < dataParams.length; i++) {
        const param = dataParams[i];
        params[param] = document.querySelector(`#${param}`).value;
    }
    renderWidget(params, apiKey, env);
}
const AWLI_params = ['data-integration-context', 'data-mode', 'data-color', 'data-size'];



function init() {
    document.querySelector('#renderBtn')
        .addEventListener('click', (e) => renderWidgetWithCustomValues(e, AWLI_params));
    

}
window.addEventListener('load', init);