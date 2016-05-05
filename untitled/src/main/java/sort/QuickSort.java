package sort;

import java.util.Arrays;

/**
 * Created by jnkmhbl on 16/4/20.
 */
public class QuickSort {

    public static void main(String args[]){
        QuickSort sort = new QuickSort();
        int array[] = new int[]{1,4,6,3,6,345,34,5,654,654,64,234};
        sort.quickSort(0,array.length-1,array);
       for(int i :array){
           System.out.print(i+" ");
       }
    }
    public void quickSort(int start,int end,int []array){
        if(start >= end){
            return ;
        }
        int key = array[start];
        int  j = end ;
        int  i = start ;

        while(i!=j) {
            System.out.println(""+i+"  "+j);
            for (; j > i; j--) {
                if (array[j] < key) {
                    this.swap(array, j, i);
                    break;
                }
            }

            for (; i < j; i++) {
                if (array[i] > key) {
                    swap(array, i, j);
                    break;
                }
            }
        }
        quickSort(start,i-1,array);
        quickSort(i+1,end,array);

    }
    private void swap(int[] array,int a,int b){
        int tmp =array[a];
        array[a]=array[b];
        array[b]=tmp;
    }

}
