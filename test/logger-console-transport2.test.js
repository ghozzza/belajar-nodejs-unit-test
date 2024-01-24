import winston from 'winston'
import TransportStream from 'winston-transport'

test("create new logger with new transport", () => {
    class MyTransport extends TransportStream {

        constructor(option) {
            super(option)
        }

        log(info, next) {
            console.log(`${new Date()} : ${info.level.toUpperCase()} : ${info.message}`)
            next()
        }
    }
    const logger = winston.createLogger({
        level: 'silly',
        transports: [
            new MyTransport({})
        ]
    })

    logger.error('hello error')
    logger.warn('hello warn')
    logger.info('hello info')
    logger.http('hello HTTP')
    logger.verbose('hello verbose')
    logger.debug('hello debug')
    logger.silly('hello silly')
})