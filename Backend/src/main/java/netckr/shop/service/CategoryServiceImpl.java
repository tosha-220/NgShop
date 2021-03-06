package netckr.shop.service;

import netckr.shop.dao.CategoryDao;
import netckr.shop.model.Category;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import javax.transaction.Transactional;
import java.util.List;

public class CategoryServiceImpl implements CategoryService {

    @Qualifier("categoryDao")
    @Autowired
    private CategoryDao categoryDao;

    @Transactional
    public List<Category> getCategories() {
        return this.categoryDao.getCategories();
    }
}
