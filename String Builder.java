class StringBuilder {
    // public static void main(String[] args) {
    //     Scanner sc = new Scanner(System.in);
    //     String str = sc.nextLine();
    //     System.out.println(str);
    //     StringBuilder sb = new StringBuilder();
    //     for(int i = 0; i < str.length(); i++) {
    //         sb.append(str.charAt(i));
    //     }   
    //     System.out.println(sb); 
    // }
    // revrese string
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String str = sc.nextLine();
        System.out.println(str);
        StringBuilder sb = new StringBuilder();
        for(int i = str.length() - 1; i >= 0; i--) {
            sb.append(str.charAt(i));
        }   
        System.out.println(sb); 
    }
}