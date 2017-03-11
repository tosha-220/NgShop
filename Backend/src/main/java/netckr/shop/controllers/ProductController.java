package netckr.shop.controllers;

import netckr.shop.domain.Product;
import netckr.shop.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class ProductController {

    @Autowired
    private ProductService productService;
    @RequestMapping(value = "/getproducts", method = RequestMethod.GET)
    public List<Product> listProducts() {
        List<Product> lpr = productService.listProduct();
        return lpr;
    }
}