const { log } = console;
const app = document.getElementById("msg");


window.onload = () => {
    const search = window.location.search;
    let id = extractId(search);
    output(id);
}

function output(id) {
    log(typeof id);
}

function extractId(search) {
    let param = search.substring(search.indexOf('?') + 1, search.length);


    param = parseInt(param.split("=")[1]);

    return param;

}