package netckr.shop.dao;

import org.apache.log4j.Logger;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class CategoryDaoImpl implements CategoryDao {

    private final static Logger logger = Logger.getLogger(CategoryDaoImpl.class);
    @Autowired
    private SessionFactory sessionFactory;

    @Override
    public List getCategories() {
        List list = this.sessionFactory
                .getCurrentSession()
                .createQuery("from Category category").list();
        logger.info("Get categories ok");
        return list;
    }

    public SessionFactory getSessionFactory() {
        return sessionFactory;
    }

    public void setSessionFactory(SessionFactory sessionFactory) {
        this.sessionFactory = sessionFactory;
    }
}
