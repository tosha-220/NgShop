package netckr.shop.dao;

import netckr.shop.model.Product;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class ProductDAOImpl implements ProductDAO {

    @Autowired
    SessionFactory sessionFactory;

    public List<Product> simpleListProduct(int categoryId) {
        List<Product> list = sessionFactory.getCurrentSession().createQuery("from Product product " +
                "where product.categoryId=:categoryId ").setInteger("categoryId", categoryId).list();
        return list;
    }

    public Product getProduct(int id) {
        Product product = (Product) sessionFactory.getCurrentSession().get(Product.class, id);
        return product;
    }

    @Override
    public String getImage(int id) {
        String url = (String) this.sessionFactory.getCurrentSession().createQuery("select product.imageUrl from Product product where product.id=:id").setInteger("id", id).uniqueResult();
        return url;
    }

    @Override
    public Product getProductByTitle(String title) {
        Product product = (Product) sessionFactory.getCurrentSession().createQuery("from Product product where product.title = :title")
                .setString("title", title).uniqueResult();

        return product;
    }

    public void setSessionFactory(SessionFactory sessionFactory) {
        this.sessionFactory = sessionFactory;
    }

}