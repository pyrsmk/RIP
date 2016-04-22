RIP 0.3.7
=========

RIP (REST in peace) is a tool for sending synchroneous REST requests by generating a hidden `FORM` on-the-fly. It's really useful when developing with frameworks like [Slim](http://www.slimframework.com) or [Lumy](https://github.com/pyrsmk/Lumy) without using synchroneous ajax requests : it just send data like a normal `FORM` would do.

Install
-------

You can pick the minified library or install it with :

```
npm install pyrsmk-rip
bower install rip
jam install pyrsmk-rip
```

Use
---

RIP handles basic `POST`, `PUT` and `DELETE` requests, but can manage other manual request types.

```js
// API
RIP.POST(<url>, [data]);
RIP.PUT(<url>, [data]);
RIP.DELETE(<url>, [data]);
RIP.map(<type>, <url>, [data]);

// Simple example
RIP.POST('/url');


// Data example
RIP.PUT('/newclient', {
    firstname   : 'Foo',
    lastname    : 'Bar',
    age         : 27,
    children    : [
        'Audrey',
        'Nicholas',
        'Alison'
    ]
});

// Map example
RIP.map('REQUEST_TYPE', '/someurl', {
    foo: 'bar'
});
```

Please note that requests are using `_METHOD` POST data attribute, as used in Slim and Lumy. But if you need to change the name of this attribute to `__REQUEST__` (per example), you can do this:

```javascript
RIP.setRequestAttributeName('__REQUEST__');
```

License
-------

Published under the [MIT license](http://dreamysource.mit-license.org).
