const zod = require("zod")

 const task = zod.object({
    todo: zod.string()
})
module.exports ={ task:task}