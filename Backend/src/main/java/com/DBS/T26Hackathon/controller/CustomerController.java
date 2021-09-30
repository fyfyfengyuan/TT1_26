package com.DBS.T26Hackathon.controller;


import com.DBS.T26Hackathon.models.Customer;
import com.DBS.T26Hackathon.services.CustomerService;
import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.atomic.AtomicLong;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/customers")
public class CustomerController {

    @Autowired
    CustomerService customerService;
    
    @GetMapping("/getAllCustomers")
    public List<Customer> fetchAll() {
        return customerService.getAllCustomers();
    }
    
    
    @GetMapping("/login")
    public String login(String username,String password) {
    	Customer user = customerService.findByUserName(username);
    	if (user.getPassword()==password) {
    	return "Success";
    	}else {
    		return "False";
    	}
  
    }
    
}