//Extract the domain name from a URL

/*
Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

* url = "http://github.com/carbonfive/raygun" -> domain name = "github"
* url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
* url = "https://www.cnet.com"                -> domain name = cnet"
*/

function domainName(url) {
    let abbrStr = url.replace('http://', '').replace('https://', '').replace('www.', '')
    
    let domain = abbrStr.split('.')[0]
    
    return domain
}



//CLEANED UP

function domainName(url){
    url = url.replace("https://", '');
    url = url.replace("http://", '');
    url = url.replace("www.", '');
    return url.split('.')[0];
};