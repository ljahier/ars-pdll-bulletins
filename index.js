const fs = require('fs')
const path = require('path')
const axios = require('axios')
const today_full = new Date().toISOString().split("T")
const today = today_full[0].split("-")
const ars_url = `https://www.pays-de-la-loire.ars.sante.fr/system/files/${today[0]}-${today[1]}/${today[0]}-${today[1]}-${today[2]} bulletin information COVID-19.pdf`
const axios_req_params = {
    method: "get",
    url: ars_url,
    responseType: "stream"
}
console.log(ars_url)
axios(axios_req_params)
    .then(function (response) {
        response.data.pipe(fs.createWriteStream(`bulletins/${today[0]}-${today[1]}-${today[2]}.pdf`));
});