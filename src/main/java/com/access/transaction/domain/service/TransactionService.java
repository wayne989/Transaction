package com.access.transaction.domain.service;

import com.access.transaction.domain.model.TransactionDetail;
import com.access.transaction.domain.model.TransactionItem;

import java.util.List;

/*
 * Service interface to decouple from its service implementation
 */
public interface TransactionService {
    TransactionDetail findById(Long id);
    List<TransactionItem> findAll();
    TransactionDetail addOrReplace(TransactionDetail transactionDetail);
    TransactionDetail delete(Long id);
}
