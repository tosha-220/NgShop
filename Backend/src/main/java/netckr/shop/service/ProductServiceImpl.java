package netckr.shop.service;

import netckr.shop.dao.ProductDAO;
import netckr.shop.domain.Product;
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
    public List<Product> listProduct() {
         return productDAO.listProduct();
    }
 
    @Transactional
    public Product getProduct(Integer id){
    	return productDAO.getProduct(id);
    }
    
}