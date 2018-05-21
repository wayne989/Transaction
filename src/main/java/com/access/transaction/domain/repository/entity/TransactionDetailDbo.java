package com.access.transaction.domain.repository.entity;

import lombok.*;
import lombok.experimental.Tolerate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;
import java.util.Date;

/**
 * This is Entity class for database object, corresponding to transaction table in the database.
 * @Data generates all the boilerplate that is normally associated with simple POJO
 * @Entity to indicate this is JPA entity
 * @Table to indicate the name of table
 * @AllArgsConstructor is from lombok pre-compiler to generate the public constructor with all arguments
 * EntityListeners is to enable auditing entity events.
 *
 * create table transaction (
 *   id identity not null,
 *   transaction_date date not null,
 *   requestor varchar(50),
 *   location varchar(30),
 *   status varchar(20),
 *   transaction_code varchar(20),
 *   description clob,
 *   primary key (id)
 * );
 *
 */
@Data
@Entity
@Table(name="transaction")
@RequiredArgsConstructor(access = AccessLevel.PUBLIC)
@NoArgsConstructor
@EntityListeners(AuditingEntityListener.class)
public class TransactionDetailDbo implements Comparable<TransactionDetailDbo> {
    @NonNull
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @NonNull
    @Temporal(TemporalType.DATE)
    @Column(name = "transaction_date")
    private Date transactionDate;

    @NonNull
    @Column(name = "requestor")
    private String requestor;

    @NonNull
    @Column(name = "location")
    private String location;

    @NonNull
    @Column(name = "status")
    private String status;

    @NonNull
    @Column(name = "transaction_code")
    private String transactionCode;

    @NonNull
    @Lob
    @Column(name = "description")
    private String description;

    // lastUpdate is the version field for jpa optimistic locking
    // the framework will compare the version number prior to performing update.
    // if version at update time is different from the previous retrival time,
    // then OptimisticLockException will be thrown
    @Version
    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "last_update")
    private Date lastUpdate;

    @Tolerate
    public TransactionDetailDbo(TransactionItemDbo transactionItemDbo, String transactionCode, String description) {
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
    public int compareTo(TransactionDetailDbo anotherTransactionDetailDbo) throws ClassCastException {
        int rtnValue = 0;
        if (this.getId() < anotherTransactionDetailDbo.getId()) {
            rtnValue = 1;
        } else {
            rtnValue = -1;
        }
        return rtnValue;
    }
}