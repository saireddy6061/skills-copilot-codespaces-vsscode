// Create web server and listen to port 3000
// http://localhost:3000

var http = require('http');
var url = require('url');

var comments = [];

var server = http.createServer(function(req, res) {
  var url_parts = url.parse(req.url, true);
  var query = url_parts.query;

  if (url_parts.pathname === '/add_comment') {
    comments.push(query.comment);
    res.end('Comment added');
  } else if (url_parts.pathname === '/comments') {
    res.end(JSON.stringify(comments));
  } else {
    res.end('Invalid URL');
  }
});

server.listen(3000, function() {
  console.log('Server running at http://localhost:3000');
});
