package createIbaits;

import java.util.*;

/**
 * 通过数据库创建语句到ibaits描述文件
 * 1.字段名称
 * 2.字段类型
 *
 * PO类命名规则  tableName转成驼峰加PO
 * resultID   tableName转成驼峰+Result
 */
public class TableToIbaits {
    public static void main(String args[]){
      Map<String,String> contnt= new HashMap<String, String>();
        //默认第一个放ID
        contnt.put("id", "int(11)");
        contnt.put("name", "varchar(30)");
        contnt.put("updated_time", "datatime");
        TableToIbaits tableToIbaits = new TableToIbaits();
        tableToIbaits.parseStringContent("test", contnt);

    }


    public void parseStringContent(String tableName,Map<String,String> columns){
           String className=convertToTuofeng(tableName, true);
           String poName = convertToTuofeng(tableName, false)+"PO";
          String resultID = convertToTuofeng(tableName,false)+"Result";
          Set<Map.Entry<String,String>> content = columns.entrySet();
          Map<String,String> attributeName = new HashMap<String, String>();
          for(Map.Entry<String,String>  mapContent: content){
              String columnName = this.convertToTuofeng(mapContent.getKey(),false);
              String type = this.typeJudge(mapContent.getValue());
              attributeName.put(mapContent.getKey(), columnName);
          }
        StringBuilder builder = new StringBuilder();
        builder.append("<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n" +
                "<!DOCTYPE sqlMap PUBLIC \"-//ibatis.apache.org//DTD SQL Map 2.0//EN\" \"http://ibatis.apache.org/dtd/sql-map-2.dtd\">\n" +
                "\n" +
                "<sqlMap namespace=\"HotShopLocation\">\n" +
                "    <typeAlias alias="+poName+" type=\"PO类完整路径\"/>\n");
         String resultMap = createResultMap(attributeName,convertToTuofeng(tableName,false)+"Result",convertToTuofeng(tableName,false)+"PO");

         builder.append(resultMap+"\r\n");
         builder.append("</sqlMap>");
        System.out.println(builder.toString());
    }


    //产生result
    /**
     *@Param columns key是数据库表中字段，value是对应的驼峰
     **/
    public String createResultMap(  Map<String,String> columns,String id,String className){
        StringBuilder builder = new StringBuilder();
        builder.append("<resultMap> id=\""+id+"\"  class=\""+className+"\">\r\n");
        for(Map.Entry<String,String> entry : columns.entrySet()){
            builder.append("<result column=\""+entry.getKey()+"\" property=\""+entry.getValue()+"\"/>\r\n");
        }
        builder.append("</resultMap>");
        return builder.toString();
    }
    public String convertToTuofeng(String name,boolean firstKey){
        boolean bottomPre = firstKey ;
        StringBuilder className = new StringBuilder();
        for(char a:name.toCharArray()){
            if(a !='_'&&(!bottomPre)){
              className.append(String.valueOf(a));
            }
            if(a=='_'){
                bottomPre=true;
                continue;
            }
            if(a!='_'&&bottomPre){
                className.append(String.valueOf(Character.toUpperCase(a)));
                bottomPre=false;
            }
        }
        return className.toString();
    }

    public String typeJudge(String content){
        if(content.contains("varchar")){
            return "String";
        }
        if(content.contains("int(11)")){
            return "long";
        }
        if(content.contains("datatime")){
            return "Date";
        }
        if(content.contains("double")){
            return "double";
        }
        return "";
    }


    private String createUpdateContent(Map<String,String> content,List<String> keys,String tableName){
        StringBuilder updateBuilder = new StringBuilder();
        updateBuilder.append("<update id=自己写 parameterClass=\"map\">\r\n");
        updateBuilder.append("UPDATE "+tableName+"\r\n");
        for(String key : keys){
             updateBuilder.append(" "+key+" = #"+content.get(key)+"#  \r\n");
             if(key != keys.get(keys.size()-1)){
                 updateBuilder.append(",");
             }
        }
        updateBuilder.append("where 自己写\r\n");
        updateBuilder.append("</update>");

        return updateBuilder.toString();
    }

    private String createSelectContent(Map<String,String> content,List<String> keys,String tableName,String resultMap){
       StringBuilder selectBuilder = new StringBuilder();
       selectBuilder.append("<select id=自己写 parameterClass=\"map\" resultMap=\"" + resultMap + "\"\r\n");
       selectBuilder.append("SELECT * from "+tableName+"\r\n");
       selectBuilder.append("where");
       for(String key:keys){
           selectBuilder.append(key+" = #"+content.get(key)+"#\r\n");
           if(key != keys.get(keys.size()-1)){
               selectBuilder.append(" and ");
           }
       }
        selectBuilder.append("</select>");
        return selectBuilder.toString();
    }

    private String createInsertString(Map<String,String> content,List<String> keys,String tableName,String paramClass){
        StringBuilder insertBuilder = new StringBuilder();
        insertBuilder.append("<insert id=自己写 paramClass="+paramClass+">\r\n");
        insertBuilder.append("INSERT INTO "+tableName+"(");
        for(int i=1;i<keys.size();i++){
            insertBuilder.append(keys.get(i));
            if(i < keys.size() -1){
                insertBuilder.append(",");
            }
        }
        insertBuilder.append(")\r\n");
        insertBuilder.append("VALUES (");
        for(int i=1;i<keys.size();i++){
            insertBuilder.append("#"+content.get(keys.get(i))+"#");
            if(i < keys.size() -1){
                insertBuilder.append(",");
            }
        }
        insertBuilder.append(")\r\n");
        insertBuilder.append("</insert>");
        return insertBuilder.toString();
    }

}
