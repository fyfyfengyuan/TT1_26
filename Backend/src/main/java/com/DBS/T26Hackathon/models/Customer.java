/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.DBS.T26Hackathon.models;

import com.DBS.T26Hackathon.enumeration.Gender;

/**
 *
 * @author markt
 */

public class Customer {

    private Long id;

    private String username;

    private String password;

    private String email;
    
    private String firstName;
    
    private String lastName;
    
    private String postalCode;
    
    private Gender gender;
    
    
    public Customer() {}
    
    public Customer(final String username, final String password) {
        this.username = username;
        this.password = password;
    }
}

