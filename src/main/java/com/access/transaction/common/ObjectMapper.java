package com.access.transaction.common;

import com.access.transaction.domain.model.TransactionDetail;
import com.access.transaction.domain.model.TransactionItem;
import com.access.transaction.domain.repository.entity.TransactionDetailDbo;
import com.access.transaction.domain.repository.entity.TransactionItemDbo;

/**
 * Mapper helper to convert between model object to dbo object
 */
public class ObjectMapper {

    /**
     * @param transactionDetailDbo
     * @return
     */
    public static TransactionDetail fromDbo(TransactionDetailDbo transactionDetailDbo) {
        TransactionDetail transactionDetail = null;
        if (transactionDetailDbo != null){
            transactionDetail = new TransactionDetail(
                    transactionDetailDbo.getId(),
                    transactionDetailDbo.getTransactionDate(),
                    transactionDetailDbo.getRequestor(),
                    transactionDetailDbo.getLocation(),
                    transactionDetailDbo.getStatus(),
                    transactionDetailDbo.getTransactionCode(),
                    transactionDetailDbo.getDescription()
            );
        }
        return transactionDetail;
    }

    /**
     * @param transactionDetail
     * @return
     */
    public static TransactionDetailDbo toDbo(TransactionDetail transactionDetail) {
        TransactionDetailDbo transactionDetailDbo = null;
        if (transactionDetail != null){
            transactionDetailDbo = new TransactionDetailDbo(
                    transactionDetail.getId(),
                    transactionDetail.getTransactionDate(),
                    transactionDetail.getRequestor(),
                    transactionDetail.getLocation(),
                    transactionDetail.getStatus(),
                    transactionDetail.getTransactionCode(),
                    transactionDetail.getDescription()
            );
        }
        return transactionDetailDbo;
    }

    /**
     * @param transactionItemDbo
     * @return
     */
    public static TransactionItem fromDbo(TransactionItemDbo transactionItemDbo) {
        TransactionItem transactionItem = null;
        if (transactionItemDbo != null){
            transactionItem = new TransactionItem(
                    transactionItemDbo.getId(),
                    transactionItemDbo.getTransactionDate(),
                    transactionItemDbo.getRequestor(),
                    transactionItemDbo.getLocation(),
                    transactionItemDbo.getStatus()
            );
        }
        return transactionItem;
    }

    /**
     * @param transactionItem
     * @return
     */
    public static TransactionItemDbo toDbo(TransactionItem transactionItem) {
        TransactionItemDbo transactionItemDbo = null;
        if (transactionItem != null){
            transactionItemDbo = new TransactionItemDbo(
                    transactionItem.getId(),
                    transactionItem.getTransactionDate(),
                    transactionItem.getRequestor(),
                    transactionItem.getLocation(),
                    transactionItem.getStatus()
            );
        }
        return transactionItemDbo;
    }
}
