package MyHashTable;

import javax.validation.constraints.Null;
import java.util.Collection;
import java.util.Map;
import java.util.Objects;
import java.util.Set;

/**
 * Created by jnkmhbl on 16/6/2.
 */
public class MyHashTable<K,V> implements  Map<K,V>{
   private int length = 2;
   private static final float loadFactor = 0.75f ;
   private int threshold ;
   Entry<K,V> [] entries ;
   private int count ;

   public MyHashTable(int initSize){
       length = initSize;
       count = 0;
       threshold = (int)(length * loadFactor);
       entries = new Entry[initSize];
   }



    public synchronized int size(){
        return count ;
    }
    public synchronized boolean isEmpty(){
        return count == 0;
    }
    public synchronized boolean containsKey(Object key){
        Entry [] table = entries;
        for(Entry entry :table){
            if(entry.getKey().equals(key)){
                return true;
            }
            Entry tmp  = entry;
            while(tmp.hasNext()){
                tmp = tmp.getNext();
                if(tmp.getKey().equals(key)){
                    return true;
                }
            }
        }

        return false;
    }
    public  synchronized boolean containsValue(Object value){
        Entry [] table = entries;
        for(Entry entry :table){
            if(entry.getValue() == value){
                return true;
            }
            Entry tmp  = entry;
            while(tmp.hasNext()){
                 tmp = tmp.getNext();
                 if(tmp.getValue() == value){
                     return true;
                 }
            }
        }

        return false;
    }
    public synchronized V get(Object key){
        Entry [] table = entries;
        for(Entry entry :table){
            if(entry.getKey().equals(key)){
                return (V)entry.getValue();
            }
            Entry tmp  = entry;
            while(tmp.hasNext()){
                tmp = tmp.getNext();
                if(tmp.getKey().equals(key)){
                    return (V)entry.getValue();
                }
            }
        }
        return null;
    }
    public synchronized  V put(K key, V value){
        if(count+1>=threshold){
            resize();
        }
        return null;
    }

    private void resize(){
        length = length * 2;
        Entry[] newEntris = new Entry[length];
        for(Entry entry :entries){
            int index = entry.getKey().hashCode() % length ;
            if(newEntris[index] == null){
                newEntris[index] = entry;
                continue;
            }else{
                Entry headEntry = newEntris[index];
                while(headEntry.hasNext()){
                    headEntry = headEntry.nextEntry;
                }
                headEntry.setNext(entry);
            }
        }
    }

    public synchronized V remove(Object key){
        int hashCode = hash((K)key);
        int index = hashCode % length;
        Entry headEntry = entries[index];
        if(headEntry == null){
             return null;
        }
        Entry preEntry = headEntry ;
        while(headEntry != null ){
            if(headEntry.getKey().equals(key)){
                if(headEntry != preEntry){
                    preEntry.setNext(headEntry.getNext());
                }else{
                    headEntry = headEntry.nextEntry;
                }
                length -- ;
                return (V)headEntry;
            }
            preEntry = headEntry;
            headEntry = headEntry.nextEntry;
        }

        return null;
    }
    private int hash(K key){
        return key.hashCode();
    }

    public void putAll(Map<? extends K, ? extends V> m){
        return ;
    }
    public  void clear(){
        return  ;
    }
    public Set<K> keySet(){
        return null ;
    }
    public Collection<V> values(){
        return null;
    }
    public Set<Map.Entry<K, V>> entrySet(){
        return null;
    }






    private static class Entry<K,V> implements Map.Entry<K,V> {
        K key ;
        V value ;
        V oldValue ;
        Entry nextEntry ;
        public K getKey(){
            return key;
        }

        public V getValue(){
            return value;
        }

        public V setValue(V var1) {
            if(var1 == null){
                throw new NullPointerException();
            }
            oldValue = value ;
            value    = var1;
            return oldValue;
        }

        public boolean equals(Object o){
            if(!(o instanceof Map.Entry)){
                return false ;
            }
            Entry var1 = (Entry)o;
            if(var1.getKey().equals(key)&&(var1.getValue() == value)){
                return true;
            }
            return false;
        }

        public int hashCode(){
            return Objects.hashCode(key)^Objects.hashCode(value);
        }

        public boolean hasNext(){
            return nextEntry == null ;
        }

        public Entry removeNext(){
            Entry tmp  = nextEntry;
            nextEntry = null ;
            return tmp;
        }
        public void setNext(Entry entry){
            if(entry == null){
                throw new NullPointerException();
            }
            nextEntry =  entry;
        }

        public Entry getNext(){
            return nextEntry;
        }


    }

}
