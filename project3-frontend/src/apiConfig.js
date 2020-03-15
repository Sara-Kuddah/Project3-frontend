
let apiURL ;
const expressPort = 5000 ;
const apiUrls = {
    development :`http://localhost:${expressPort}/api`,
    producition : `https://aqueous-atoll-85096.herokuapp.com/api`
}

if (window.location.hostname === 'localhost'){
    apiURL = apiUrls.development;
}
else {
    apiURL = apiUrls.producition;
}

export default apiURL ;