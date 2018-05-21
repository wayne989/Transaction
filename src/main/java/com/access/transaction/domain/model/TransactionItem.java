package com.access.transaction.domain.model;

import lombok.*;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;
import java.util.Date;

/**
 * This is Domain class which is used for service returned object, decoupling dbo object from the database.
 * @Data generates all the boilerplate that is normally associated with simple POJO
 * @AllArgsConstructor is from lombok pre-compiler to generate the public constructor with all arguments

 */
@Data
@AllArgsConstructor(access = AccessLevel.PUBLIC)
@NoArgsConstructor
public class TransactionItem implements Comparable<TransactionItem> {

    private Long id;
    private Date transactionDate;
    private String requestor;
    private String location;
    private String status;

    @Override
    public int compareTo(TransactionItem anotherTransactionItem) throws ClassCastException {
        int rtnValue = 0;
        if (this.getId() < anotherTransactionItem.getId()) {
            rtnValue = 1;
        } else {
            rtnValue = -1;
        }
        return rtnValue;
    }
}