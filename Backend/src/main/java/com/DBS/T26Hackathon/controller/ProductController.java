package com.DBS.T26Hackathon.controller;


import com.DBS.T26Hackathon.exception.CustomerNotFoundException;
import com.DBS.T26Hackathon.exception.InsufficientQuantityException;
import com.DBS.T26Hackathon.exception.ProductNotFoundException;
import com.DBS.T26Hackathon.models.Order;
import com.DBS.T26Hackathon.models.OrderVO;
import com.DBS.T26Hackathon.models.Product;
import com.DBS.T26Hackathon.services.OrderService;
import com.DBS.T26Hackathon.services.ProductService;
import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/products")
public class ProductController {

    @Autowired
    ProductService productService;

    @Autowired
    OrderService orderService;
    
    @GetMapping("/getAllProducts")
    public List<Product> fetchAll() {
        return productService.getAllProducts();
    }

    @PostMapping("/addToCart")
    public Order addToCart(@RequestBody OrderVO vo) throws InsufficientQuantityException, ProductNotFoundException, CustomerNotFoundException {
        return orderService.addToCart(vo);
    }
    
    @PostMapping("/checkOut")
    public boolean checkOut() {
    		
    		
            return false;
    }
}