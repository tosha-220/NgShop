package netckr.shop.dao;

import netckr.shop.model.Product;
import org.apache.log4j.Logger;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class ProductDaoImpl implements ProductDAO {

    private final static Logger logger = Logger.getLogger(ProductDaoImpl.class);

    @Autowired
    private SessionFactory sessionFactory;

    public List<Product> simpleListProduct(int categoryId) {
        List<Product> list = sessionFactory
                .getCurrentSession()
                .createQuery("from Product product " +
                        "where product.categoryId=:categoryId ")
                .setInteger("categoryId", categoryId)
                .list();
        logger.info("List by id created");
        return list;
    }

    public Product getProduct(int id) {
        Product product = (Product) sessionFactory
                .getCurrentSession()
                .get(Product.class, id);
        logger.info("Product by id created");
        return product;
    }

    @Override
    public String getImage(int id) {
        String url = (String) this.sessionFactory
                .getCurrentSession()
                .createQuery("select product.imageUrl from Product product where product.id=:id")
                .setInteger("id", id)
                .uniqueResult();
        logger.info("Getting image");
        return url;
    }

    @Override
    public Product getProductByTitle(String title) {
        Product product = (Product) sessionFactory
                .getCurrentSession()
                .createQuery("from Product product where product.title = :title")
                .setString("title", title)
                .uniqueResult();
        logger.info("Getting product by title");
        return product;
    }

    @Override
    public void addProduct(Product newProduct) {
        this.sessionFactory.getCurrentSession()
                .persist(newProduct);
        logger.info("Product saved");
    }

    @Override
    public void delete(int id) {
        Session session = this.sessionFactory.getCurrentSession();
        Product product = (Product) this.sessionFactory
                .getCurrentSession()
                .load(Product.class, id);
        if (product != null) {
            session.delete(product);
        }
        logger.info("Product deleted");
    }


    public void setSessionFactory(SessionFactory sessionFactory) {
        this.sessionFactory = sessionFactory;
    }

}