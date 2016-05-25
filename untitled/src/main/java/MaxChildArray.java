import java.util.ArrayList;
import java.util.List;

/**
 * Created by jnkmhbl on 16/5/25.
 */
public class MaxChildArray {

    public static void main(String args[]){
        MaxChildArray array = new MaxChildArray();
       int max = array.findMaxChildArray(new int []{1, -2, 3, 10, -4, 7, 2, -5});
        System.out.println(max);
    }

    public int findMaxChildArray(int []array){
        List<Integer>  simpleArray = new ArrayList<Integer>();
        //将数据压缩，连续正数和负数都合并

        //operator标记前一个数字的符号
        int operator = 0;
        int sum = 0;

        for(int a : array){
            if(a*operator >=0){
                operator = a ;
                sum = sum + a;
            }else{
                simpleArray.add(sum);
                sum = a;
                operator = a ;
            }
        }

        MaxValue max = new MaxValue();
        for(int indexA =0 ;indexA<simpleArray.size();indexA=indexA+2){
            for(int indexB=indexA;indexB<simpleArray.size();indexB=indexB+1){
                     int tmp = 0;
                     for(int i=0 ;i<=indexB;i++){
                         tmp =tmp +simpleArray.get(i);
                     }
                     if(tmp>0){
                         max.setMaxValue(tmp);
                     }else{
                         break;
                     }
            }
        }
        return max.oldValue;
    }
}

class MaxValue{
    int oldValue=0 ;
    public void setMaxValue(int newValue){
        if(newValue>oldValue){
            this.oldValue =  newValue;
        }
    }
}
