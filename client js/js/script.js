var client = new ClientJS(); // Create A New Client Object

var browser = client.getBrowser(); // Get Browser

document.querySelector('.browser').innerHTML += client.getBrowser()
document.querySelector('.chrom').innerHTML += client.isChrome()
document.querySelector('.firefox').innerHTML += client.isFirefox()
document.querySelector('.os').innerHTML += client.getOS()
document.querySelector('.mobile').innerHTML += client.isMobile()
document.querySelector('.ios').innerHTML += client.isMobileIOS()
