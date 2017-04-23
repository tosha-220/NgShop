package netckr.shop.dao;

import netckr.shop.model.Product;

import java.util.List;

public interface ProductDAO {

    List simpleListProduct(int categoryId);

    Product getProduct(int id);

    String getImage(int id);

    Product getProductByTitle(String title);

    void addProduct(Product newProduct);

    void delete(int id);
}