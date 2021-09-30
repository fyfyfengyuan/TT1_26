package com.DBS.T26Hackathon.controller;


import com.DBS.T26Hackathon.models.Customer;
import com.DBS.T26Hackathon.models.Product;
import com.DBS.T26Hackathon.repository.ProductRepository;
import com.DBS.T26Hackathon.services.ProductService;
import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/products")
public class ProductController {

    @Autowired
    ProductService productService;
    
    @GetMapping("/getAllProduct")
    public List<Product> fetchAll() {
            return productService.getAllProducts();
    }

    @PostMapping("/addToCart")
    public List<Product> addToCart() {
            return new ArrayList<Product>();
    }
}