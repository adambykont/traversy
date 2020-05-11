function EasyHTTP() {
    this.http = new XMLHttpRequest();
}

// Make a HTTP GET Request
EasyHTTP.prototype.get = function (url, callback) {
    this.http.open('get', url, true);

    this.http.onload = () => {
        if (this.http.status === 200) {
            callback(null, this.http.responseText);
        } else {
            callback('Error' + this.http.status, null);
        }
    }

    this.http.send();
}

// Make a HTTP POST Request
EasyHTTP.prototype.post = function (url, data, callback) {
    this.http.open('post', url, true);
    this.http.setRequestHeader('Content-type', 'application/json');

    const that = this;
    this.http.onload = function () {
        callback(null, that.http.responseText);
    }

    this.http.send(JSON.stringify(data));
}

// Make a HTTP PUT Request
EasyHTTP.prototype.put = function (url, data, callback) {
    const that = this;
    this.http.open('put', url, true);

    this.http.onload = function () {
        callback(that.http.responseText, null);
    }

    this.http.send(JSON.stringify(data));
}

// Make a HTTP DELETE Request
EasyHTTP.prototype.delete = function (url, callback) {
    const that = this;
    this.http.open('delete', url, true);
    this.http.onload = function () {
        if (that.http.status === 200) {
            callback('Post Deleted', null);
        } else {
            callback(null, 'Error: ' + that.http.status);
        }
    }
    this.http.send();
}