package com.access.transaction.domain.model;

import com.access.transaction.domain.repository.entity.TransactionItemDbo;
import lombok.*;
import lombok.experimental.Tolerate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;
import java.util.Date;

/**
 * This is model class for service return object, decoupling the transaction dbo object from the database.
 * @Data generates all the boilerplate that is normally associated with simple POJO
 * @AllArgsConstructor is from lombok pre-compiler to generate the public constructor with all arguments
 * EntityListeners is to enable auditing entity events.
 *
 *
 */
@Data
@AllArgsConstructor(access = AccessLevel.PUBLIC)
@NoArgsConstructor
public class TransactionDetail implements Comparable<TransactionDetail> {

    private Long id;
    private Date transactionDate;
    private String requestor;
    private String location;
    private String status;
    private String transactionCode;
    private String description;

    @Tolerate
    public TransactionDetail(TransactionItemDbo transactionItemDbo, String transactionCode, String description) {
        this(
            transactionItemDbo.getId(),
            transactionItemDbo.getTransactionDate(),
            transactionItemDbo.getRequestor(),
            transactionItemDbo.getLocation(),
            transactionItemDbo.getStatus(),
            transactionCode,
            description
        );
    }

    @Override
    public int compareTo(TransactionDetail anotherTransactionDetail) throws ClassCastException {
        int rtnValue = 0;
        if (this.getId() < anotherTransactionDetail.getId()) {
            rtnValue = 1;
        } else {
            rtnValue = -1;
        }
        return rtnValue;
    }
}