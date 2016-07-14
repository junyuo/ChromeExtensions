/* The DOMContentLoaded event is fired when the initial HTML document 
 * has been completely loaded and parsed, without waiting for stylesheets, 
 * images, and subframes to finish loading.
 */
document.addEventListener('DOMContentLoaded', function() {

    var searchBtn = document.getElementById('doSearch'); 

    // Execute the following steps as user click Search button       
    searchBtn.addEventListener('click', function(){      
        // Gets query string 
        var queryString = document.getElementById('queryString').value;

        // Creates URL with query string
        var newUrl = 'https://www.flickr.com/search/?q='+queryString;

        // Creates a new tab.
        chrome.tabs.create({ url : newUrl});
    }, false);

}, false);    