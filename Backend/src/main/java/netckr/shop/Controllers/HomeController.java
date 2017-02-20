package netckr.shop.Controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import netckr.shop.Pojos.hwpojo;

@Controller
public class HomeController {
	
	@RequestMapping(value = "/", method = RequestMethod.GET, produces = "application/json")
	@ResponseBody
	public hwpojo home() {
		hwpojo HW=new hwpojo();
		HW.setId(1);
		HW.setStr("Delayem magaz");
		return HW;
	}
}