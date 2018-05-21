package com.access.transaction.domain.repository;

import com.access.transaction.domain.repository.entity.TransactionItemDbo;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

/**
 * this is intended for reading the table in a light weight
 * (with selected fields as described in TransactionItemDbo)
 */
public interface TransactionItemRepository  extends JpaRepository<TransactionItemDbo, Long> {
    List<TransactionItemDbo> findAll();
}
