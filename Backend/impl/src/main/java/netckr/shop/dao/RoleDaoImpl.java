package netckr.shop.dao;

import netckr.shop.model.UserRoles;
import org.apache.log4j.Logger;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class RoleDaoImpl implements RoleDao {
    private final static Logger logger = Logger.getLogger(RoleDaoImpl.class);

    @Autowired
    private SessionFactory sessionFactory;

    @Override
    public void addUserRole(UserRoles role) {

    }

    @Override
    public String getUserRole(String login) {
        String userRole = (String) this.sessionFactory.getCurrentSession()
                .createSQLQuery("select role from shop.user_role where login=:login")
                .setString("login", login)
                .uniqueResult();
        logger.info("Getting user role");
        return userRole;
    }

    public void setSessionFactory(SessionFactory sessionFactory) {
        this.sessionFactory = sessionFactory;
    }

}
