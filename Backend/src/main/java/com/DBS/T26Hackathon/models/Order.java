/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.DBS.T26Hackathon.models;

import com.DBS.T26Hackathon.enumeration.OrderStatus;
import java.time.LocalDateTime;
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
public class Order {
    private long orderId;
    
    private long customerId;
    
    private OrderStatus status;
    
    private LocalDateTime createdAt;
}
