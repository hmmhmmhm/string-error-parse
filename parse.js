const parse = (input)=>{
    let parse = {
        main: {},
        sub: []
    }
    
    let context1 = input.split('Error: ')
    let head = context1[0].split(`\n`)

    let context2 = head[0].split(':')
    let lineNumber = context2.pop()
    let fileName = context2.join(':')
    let lineText = head[1]

    let context3 = context1[1].split(`\nat `)
    let text = context3.shift()

    // Add Main Error Stack
    parse.main = {
        text,
        fileName,
        lineNumber,
        lineText
    }

    for(let subContext of context3){
        let context4 = subContext.split(` (`)
        let functionName = context4.shift()
        let typeName = ``
        let methodName = ``
        let context6 = functionName.split('.')
        if(context6.length == 1){
            methodName = context6[0]
        }else{
            methodName = context6.pop()
            typeName = context6.join('.')
        }
        
        let context5 = context4.join('').split(`)`)
        context5.pop()
        context5 = context5.join(`)`).split(':')
        let columnNumber = context5.pop()
        let lineNumber = context5.pop()
        let fileName = context5.join(':')

        // Add Sub Error Stack
        parse.sub.push({
            functionName,
            typeName,
            methodName,

            columnNumber,
            lineNumber,
            fileName
        })
    }
    return parse
}

module.exports = parse