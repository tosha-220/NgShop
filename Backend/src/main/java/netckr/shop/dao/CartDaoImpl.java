package netckr.shop.dao;

import netckr.shop.model.Cart;
import netckr.shop.model.Order;
import netckr.shop.model.User;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class CartDaoImpl implements CartDao {
    @Autowired
    private SessionFactory sessionFactory;

    @Override
    public void saveCustomer(User user) {
        System.out.println("second");
        System.out.println(user);
        this.sessionFactory.getCurrentSession().save(user);
    }

    @Override
    public void saveOrder(Order order) {
        Session session = this.sessionFactory.getCurrentSession();

        for (Cart cart : order.getCart()) {
            session.createSQLQuery("INSERT INTO shop.order (title,price,quantity,sum,userId,totalSum) VALUES ('" +
                    cart.getItem().getTitle() + "','" + cart.getItem().getPrice() + "','" +
                    +cart.getQuantity() + "','" + cart.getSum() + "','" + order.getUser().getId() + "','" +
                    +order.getTotalSum() + "')").executeUpdate();

        }
    }

    public void setSessionFactory(SessionFactory sessionFactory) {
        this.sessionFactory = sessionFactory;
    }
}
