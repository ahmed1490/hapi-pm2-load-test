'use strict';

const Hapi = require('hapi');

const server = new Hapi.Server();
server.connection({ port: 3000 });
var i = 0;

server.route({
    method: 'GET',
    path: '/',
    handler: function (request, reply) {
	console.log('Server req', i++);
        reply('Hello, world!');
    }
});

server.route({
    method: 'GET',
    path: '/{name}',
    handler: function (request, reply) {
        reply('Hello, ' + encodeURIComponent(request.params.name) + '!');
    }
});

server.start(() => {
    console.log('Server running at:', server.info.uri);
});
