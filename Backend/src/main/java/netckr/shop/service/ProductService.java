package netckr.shop.service;

import netckr.shop.model.Product;

import java.util.List;

public interface ProductService {

    Product getProduct(Integer id);

    List<Product> simpleListProduct(int categoryId);

    String getImage(int id);

    Product getProductByTitle(String title);

}