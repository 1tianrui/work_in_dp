/**
 * Created by jnkmhbl on 16/4/15.
 */

        import org.apache.http.HttpEntity;
        import org.apache.http.client.methods.CloseableHttpResponse;
        import org.apache.http.client.methods.HttpGet;
        import org.apache.http.impl.client.CloseableHttpClient;
        import org.apache.http.impl.client.HttpClients;
        import org.apache.http.util.EntityUtils;
        import org.jsoup.Jsoup;
        import org.jsoup.nodes.Document;
        import org.jsoup.nodes.Element;
        import org.jsoup.select.Elements;
        import org.springframework.boot.*;
        import org.springframework.boot.autoconfigure.*;
        import org.springframework.boot.yaml.ArrayDocumentMatcher;
        import org.springframework.stereotype.*;
        import org.springframework.web.bind.annotation.*;

        import javax.websocket.*;
        import javax.websocket.server.ServerEndpoint;
        import java.io.IOException;
        import java.util.HashMap;
        import java.util.List;
        import java.util.Map;

        @Controller
        @EnableAutoConfiguration
        public class PubMonitor {

            public static void main(String[] args) throws Exception {
                SpringApplication.run(PubMonitor.class, args);
            }
         private static String urlPrefix="http://cat.dianpingoa.com/cat/r/t?ip=All&queryname=&domain=";

          @RequestMapping("/test")
            public static String  requestCat(@RequestParam(value="serviceName")String serName)throws Exception{
              String count = getCount(serName);
              return "forward:/index.html";
            }


            public static String getCookie(String service){
                String cookie="CAT_DOMAINS="+service+"|cat;JSESSIONID=D1089883285CFDEA020535871C4AB808;";
                return cookie;
            }

            private static  String getCount(String service )throws  Exception{
                CloseableHttpClient client = HttpClients.createDefault();
                HttpGet get = new HttpGet(PubMonitor.urlPrefix+service+"&type=PigeonService");
                get.setHeader("Cookie", getCookie(service));
                CloseableHttpResponse response = client.execute(get);
                String content = EntityUtils.toString(response.getEntity(), "UTF-8");
                Document document = Jsoup.parse(content);
                Elements elements = document.select("tr.right");
                Element  e = elements.first();
                String data = e.select("td").get(1).html();
               return data;
            }
        }