package netckr.shop.service;

import netckr.shop.model.Product;

import java.util.List;

public interface ProductService {

    Product getProduct(Integer id);

    List simpleListProduct(int categoryId);

    String getImage(int id);

    Product getProductByTitle(String title);

    void addProduct(Product newProduct);

    void delete(int id);

}