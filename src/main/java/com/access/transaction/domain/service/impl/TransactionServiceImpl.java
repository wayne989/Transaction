package com.access.transaction.domain.service.impl;

import com.access.transaction.common.ObjectMapper;
import com.access.transaction.domain.model.TransactionDetail;
import com.access.transaction.domain.model.TransactionItem;
import com.access.transaction.domain.repository.TransactionDetailRepository;
import com.access.transaction.domain.repository.TransactionItemRepository;
import com.access.transaction.domain.repository.entity.TransactionDetailDbo;
import com.access.transaction.domain.repository.entity.TransactionItemDbo;
import com.access.transaction.domain.service.TransactionService;
import com.access.transaction.logging.Timed;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class TransactionServiceImpl implements TransactionService {

    private TransactionDetailRepository transactionDetailRepository;
    private TransactionItemRepository transactionItemRepository;

    public TransactionServiceImpl(@Autowired TransactionDetailRepository transactionDetailRepository, @Autowired TransactionItemRepository transactionItemRepository){
        super();
        this.transactionDetailRepository = transactionDetailRepository;
        this.transactionItemRepository = transactionItemRepository;
    }

    @Override
    @Timed
    public TransactionDetail findById(Long id) {
        TransactionDetail transactionDetail = null;
        if(id != null) {
            Optional<TransactionDetailDbo> transactionDetailOpt = transactionDetailRepository.findById(id);
            if(transactionDetailOpt.isPresent()){
                TransactionDetailDbo transactionDetailDbo = transactionDetailOpt.get();
                transactionDetail = ObjectMapper.fromDbo(transactionDetailDbo);
            }
        }
        return transactionDetail;
    }

    @Override
    @Timed
    public List<TransactionItem> findAll() {
        List<TransactionItemDbo> transactionItemDboList = transactionItemRepository.findAll();
        List<TransactionItem> TransactionItemList = transactionItemDboList.stream().map(transactionItemDbo -> ObjectMapper.fromDbo(transactionItemDbo)).collect(Collectors.toList());
        return TransactionItemList;
    }

    @Override
    @Timed
    public TransactionDetail addOrReplace(TransactionDetail transactionDetail) {
        TransactionDetailDbo transactionDetailDbo = ObjectMapper.toDbo(transactionDetail);
        transactionDetailDbo = transactionDetailRepository.save(transactionDetailDbo);
        return ObjectMapper.fromDbo(transactionDetailDbo);
    }

    @Override
    @Timed
    public TransactionDetail delete(Long id) {
        TransactionDetail transactionDetail = null;
        if(id != null) {
            Optional<TransactionDetailDbo> transactionDetailOpt = transactionDetailRepository.findById(id);
            if(transactionDetailOpt.isPresent()){
                TransactionDetailDbo transactionDetailDbo = transactionDetailOpt.get();
                transactionDetail = ObjectMapper.fromDbo(transactionDetailDbo);
                transactionDetailRepository.delete(transactionDetailOpt.get());
            }
        }
        return transactionDetail;
    }
}
