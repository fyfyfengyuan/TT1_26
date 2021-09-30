/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.DBS.T26Hackathon.services;

import com.DBS.T26Hackathon.models.Product;
import com.DBS.T26Hackathon.repository.ProductRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author markt
 */
@Service
public class ProductService {
    @Autowired
    ProductRepository productRepository;
    
    public List<Product> getAllProducts(){
        return productRepository.findAll();
    }
}
