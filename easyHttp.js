function easyHttp() {
    this.http = new XMLHttpRequest;
}

// prototype for a GET request
easyHttp.prototype.get = function(url, callBack) {
    // defining our request type and if its async or not
    this.http.open('GET', url, true);

    // setting this to a variable to that it could be used inside the onload method
    let self = this;
    this.http.onload = function() {
        // checking if the status is ok or 200
        if (self.http.status === 200) {
            // sending the null as an error and 2nd pram as a response
            callBack(null, self.http.responseText);
        }
        // else showing the error with status
        else callBack('An Erorr Occured: ' + self.http.status);
    };

    this.http.send();
}

// prototype for a POST request
easyHttp.prototype.post = function(url, data, callBack) {
    // defining our request type and if its async or not
    this.http.open('POST', url, true);

    // setting headers
    this.http.setRequestHeader('Content-type', 'application/json')

    // setting this to a variable to that it could be used inside the onload method
    let self = this;
    this.http.onload = function() {
        // sending the null as an error and 2nd pram as a response
        callBack(null, self.http.responseText);
    };

    this.http.send(JSON.stringify(data));
}

// prototype for a UPDATE/PUT request
easyHttp.prototype.put = function(url, data, callBack) {
    // defining our request type and if its async or not
    this.http.open('PUT', url, true);

    // setting headers
    this.http.setRequestHeader('Content-type', 'application/json')

    // setting this to a variable to that it could be used inside the onload method
    let self = this;
    this.http.onload = function() {
        // sending the null as an error and 2nd pram as a response
        callBack(null, self.http.responseText);
    };

    this.http.send(JSON.stringify(data));
}

// prototype for a DELETE request
easyHttp.prototype.delete = function(url, callBack) {
    // defining our request type and if its async or not
    this.http.open('DELETE', url, true);

    // setting this to a variable to that it could be used inside the onload method
    let self = this;
    this.http.onload = function() {
        // sending the null as an error and 2nd pram as a response
        callBack(null, 'Post Deleted...');
    };

    this.http.send();
}