const ajax = {
  get(url) {
    return new Promise((resolve, reject) => {
      const request = new XMLHttpRequest();
      request.open('GET', url, true);

      request.onload = function() {
        if (this.status >= 200 && this.status < 400) {
          // Success!
          var resp = this.response;
          resolve(this.response);
        } else {
          // We reached our target server, but it returned an error
          reject(undefined);
        }
      };

      request.onerror = function() {
        // There was a connection error of some sort
        reject(undefined);
      };

      request.send();
    });
  }
};
