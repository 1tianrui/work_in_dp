import java.util.ArrayList;
import java.util.List;
import java.util.Stack;

/**
 * Created by jnkmhbl on 16/4/18.
 */
public class LabelCleaner {
    public static String filtHtml(String description){
        List<DeletePair> deleteIndexPair = new ArrayList<DeletePair>();
        Stack<Integer> startIndexStack = new Stack<Integer>();

        int index = 0;
        for(char code :description.toCharArray()){
            if(code == '<'){
                startIndexStack.push(index);
            }
            if(code == '>'){
                Integer startIndex = startIndexStack.pop();
                if(startIndexStack.isEmpty()){
                    DeletePair pair = new DeletePair();
                    pair.start = startIndex;
                    pair.end = index;
                    deleteIndexPair.add(pair);
                }
            }
            index ++;
        }
        StringBuilder builder = new StringBuilder();
        int preEnd = -1;
        for(DeletePair pair :deleteIndexPair){
             builder.append(description.substring(preEnd+1,pair.start));
             preEnd = pair.end;
        }

        return builder.toString();
    }

}
