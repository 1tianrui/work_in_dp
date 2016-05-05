package createIbaits;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by jnkmhbl on 16/5/5.
 */
public class SqlResolve {

    public static  void main(String []args){
        SqlResolve sqlResolve = new SqlResolve();

    }
    public  String resolveTableName(String sql){
      List<String> elements = new ArrayList<String>();
      boolean tableReaded = false ;
      StringBuilder builder =  new StringBuilder();
      int index =0 ;
      boolean tableNameReaded =false ;
        while(!tableNameReaded){
            char tmp =sql.charAt(index);
            index ++;
            if(tmp == ' '){
                if(builder.length() !=0 ){
                    String content =builder.toString();
                    if(tableReaded){
                        filtInvalidChar(content.toString());
                        return content.toString();
                    }
                    builder = new StringBuilder();
                    if(content.equalsIgnoreCase("table")){
                        tableReaded = true;
                    }
                }
            }else{
                builder.append(tmp);
            }
        }
        return  "";
    }

    private String getTableName(String sql){
           return  "";
    }


    //取出表名两侧可能存在的符号
    private String filtInvalidChar(String tableName){
        int start =0;
        int end =tableName.length();
        while(true) {
            if (tableName.charAt(start) < 'A' || tableName.charAt(start) > 'z' ||( tableName.charAt(start)< 'a' &&  tableName.charAt(start) >'Z' ) ) {
                start = start + 1;
            }else{
                break;
            }
        }
        while(true) {
            if (tableName.charAt(end-1) < 'A' || tableName.charAt(end-1) > 'z' ||( tableName.charAt(end-1)< 'a' &&  tableName.charAt(end-1) >'Z' ) ) {
                end = end - 1;
            }else{
                break;
            }
        }
       return tableName.substring(start,end);
    }


    private void resolveColumn(String sql){
       String content = sql.substring(sql.indexOf('('),sql.lastIndexOf(')')-1);
       String[] columns = content.split(",");
       for(String column : columns){
         if(!isColumnContent(column)){
             continue;
         }
           //取出字段名称和类型
          String [] eles = splitBlank(column);

           //todo 已经支持自动生成column name  & type
          System.out.println(this.filtInvalidChar(eles[0]) +"  "+eles[1]);
       }

    }

    private boolean isColumnContent(String column){
        if((column.contains("text")||column.contains("decimal")||column.contains("int(") || column.contains("datetime")||column.contains("char"))){
            return true;
        }
            return false;
    }


    private String[]  splitBlank(String content){
        List<String> result = new ArrayList<String>();
        StringBuilder builder = new StringBuilder();
        for(char a :content.toCharArray()){
            if(a ==' ' || a=='\r' ||a == '\n'){
                if(builder.length() != 0){
                    result.add(builder.toString());
                    builder = new StringBuilder();
                }
            }else{
                builder.append(a);
            }
        }
        String [] tmp = new String[result.size()];
        int idx = 0;
        for(String a : result){
            tmp[idx] = a;
            idx ++;
        }return tmp;
    }
}
