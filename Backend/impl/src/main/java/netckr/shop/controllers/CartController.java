package netckr.shop.controllers;

import netckr.shop.json.Order;
import netckr.shop.service.CartService;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

@RestController
public class CartController {

    @Autowired
    private CartService cartService;
    private final static Logger logger = Logger.getLogger(CartController.class);

    @RequestMapping(value = "/buy", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
    public
    @ResponseBody
    String buy(@RequestBody Order order) {
        this.cartService.saveCustomer(order.getCustomer());
        this.cartService.saveOrder(order);
        logger.info("Customer and order saved");
        return "Order successfully completed";
    }
}
