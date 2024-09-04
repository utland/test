package java;

public class Person {
    private String name;
    private int salary;
    public static int staticId = 1943;

    public Person(String name, int salary) {
        this.name = name;
        this.salary = salary;
    }

    public String getName() {
        return name;
    }

    public int getSalary() {
        return salary;
    }

    @Override
    public String toString() {
        // TODO Auto-generated method stub
        return "He is " + name + " with salary equals" + salary;
    }
}
