/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.DBS.T26Hackathon.models;

import java.math.BigDecimal;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 *
 * @author markt
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Product {

    private long productId;

    private String title;

    private BigDecimal price;

    private String description;
    
    private Long categoryId;
    
    private String image;
    
    private Integer qty;
    
}