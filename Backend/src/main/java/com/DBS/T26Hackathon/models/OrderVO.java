/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.DBS.T26Hackathon.models;

import java.util.List;
import lombok.Data;

/**
 *
 * @author markt
 */
@Data
public class OrderVO {
    private long customerId;
    private List<OrderItem> orderItems;
    
//    public void updateOrder(Order order){
//       order.setCustomerId(this.customerId);
//        order.setOrderItems(this.orderItems);
//  }
}
