import java.lang.reflect.Method;
import java.util.concurrent.ConcurrentHashMap;

/**
 * Created by jnkmhbl on 16/5/26.
 */
public class ClassLoaderTest {

    public static void main(String args[])throws  Exception{
      Class<?> merClass =   ClassLoader.getSystemClassLoader().loadClass("MergeSort");
        Object mergeSort = merClass.newInstance();
        ConcurrentHashMap<String , Object> instanceMap =  new ConcurrentHashMap<String, Object>();
        instanceMap.put("MergeSort",mergeSort);



    }
}
