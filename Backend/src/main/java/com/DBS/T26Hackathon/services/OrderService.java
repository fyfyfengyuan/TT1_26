/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.DBS.T26Hackathon.services;

import com.DBS.T26Hackathon.enumeration.OrderStatus;
import com.DBS.T26Hackathon.exception.InsufficientQuantityException;
import com.DBS.T26Hackathon.exception.ProductNotFoundException;
import com.DBS.T26Hackathon.models.Customer;
import com.DBS.T26Hackathon.models.Order;
import com.DBS.T26Hackathon.models.OrderItem;
import com.DBS.T26Hackathon.models.OrderVO;
import com.DBS.T26Hackathon.models.Product;
import com.DBS.T26Hackathon.repository.CustomerRepository;
import com.DBS.T26Hackathon.repository.OrderItemRepository;
import com.DBS.T26Hackathon.repository.OrderRepository;
import com.DBS.T26Hackathon.repository.ProductRepository;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;

/**
 *
 * @author markt
 */
public class OrderService {
    
    @Autowired
    OrderRepository orderRepository;
    
    @Autowired
    OrderItemRepository orderItemRepository;
    
    @Autowired
    ProductRepository productRepository;
    
    @Autowired
    CustomerRepository customerRepository;
    
//    @Transactional
//    public Order AddToCart(OrderVO vo) throws InsufficientQuantityException, ProductNotFoundException {
//        
////        Customer customer = customerRepository.findById(vo.getCustomerId())
////                .orElseThrow(() -> new CustomerNotFoundException(String.valueOf(vo.getCustomerId())));
////        Order newOrder = customer.getCart() != null ? customer.getCart() : new Order();
//        newOrder.setCreatedAt(LocalDateTime.now());
//        newOrder.setStatus(OrderStatus.PENDING);
//        vo.updateOrder(newOrder);
//
//        for(OrderItem o: newOrder.getOrderItems()){
//            Product product = productRepository.findById(o.getProductId())
//                .orElseThrow(() -> new ProductNotFoundException(String.valueOf(o.getProductId())));
//            if(product.getQty()<o.getOrderQty()){
//                throw new InsufficientQuantityException(String.valueOf(product.getId()));
//            }
//            product.setQty(product.getQty() - o.getOrderQty());
//            productRepository.saveAndFlush(product);
//            orderItemRepository.saveAndFlush(o);
//        }
//        
//        orderRepository.saveAndFlush(newOrder);
//        return newOrder;
//    }

}
