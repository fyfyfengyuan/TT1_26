/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.DBS.T26Hackathon.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OrderColumn;
import javax.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 *
 * @author markt
 */

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Customer {

    @Id
    @Column(nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(nullable = false, length = 2000)
    @NotNull
    private String username;

    @Column(nullable = false, length = 2000)
    @NotNull
    private String password;

    @Column(nullable = false, length = 2000)
    @NotNull
    private String email;
    
    @Column(nullable = false, length = 2000)
    @NotNull
    private String first_name;
    
    @Column(nullable = false, length = 2000)
    @NotNull
    private String last_name;
    
    @Column(nullable = false, length = 2000)
    @NotNull
    private String postal_code;
    
    @Column(nullable = false, length = 2000)
    @NotNull
    private String gender;
    
//    @Column(nullable = true)
//    @OrderColumn
//    private Order cart;
}