package java;

/**
 * backend
 */
public class backend {
    public static void main(String[] args) {
        Person person = new Person("Ivan", 5000);
        System.out.println(person + ", " + method(34));
    }

    public static String method(int age) {
        return "his current age is " + age;
    }
}

