package sort;

import java.util.Arrays;

/**
 * Created by tianrui on 16/4/20.
 */
//如果知道最大的数的值，通过位图来进行排序，类似一个桶排序
public class BitSort {

    public static void main(String args[]){
        int [] arr = new int [] {1,3,5,6,34,65,45};
        System.out.println(Arrays.toString(sortByMaxN(65, arr)));
    }

    public static byte[] sortByMaxN(int MAX,int[] arrayToSort){
        byte[] sortResult = new byte[MAX+1];
        for(int a :arrayToSort){
            sortResult[a] = 1;
        }
        return sortResult;
    }
}
