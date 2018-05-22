package com.access.transaction.domain.repository;

import com.access.transaction.domain.repository.entity.TransactionDetailDbo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
@SuppressWarnings("unchecked")
public interface TransactionDetailRepository extends JpaRepository<TransactionDetailDbo, Long> {
    Optional<TransactionDetailDbo> findById(Long id);
    TransactionDetailDbo save(TransactionDetailDbo transactionDetailDbo);
}
