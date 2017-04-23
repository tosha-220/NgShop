package netckr.shop.token;

import com.auth0.jwt.JWT;
import com.auth0.jwt.JWTVerifier;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.exceptions.JWTCreationException;
import com.auth0.jwt.exceptions.JWTVerificationException;
import netckr.shop.model.User;
import org.apache.log4j.Logger;
import org.springframework.stereotype.Service;

import java.io.UnsupportedEncodingException;
import java.time.ZonedDateTime;
import java.util.Date;

@Service
public class TokenGeneration {
    private final String key = "ngSecretWord";
    private String token;
    private final static Logger logger = Logger.getLogger(TokenGeneration.class);

    public String getToken(User currentUser, String userRole) {
        try {
            Algorithm algorithm = Algorithm.HMAC256(this.key);
            Date expirationDate = Date.from(ZonedDateTime.now().plusMinutes(1).toInstant());
            token = JWT.create()
                    .withExpiresAt(expirationDate)
                    .withClaim("username", currentUser.getLogin())
                    .withClaim("userType", userRole)
                    .sign(algorithm);
        } catch (UnsupportedEncodingException exception) {
            logger.error("UTF-8 encoding not supported");
        } catch (JWTCreationException exception) {
            logger.error("Invalid Signing configuration / Couldn't convert Claims.");
        }
        return token;
    }

    public boolean verifyToken(String token) {
        try {
            Algorithm algorithm = Algorithm.HMAC256(this.key);
            JWTVerifier verifier = JWT.require(algorithm).build();
            verifier.verify(token.replace("\"",""));
            logger.info("Token is alive");
            return true;
        } catch (UnsupportedEncodingException exception) {
            logger.error("UTF-8 encoding not supported");
            return false;
        } catch (JWTVerificationException exception) {
            logger.info("Invalid signature/claims, token is broken");
            return false;
        } catch (NullPointerException exception) {
            logger.info("Invalid signature/claims, memory token is null");
            return false;
        }
    }

    public void deleteToken() {
        this.token = null;
    }
}
