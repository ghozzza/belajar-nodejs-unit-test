import winston from 'winston'

test("logging with format", () => {
    const logger = winston.createLogger({
        level: 'info',
        // format: winston.format.json(),
        // format: winston.format.simple(),
        format: winston.format.logstash(),
        transports: [
            new winston.transports.Console({})
        ]
    })
    logger.info('hello info')
})
test("logging with printf", () => {
    const logger = winston.createLogger({
        level: 'info',
        // format: winston.format.json(),
        // format: winston.format.simple(),
        // format: winston.format.logstash(),
        format: winston.format.printf(log => {
            return `${new Date()}: ${log.level.toUpperCase()}: ${log.message}`
        }),
        transports: [
            new winston.transports.Console({})
        ]
    })
    logger.info('hello info')
    logger.error('hello error')
    logger.warn('hello warn')
})