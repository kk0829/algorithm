public class BubbleSort {

    public static void main(String[] args) {
        int[] arr = new int[]{6, 4, 3, 8, 1};
        int[] newArr = new BubbleSort().bubbleSort(arr);
        System.out.println(newArr);
    }

    public int[] bubbleSort(int[] arr) {
        int len = arr.length;

        for (int i = 0; i < len; i++) {
            for (int j = 0; j < len - i - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    int tmp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = tmp;
                }
            }
        }

        return arr;
    }
}
