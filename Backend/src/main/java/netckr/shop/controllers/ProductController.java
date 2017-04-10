package netckr.shop.controllers;

import netckr.shop.model.Product;
import netckr.shop.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.imageio.ImageIO;
import javax.servlet.http.HttpServletResponse;
import java.awt.image.BufferedImage;
import java.io.File;
import java.io.IOException;
import java.io.OutputStream;
import java.util.List;

@RestController
public class ProductController {

    @Autowired
    private ProductService productService;

    @RequestMapping(value = "/list/{id}", method = RequestMethod.GET)
    public List simpleList(@PathVariable("id") int id) {
        List lpr = productService.simpleListProduct(id);
        return lpr;
    }

    @RequestMapping(value = "/image/{id}", method = RequestMethod.GET, produces = MediaType.IMAGE_JPEG_VALUE)
    public void getImage(@PathVariable("id") int id, HttpServletResponse response) {

        File f = new File(this.productService.getImage(id));

        OutputStream out = null;
        try {
            BufferedImage bi = ImageIO.read(f);
            out = response.getOutputStream();
            ImageIO.write(bi, "jpg", out);
            out.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    @RequestMapping(value = "/details/{id}", method = RequestMethod.GET)
    public Product getDetailsById(@PathVariable("id") int id) {
        Product productById = productService.getProduct(id);
        return productById;
    }

    @RequestMapping(value = "/search/{title}", method = RequestMethod.GET)
    public Product getProductByName(@PathVariable("title") String bookTitle) {
        Product productByTitle = this.productService.getProductByTitle(bookTitle);
        return productByTitle;
    }
}