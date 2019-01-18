# string-error-parse

This module parses the error message (string) of node.js.

This is very useful when you check for errors, for example, in a child process that cannot be verified by a previous instance of Error. Unlike stack-trace module, this module is only focused on interpreting string errors.



## Install

```shell
npm install string-error-parse
```



### How to use

```javascript
// Prepare Plain Error Text
var input = `H:\\Private#2019\\CODE\\@submodule\\stably_test\\test.js:16
throw new Error('hello?')
^

Error: hello?
at Interface.prompt.on (H:\\Private#2018\\CODE\\@submodule\\stably_test\\test.js:16:11)
at Interface.emit (events.js:182:13)
at Interface._onLine (readline.js:301:10)
at Interface._normalWrite (readline.js:468:12)
at Socket.ondata (readline.js:159:10)
at Socket.emit (events.js:182:13)
at addChunk (_stream_readable.js:287:12)
at readableAddChunk (_stream_readable.js:268:11)
at Socket.Readable.push (_stream_readable.js:223:10)
at Pipe.onStreamRead [as onread] (internal/stream_base_commons.js:122:17)`

// Parse the Plain Error Text
var strErrParser = require('string-error-parse')
var parsed = strErrParser(input)

// Parsed Error Object Example
var example = { main:
   { text: 'hello?',
     fileName: 'H:\\Private#2019\\CODE\\@submodule\\stably_test\\test.js',
     lineNumber: '16',
     lineText: "throw new Error('hello?')" },
  sub:
   [ { functionName: 'Interface.prompt.on',
       typeName: 'Interface.prompt',
       methodName: 'on',
       columnNumber: '11',
       lineNumber: '16',
       fileName: 'H:\\Private#2019\\CODE\\@submodule\\stably_test\\test.js' },
     { functionName: 'Interface.emit',
       typeName: 'Interface',
       methodName: 'emit',
       columnNumber: '13',
       lineNumber: '182',
       fileName: 'events.js' },
     { functionName: 'Interface._onLine',
       typeName: 'Interface',
       methodName: '_onLine',
       columnNumber: '10',
       lineNumber: '301',
       fileName: 'readline.js' },
     { functionName: 'Interface._normalWrite',
       typeName: 'Interface',
       methodName: '_normalWrite',
       columnNumber: '12',
       lineNumber: '468',
       fileName: 'readline.js' },
     { functionName: 'Socket.ondata',
       typeName: 'Socket',
       methodName: 'ondata',
       columnNumber: '10',
       lineNumber: '159',
       fileName: 'readline.js' },
     { functionName: 'Socket.emit',
       typeName: 'Socket',
       methodName: 'emit',
       columnNumber: '13',
       lineNumber: '182',
       fileName: 'events.js' },
     { functionName: 'addChunk',
       typeName: '',
       methodName: 'addChunk',
       columnNumber: '12',
       lineNumber: '287',
       fileName: '_stream_readable.js' },
     { functionName: 'readableAddChunk',
       typeName: '',
       methodName: 'readableAddChunk',
       columnNumber: '11',
       lineNumber: '268',
       fileName: '_stream_readable.js' },
     { functionName: 'Socket.Readable.push',
       typeName: 'Socket.Readable',
       methodName: 'push',
       columnNumber: '10',
       lineNumber: '223',
       fileName: '_stream_readable.js' },
     { functionName: 'Pipe.onStreamRead [as onread]',
       typeName: 'Pipe',
       methodName: 'onStreamRead [as onread]',
       columnNumber: '17',
       lineNumber: '122',
       fileName: 'internal/stream_base_commons.js' } ] }

```



## License

MIT Licensed.