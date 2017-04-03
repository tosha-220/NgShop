package netckr.shop.service;

import netckr.shop.dao.ProductDAO;
import netckr.shop.model.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class ProductServiceImpl implements ProductService {

    @Qualifier("productDao")
    @Autowired
    private ProductDAO productDAO;

    @Transactional
    public List<Product> simpleListProduct(int categoryId) {
        return productDAO.simpleListProduct(categoryId);
    }

    @Transactional
    @Override
    public String getImage(int id) {
        return this.productDAO.getImage(id);
    }

    @Transactional
    @Override
    public Product getProductByTitle(String title) {
        return this.productDAO.getProductByTitle(title);
    }

    @Transactional
    public Product getProduct(Integer id) {
        return productDAO.getProduct(id);
    }

}