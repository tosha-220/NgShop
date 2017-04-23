package netckr.shop.controllers;

import netckr.shop.model.Product;
import netckr.shop.service.ProductService;
import netckr.shop.token.TokenGeneration;
import org.apache.commons.codec.digest.DigestUtils;
import org.apache.log4j.Logger;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;
import org.springframework.web.multipart.commons.CommonsMultipartFile;

import javax.imageio.ImageIO;
import javax.servlet.http.HttpServletResponse;
import java.awt.image.BufferedImage;
import java.io.*;
import java.util.List;

@RestController
public class ProductController {
    final static Logger logger = Logger.getLogger(ProductController.class);
    @Value("${root.path}")
    private String rootPath;

    private String fileName;

    @Autowired
    private ProductService productService;

    @Autowired
    private TokenGeneration tokenGeneration;

    @RequestMapping(value = "/list/{id}", method = RequestMethod.GET)
    public List simpleList(@PathVariable("id") int id) {
        List productsList = productService.simpleListProduct(id);
        logger.info("List getting");
        return productsList;
    }

    @RequestMapping(value = "/image/{id}", method = RequestMethod.GET, produces = MediaType.IMAGE_JPEG_VALUE)
    public void getImage(@PathVariable("id") int id, HttpServletResponse response) {
        File f = new File(this.productService.getImage(id));
        try (OutputStream out = response.getOutputStream()) {
            BufferedImage bi = ImageIO.read(f);
            ImageIO.write(bi, "jpg", out);
        } catch (IOException e) {
            logger.error("Image not found");
        }
    }

    @RequestMapping(value = "/details/{id}", method = RequestMethod.GET)
    public Product getDetailsById(@PathVariable("id") int id) {
        Product productById = productService.getProduct(id);
        return productById;
    }

    @RequestMapping(value = "/delete/{id}", method = RequestMethod.POST)
    public boolean delete(@PathVariable("id") int id, @RequestBody String token) {
        if (this.tokenGeneration.verifyToken(token)) {
            this.productService.delete(id);
            return true;
        } else {
            return false;
        }
    }

    @RequestMapping(value = "/add/{categoryId}", method = {RequestMethod.POST})
    public boolean addProduct(@PathVariable("categoryId") int categoryId, @RequestParam(value = "fileInput", required = false) CommonsMultipartFile locationMapFileData,
                              MultipartHttpServletRequest mrequest) {

        String token = mrequest.getParameter("token").replace("\"", "");
        if (this.tokenGeneration.verifyToken(token)) {
            Product product;
            String productJson = mrequest.getParameter("product");
            MultipartFile file = mrequest.getFile("file");

            if (!file.isEmpty()) {
                try (InputStream inputStream = file.getInputStream()) {
                    JSONParser jsonParser = new JSONParser();
                    JSONObject jsonObject;
                    jsonObject = (JSONObject) jsonParser.parse(productJson);
                    String productTitle = (String) jsonObject.get("title");
                    int price = Math.toIntExact((Long) jsonObject.get("price"));
                    String description = (String) jsonObject.get("description");
                    String hashCode = DigestUtils.md5Hex(inputStream);
                    fileName = hashCode + file.getOriginalFilename().substring(file.getOriginalFilename().lastIndexOf("."));
                    product = new Product(categoryId, productTitle, price, description, this.rootPath + fileName);
                    this.productService.addProduct(product);
                    logger.info("File writing start");
                    BufferedOutputStream stream = new BufferedOutputStream(new FileOutputStream(new File(rootPath + fileName)));
                    stream.write(file.getBytes());
                    stream.close();
                } catch (FileNotFoundException e) {
                    logger.error("file not found exception");
                } catch (IOException e) {
                    logger.error("IO exception");
                } catch (ParseException e) {
                    logger.error("Parse error");
                }
            }
            logger.info("Token is valid");
            return true;

        } else {
            logger.info("Token is not valid");
            return false;
        }
    }

    @RequestMapping(value = "/search/{title}", method = RequestMethod.GET)
    public Product getProductByName(@PathVariable("title") String title) {
        Product productByTitle = this.productService.getProductByTitle(title);
        return productByTitle;
    }
}