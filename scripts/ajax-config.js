
$.ajaxPrefilter(function(options, originalOptions, jqXHR){
  if (options.url.match(/api.parse.com/)) {
    options.headers = options.headers || {};
    options.headers['X-Parse-Application-Id'] = "mndpWjZICJn9mUTLSE33fWlwcVRTz9yN9KAIt51g";
    options.headers['X-Parse-REST-API-Key'] = "fOOzRlEKW2SHF6mc7MjMOmtbTtjwURjaWusxQzVo";
  }

});
