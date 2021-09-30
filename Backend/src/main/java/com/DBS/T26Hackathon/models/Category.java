/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.DBS.T26Hackathon.models;

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
public class Category {
    private long categoryId;
    
    private String name;
    
    private String description;
    
    private String image;
    
}
