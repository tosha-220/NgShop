package netckr.shop.dao;

import netckr.shop.domain.Product;

import java.util.List;

public interface ProductDAO {

    List<Product> listProduct();

    Product getProduct(int id);

}