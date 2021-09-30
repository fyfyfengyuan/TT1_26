/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.DBS.T26Hackathon.repository;

import com.DBS.T26Hackathon.models.Order;
import com.DBS.T26Hackathon.models.OrderItem;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 *
 * @author markt
 */

public interface OrderRepository extends JpaRepository<Order, Long> {
    
}
