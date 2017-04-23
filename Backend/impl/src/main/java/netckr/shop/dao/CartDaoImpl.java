package netckr.shop.dao;

import netckr.shop.json.Cart;
import netckr.shop.json.Order;
import netckr.shop.model.Customer;
import org.apache.log4j.Logger;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class CartDaoImpl implements CartDao {
    private final static Logger logger = Logger.getLogger(CartDaoImpl.class);

    @Autowired
    private SessionFactory sessionFactory;

    @Override
    public void saveCustomer(Customer customer) {
        this.sessionFactory.getCurrentSession().save(customer);
        logger.info("Customer saved");
    }

    @Override
    public void saveOrder(Order order) {
        Session session = this.sessionFactory.getCurrentSession();

        for (Cart cart : order.getCart()) {
            session.createSQLQuery("INSERT INTO shop.order (title,price,quantity,sum,userId,totalSum) VALUES ('" +
                    cart.getItem().getTitle() + "','" + cart.getItem().getPrice() + "','" +
                    +cart.getQuantity() + "','" + cart.getSum() + "','" + order.getCustomer().getId() + "','" +
                    +order.getTotalSum() + "')").executeUpdate();

        }
        logger.info("Order saved");
    }

    public void setSessionFactory(SessionFactory sessionFactory) {
        this.sessionFactory = sessionFactory;
    }
}
