package net.ckr.shop;

<<<<<<< HEAD
import java.util.Locale;

=======
//import java.text.DateFormat;
//import java.util.Date;
import java.util.Locale;

//import org.slf4j.Logger;
//import org.slf4j.LoggerFactory;
>>>>>>> 72f86fea8184b8404ba07c97eb32bd1137d22b70
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
<<<<<<< HEAD
import org.springframework.web.bind.annotation.ResponseBody;


public class HomeController {
	
	@RequestMapping(value = "/", method = RequestMethod.GET)
	@ResponseBody
	public String home() {
	
		String hw="Hello World!";	
		
		return hw;
=======

/**
 * Handles requests for the application home page.
 */
@Controller
public class HomeController {
	
//	private static final Logger logger = LoggerFactory.getLogger(HomeController.class);
	
	/**
	 * Simply selects the home view to render by returning its name.
	 */
	@RequestMapping(value = "/", method = RequestMethod.GET)
	public String home(Locale locale, Model model) {
//		logger.info("Welcome home! The client locale is {}.", locale);
		String hw="Hello World!";
		//Date date = new Date();
		//DateFormat dateFormat = DateFormat.getDateTimeInstance(DateFormat.LONG, DateFormat.LONG, locale);
		
		//String formattedDate = dateFormat.format(date);
		
		//model.addAttribute("serverTime", formattedDate );
		
		return "home";
>>>>>>> 72f86fea8184b8404ba07c97eb32bd1137d22b70
	}
	
}
