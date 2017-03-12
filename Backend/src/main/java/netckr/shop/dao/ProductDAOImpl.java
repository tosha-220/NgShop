package netckr.shop.dao;

import netckr.shop.domain.Product;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class ProductDAOImpl implements ProductDAO {

    @Autowired
    SessionFactory sessionFactory;

    public List<Product> listProduct() {
        List<Product> list = sessionFactory.getCurrentSession().createQuery("from Product").list();
        return list;
    }

    public Product getProduct(int id) {
        Product product = (Product) sessionFactory.getCurrentSession().get(Product.class, id);
        return product;
    }

    public void setSessionFactory(SessionFactory sessionFactory) {
        this.sessionFactory = sessionFactory;
    }

}