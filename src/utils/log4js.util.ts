import log4js from 'log4js'

export class Log4js {

    public config(){
        
        log4js.configure({
            appenders: { log: { type: 'file', filename: 'example.log' } },
            categories: {
                default: {
                    appenders: ['log'], level: 'info'
                }
            }
        });
    }

    public static logTrace(mensaje: string) {

        const logger = log4js.getLogger('LOG');
        logger.trace(mensaje);
    }
    public static logInfo(mensaje: string) {

        const logger = log4js.getLogger('LOG');
        logger.info(mensaje);
    }
    public static logError(mensaje: string) {

        const logger = log4js.getLogger('LOG');
        logger.error(mensaje);
    }
    public static logFatal(mensaje: string) {

        const logger = log4js.getLogger('LOG');
        logger.fatal(mensaje);
    }

}

