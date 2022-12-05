import process from 'node:process'

const parseArgs = () => {
    process.argv.forEach((arg, index, array) => {
        if(arg.includes("--")) {
            console.log(`${arg} is ${array[index+1]}`)
        }
    })
}
parseArgs();