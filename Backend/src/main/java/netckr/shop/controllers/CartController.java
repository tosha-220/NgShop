package netckr.shop.controllers;

import netckr.shop.model.Order;
import netckr.shop.service.CartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class CartController {

    @Autowired
    CartService cartService;

    @RequestMapping(value = "/buy", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
    public
    @ResponseBody
    String buy(@RequestBody Order order) {
        this.cartService.saveCustomer(order.getUser());
        this.cartService.saveOrder(order);
        return "Order succesfully completed";
    }
}
