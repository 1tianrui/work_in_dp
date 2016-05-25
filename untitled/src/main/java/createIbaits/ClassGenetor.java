package createIbaits;

import java.io.File;
import java.util.List;

/**
 * Created by jnkmhbl on 16/5/16.
 */
public class ClassGenetor {
    private StringBuilder classContentBuilder ;
    private ClassEntity entity;
    public ClassGenetor(ClassEntity entity,String packageName,String classNameEnd,String location){
        this.entity = entity;
        classContentBuilder = new StringBuilder() ;
        classContentBuilder.append(packageName+"."+entity.getClassName()+classNameEnd+";\r\n\r\n\r\n");

        classContentBuilder.append("public class " + entity.getClassName() + classNameEnd + "{\r\n");
        this.prepareAttrs();
        this.prepareGetAndSet();
        classContentBuilder.append("\r\n}");
        File file = new File(location);
    }


    private void prepareAttrs(){
        List<ColumnEntry> entryList = entity.getAttributeMap();
        for(ColumnEntry entry: entryList){
            classContentBuilder.append("private "+entry.getType()+" "+entry.getName()+";\r\n");
        }

    }
    private void prepareGetAndSet(){
        List<ColumnEntry> entryList = entity.getAttributeMap();
        for(ColumnEntry entry: entryList){
          classContentBuilder.append(" \r\nprivate void set"+convertFirstToUpper(entry.getName())+"("+entry.getType()+" "+entry.getName()+")\r\n{");
          classContentBuilder.append("this."+entry.getName()+"="+entry.getName()+";\r\n}");
          classContentBuilder.append("\r\nprivate "+entry.getType()+" get"+this.convertFirstToUpper(entry.getName())+"(){\r\n return this."+entry.getName()+";\r\n}");
        }
    }
    private String convertFirstToUpper(String content){
       char  [] array =  content.toCharArray();
        array[0]= Character.toUpperCase(array[0]);
        return String.copyValueOf(array);
    }
}
