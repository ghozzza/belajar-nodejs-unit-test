import winston from 'winston'
const callAsync = async () => {
    return Promise.reject("ups")
}
const logger = winston.createLogger({
    level: 'info',
    transports: [
        new winston.transports.Console({}),
        new winston.transports.File({
            handleExceptions: true,
            handleRejections: true,
            filename: 'exception.log'
        })
    ]
})
callAsync()