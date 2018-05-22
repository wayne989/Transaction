package com.access.transaction.logging;

import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.AfterReturning;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Pointcut;
import org.slf4j.Logger;
import org.springframework.context.annotation.Configuration;

@Aspect
@Configuration
public class LoggingPointcutConfig {

    @Pointcut("execution(* com.access.transaction.api.TransactionController.*(..))")
    public void serviceExecution(){}

    @AfterReturning(value="com.access.transaction.logging.LoggingPointcutConfig.serviceExecution()", returning = "result")
    public void serviceAfterReturning(JoinPoint joinPoint, Object result){
        Logger logger = TransactionServiceLogger.getPayloadLogger();
        String signatureStr="";
        Object[] signatureArgs = joinPoint.getArgs();
        signatureStr = convertArgsToString(signatureArgs);
        logger.info("Method called: {} Request Parameters: {} Response: {}", joinPoint.getSignature().getName(), signatureStr, result!=null?result.toString():"null");
    }

    @Around(value = "@annotation(com.access.transaction.logging.Timed)", argNames = "joinPoint")
    public Object performanceLogging(ProceedingJoinPoint joinPoint) throws Throwable{

        Logger logger = TransactionServiceLogger.getPerformanceLogger();
        long startTime = System.currentTimeMillis();
        String signatureStr="";
        try {
            Object[] signatureArgs = joinPoint.getArgs();
            signatureStr = convertArgsToString(signatureArgs);
            return joinPoint.proceed();
        }finally {

            long timeTaken = System.currentTimeMillis() - startTime;
            logger.info("Method called: {} Parameters: {} Duration: {}ms", joinPoint.getSignature(), signatureStr, timeTaken);
        }
    }

    /**
     * convert Method Arguments into String with comma delimiter and embrace with []
     * @param signatureArgs
     * @return
     */
    private static String convertArgsToString(Object[] signatureArgs){
        String signatureStr = "";
        for(Object signatureArg: signatureArgs){
            if(signatureArg!=null) {
                signatureStr = signatureStr + signatureArg.toString() + ", ";
            }
        }
        int commaPosition = signatureStr.lastIndexOf(",");
        if( signatureStr.length() >= 2 && commaPosition > -1){
            signatureStr = "[" + signatureStr.substring(0, commaPosition) + "]";
        }else{
            signatureStr = "[]";
        }
        return signatureStr;
    }
}
