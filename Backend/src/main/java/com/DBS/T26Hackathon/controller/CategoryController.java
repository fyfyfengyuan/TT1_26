/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.DBS.T26Hackathon.controller;

import com.DBS.T26Hackathon.models.Category;
import com.DBS.T26Hackathon.services.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author markt
 */
@RestController
@RequestMapping("/category")
public class CategoryController {

    @Autowired
    ProductService productService;
    
    @GetMapping("/getCategoryById")
    public Category getCategoryById(@RequestParam(value = "categoryId",required = true) Long categoryId) {
        return productService.getCategoryById(categoryId);
    }
}