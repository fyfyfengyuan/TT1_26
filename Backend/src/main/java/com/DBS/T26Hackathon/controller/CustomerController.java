package com.DBS.T26Hackathon.controller;


import com.DBS.T26Hackathon.models.Customer;
import com.DBS.T26Hackathon.services.CustomerService;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;

import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.concurrent.atomic.AtomicLong;

import org.hibernate.mapping.Map;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
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
    
    
    @GetMapping("/findByUser")
    public Customer findByUser(String username) {
    	return customerService.findByUserName(username);
    }
    
    @PostMapping("/login")
    public LinkedHashMap<String, Object> login(String username,String password) {
    	Customer user = customerService.findByUserName(username);
    	LinkedHashMap<String, Object> status = new LinkedHashMap<String,Object>();
    	int login = -1;
    	if (user != null) {
	    	status.put("id", user.getId());
	    	status.put("username", username);
	    	login = 0;
	    	// login Successful
	    	if (user.getPassword().equals(password)) {
	    		login = 1;
		    	status.put("id", user.getId());
		    	status.put("username", username);
	    		status.put("login", login);
	    		return status;
	    	}
    	}
    	// login Fails
    	status.put("id", null);
    	status.put("username", null);
    	status.put("login", login);
    	return status;

  
    }
    
}