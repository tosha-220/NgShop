package netckr.shop.service;

import netckr.shop.domain.Product;

import java.util.List;

public interface ProductService {

    Product getProduct(Integer id);

    List<Product> listProduct();

}