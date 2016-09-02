com.henryschein.esynctools.digitalhighway.webservice = 'https://esyncws1-qa.ident.com/digitalhighwaywebservice.asmx/'
com.henryschein.commService.webservice = 'https://commservice1-stg.ident.com/smsgateway?wsdl'
com.threepointdata.onlinebooking.webservice = 'https://ascend-sandbox.3pointdata.com/ascend'
com.henryschein.communication.qrService = 'https://qr-qa.ident.com'
com.henryschein.communication.fromEmailAddress = 'reply@ident.com'
com.henryschein.citiService.webservice = 'https://citigroupsoasit.citigroup.com/ABWebService.asmx'
com.henryschein.monerisService.webservice = 'esplusqa.moneris.com'
com.henryschein.onlinepm.tierName = 'QA'
com.henryschein.onlinepm.browserPushPublishWebServiceUrl = 'http://changenotification-dev.ident.com:10080/changenotification/BrowserPushWebService.asmx'
com.henryschein.onlinepm.browserPushWebServiceUrl = 'https://changenotification-dev.ident.com/changenotification/websync.ashx'
com.henryschein.onlinepm.analyticsKey = 'UA-35503542-5'
com.henryschein.onlinepm.integrationServicesUrl = 'http://opmoutbound-qa.ident.com/integrationServices/NEAAttachment'
grails.resources.mappers.googleclosurecompiler.compilation_level = 'SIMPLE_OPTIMIZATIONS'
grails.resources.mappers.googleclosurecompiler.compilerOptions = [prettyPrint: false]
com.henryschein.onlinepm.bundler.waitLimit = 150000
com.henryschein.onlinepm.serverUrl = 'https://ascend-qa.ident.com'
com.henryschein.onlinepm.onlinebooking.bookingsRequested.url = 'http://ascend-qa.ident.com:10080/patientBooking/bookingsRequested'
com.henryschein.onlinepm.enableUIAnalytic = true
com.henryschein.onlinepm.enableUIErrorLogging = true
com.henryschein.onlinepm.enableOAUTH = true
com.henryschein.onlinepm.OAUTHAuthorizationCodeURL = 'http://ascend-qa.ident.com:10080/oauth/authorize'
com.henryschein.onlinepm.quartz.serverName = 'OPMQUAAPPV03'

com.henryschein.onlinepm.AllowedPatientSMSNumbers = ['8017258376', '8013100831','6176056738','7813695083','8013625332','8018333744','8018595326','8013684569','8015416370','6185813856','8015029444','8017920382','8013686231','8016232247','8015414547','8016613724','8013804358','8013721520','3852001087','3218021230','6468012204','6465436368','5077222439','5712494836','8016526242','8018221700']
com.henryschein.onlinepm.AllowedPatientEmailAddresses = ['charlie.emig@henryschein.com','jeff.edde@henryschein.com','danny.jessop@henryschein.com','bryson.griffin@henryschein.com','daniel.larsen@henryschein.com','bryan.campbell@henryschein.com','mhol@softserveinc.com','okochet@softserveinc.com','lvrub@softserveinc.com','jason.bender@henryschein.com','jeff.scadden@henryschein.com','gryphon.test@henryschein.com','jennifer.hazel@henryschein.com','jemma4@hotmail.com','ushsijhazel@gmail.com','ushsijhazel@outlook.com','ushsijhazel@hotmail.com','ushsijhazel@live.com','ushsijhazel@yahoo.com','ushsijhazel@aol.com', 'joshua.johnson@henryschein.com', 'daren.bender@henryschein.com', 'michael.larsen@henryschein.com', 'deric.hughes@henryschein.com', 'adam.mcdaniel@henryschein.com', 'dtxascendpm@gmail.com', 'rmahom@softserveinc.com', 'lvrub@softserveinc.com', 'orad@softserveinc.com', 'adugin@softserveinc.com', 'doliynyk@softserveinc.com', 'Daria.Oleinyk@henryschein.com', 'ktaras@softserveinc.com', 'oplakh@softserveinc.com', 'onoch@softserveinc.com', 'vtkach@softserveinc.com']
dataSource.jndiName = "java:comp/env/jdbc/Gryphon"
			
springsession.enabled = true
//springsession.strategy.cookie.name = "JSESSIONID"

//com.henryschein.session.secure = true



log4j = {
    appenders {
        rollingFile name: "stacktrace", maxFileSize: '100MB', maxBackupIndex: 10, file: "./logs/stacktrace.log"

        //application's log appender. With layout, it logs context information from MDC object, filled by Log4jIdAppenderFilter from CommonFilters
        rollingFile (name: "onlinepm", maxFileSize: '100MB', maxBackupIndex: 10, file: "./logs/onlinepm.log",
                layout: pattern(conversionPattern: "%d{dd MMM yyyy HH:mm:ss,SSSZZ} %p: [%.4X{sessionID}] [%X{organizationID}] [%X{userID}] [%t] [%c{4}] %m%n"))
				
		rollingFile (name: "AnalyticLogUI", maxFileSize: '100MB', maxBackupIndex: 10, file: "./logs/AnalyticLogUI.log",
                layout: pattern(conversionPattern: "%d{dd MMM yyyy HH:mm:ss,SSSZZ} %p: [%.4X{sessionID}] [%X{organizationID}] [%X{userID}] [%t] %m%n"))
				
		 //application's log appender. With layout, it logs front end errors
        rollingFile (name: "FrontEndErrors", maxFileSize: '100MB', maxBackupIndex: 10, file: "./logs/FrontEndErrors.log",
                layout: pattern(conversionPattern: "%d{dd MMM yyyy HH:mm:ss,SSSZZ} %p: [%.4X{sessionID}] [%X{organizationID}] [%X{userID}] [%t] %m%n"))		
		
		rollingFile (name: "RedisServer", maxFileSize: '100MB', maxBackupIndex: 10, file: "./logs/RedisServer.log",
                layout: pattern(conversionPattern: "%d{dd MMM yyyy HH:mm:ss,SSSZZ} %p: SessionID=\"%X{sessionID}\" OrganizationID=\"%X{organizationID}\" UserID=\"%X{userID}\" Method=\"%X{requestMethod}\" URI=\"%X{requestURI}\" Thread=\"%t\" %m%n"))
    				
    }

    //logging levels should be configured separately by environments for fine-tuning
            /**
             * In production, several classes are disabled for logging to prevent filling log files with useless info
             *  These classes are set to 'error' log level or to 'off' if they produces redundant data on error level.
             */

            //log level for all application with modules:
            root {
                warn  'onlinepm'
            }					
			
            //log level for all application artifacts (services, controllers, etc)
            info  'grails.app',
                  'com.henryschein.onlinepm' 			
			
            //Http session creation and destroy events
            debug	'com.henryschein.onlinepm.core.security.spring.GryphonHttpSessionEventPublisher',
                    //binding Http session with Spring Security context
                    'com.henryschein.onlinepm.core.security.spring.GryphonSessionRegistryImpl'

            //Http session creation and destroy events
            debug	'com.henryschein.onlinepm.core.security.spring.GryphonHttpSessionEventPublisher',
                    //binding Http session with Spring Security context
                    'com.henryschein.onlinepm.core.security.spring.GryphonSessionRegistryImpl'

            //disabled
            error   'grails.app.services.com.henryschein.onlinepm.BundlerService', //method generateBundlerInputFile(bundle) contains 2 redundant log messages

                    //outputs only 2 uninformative messages
                    'grails.app.services.com.henryschein.onlinepm.RecareAvailabilityService',

                    //these three classes outputs same info about missing resources
                    //'org.grails.plugin.resource.ResourceMeta',     //not included, because posts messages on error level
                    'org.grails.plugin.resource.util.ResourceMetaStore',
                    'grails.app.taglib.org.grails.plugin.resource.ResourceTagLib'

            off     'org.grails.plugin.resource.ResourceMeta',      //produces a lot on error level
                    'org.codehaus.groovy.grails.web.errors.GrailsExceptionResolver'     //disabled to prevent doubling log info. The same info produces com.henryschein.onlinepm.ErrorController
					
			info additivity: false, AnalyticLogUI: 'grails.app.controllers.com.henryschein.onlinepm.FrontEndAnalyticLogController'
			info additivity: false, FrontEndErrors: 'grails.app.controllers.com.henryschein.onlinepm.FrontEndLoggingController'
			info additivity: false, RedisServer: 'com.henryschein.onlinepm.core.http.session.GryphonJedisConnection'
			
//loggers for major system components
//    error  'org.codehaus.groovy.grails.web.servlet',  //  controllers
//            'org.codehaus.groovy.grails.web.pages', //  GSP
//            'org.codehaus.groovy.grails.web.sitemesh', //  layouts
//            'org.codehaus.groovy.grails.web.mapping.filter', // URL mapping
//            'org.codehaus.groovy.grails.web.mapping', // URL mapping
//            'org.codehaus.groovy.grails.commons', // core / classloading
//            'org.codehaus.groovy.grails.plugins', // plugins
//            'org.codehaus.groovy.grails.orm.hibernate', // hibernate integration
//            'org.springframework',
//            'org.hibernate',
//            'net.sf.ehcache.hibernate',
//            'grails.plugins.springsecurity',
//            'grails.plugin.springcache',
//            'org.codehaus.groovy.grails.plugins.springsecurity',
//            'org.apache.http.headers',
//            'grails.plugin.databasemigration',
//            'liquibase'

}