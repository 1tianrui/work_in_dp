/**
 * Created by jnkmhbl on 16/5/4.
 */
public class LogTest {

    public static void main(String args[]){
        LogTest test = new LogTest();
        System.out.println(test.test());
    }
    public String test(){
        return this.getStackTraceInfo();
    }

    private String getStackTraceInfo(){
        StringBuilder sb = new StringBuilder();
        StackTraceElement[] stes = Thread.currentThread().getStackTrace();
        if (stes!=null && stes.length>=5){
            StackTraceElement ste = stes[3];
            String classInfo = ste.getFileName().replace(".java","");
            sb.append(classInfo).append(".").append(ste.getMethodName());
        }
        return sb.toString();
    }
}
