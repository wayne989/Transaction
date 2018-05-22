package com.access.transaction.api;

import com.access.transaction.domain.model.TransactionDetail;
import com.access.transaction.domain.model.TransactionItem;
import com.access.transaction.domain.service.TransactionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api")
public class TransactionController{
    @Autowired
    private TransactionService transactionService;

    @Value("${api.authentication.enabled}")
    boolean apiAuthenticationEnabled;

    @GetMapping(value="/transaction/list", produces={"application/json"})
    @ResponseStatus(HttpStatus.OK)
    public List<TransactionItem> listTransactions(){
        return transactionService.findAll();
    }

    @GetMapping(value="/transaction/get/{id}", produces={"application/json"})
    @ResponseStatus(HttpStatus.OK)
    public TransactionDetail getTransaction(@PathVariable("id") String idString){
        Long id = null;
        // in case of invalid integer, the NumberFormatException will be handled global handler
        id = Long.parseLong(idString);
        TransactionDetail transactionDetail = null;
        transactionDetail = transactionService.findById(id);
        return transactionDetail;
    }

    @PostMapping(value="/transaction/save", produces={"application/json"})
    @ResponseStatus(HttpStatus.CREATED)
    public TransactionDetail listTransactions(@RequestBody @Validated TransactionDetail transactionDetail){
        return transactionService.addOrReplace(transactionDetail);
    }

    @DeleteMapping(value="/transaction/remove/{id}", produces={"application/json"})
    @ResponseStatus(HttpStatus.OK)
    public TransactionDetail listTransactions(@PathVariable("id") @Validated Long id){
        return transactionService.delete(id);
    }

    @GetMapping(value="/user", produces={"application/json"})
    @ResponseStatus(HttpStatus.OK)
    public Map<String,String> user(Principal principal) {
        Map<String, String> map = new LinkedHashMap<String, String>();
        if(principal!=null){
            map.put("name", principal.getName());
            if(principal instanceof Authentication){
                Authentication authentication = (Authentication) principal;
                map.put("authenticated", String.valueOf(authentication.isAuthenticated()));
            }else{
                map.put("authenticated", String.valueOf(false));
            }
        }else{
            map.put("name", "");
            map.put("authenticated", String.valueOf(false));
        }
        if(!apiAuthenticationEnabled) {
            map.put("name", "AlwaysAuthenticated");
            map.put("authenticated", String.valueOf(true));
        }
        return map;
    }
}
