RIP 0.1.0
=========

RIP (REST in peace) is a tool for sending synchroneous REST requests by using a `_METHOD` POST data. It's really useful when developing with frameworks like Slim or Lumy without using synchroneous ajax requests.

Use
---

RIP handles basic `POST`, `PUT` and `DELETE` requests.

```javascript
RIP.POST(<url>,[data]);
RIP.PUT(<url>,[data]);
RIP.DELETE(<url>,[data]);

RIP.POST('/newclient',{
    firstname   : 'Foo',
    lastname    : 'Bar',
    age         : 27,
    children    : [
        'Audrey',
        'Nicholas',
        'Alison'
    ]
});
```

You can manage specific request types with :

```javascript
RIP.map('REQUEST_TYPE','/someurl',{
    foo : 'bar'
});
```

License
-------

MIT license everywhere!
