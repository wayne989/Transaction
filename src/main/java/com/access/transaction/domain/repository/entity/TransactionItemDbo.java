package com.access.transaction.domain.repository.entity;

import lombok.*;
import lombok.experimental.Tolerate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;
import java.util.Date;

/**
 * This is Entity class for database object, corresponding to config table in the database.
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
@AllArgsConstructor(access = AccessLevel.PUBLIC)
@NoArgsConstructor
@EntityListeners(AuditingEntityListener.class)
public class TransactionItemDbo implements Comparable<TransactionItemDbo> {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Temporal(TemporalType.DATE)
    @Column(name = "transaction_date")
    private Date transactionDate;

    @Column(name = "requestor")
    private String requestor;

    @Column(name = "location")
    private String location;

    @Column(name = "status")
    private String status;

    @Override
    public int compareTo(TransactionItemDbo anotherTransactionItemDbo) throws ClassCastException {
        int rtnValue = 0;
        if (this.getId() < anotherTransactionItemDbo.getId()) {
            rtnValue = 1;
        } else {
            rtnValue = -1;
        }
        return rtnValue;
    }
}