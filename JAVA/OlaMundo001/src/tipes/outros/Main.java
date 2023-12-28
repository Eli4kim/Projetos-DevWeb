package tipes.outros;

public class Main {
    public static void main(String[] args) {
        System.out.println("Hello world!");
        Nome nome = new Nome();
        nome.mostrarNome();
        nome.soma(2,5);
        System.out.println(nome.soma(2,5));
        String n = "Valor";
        System.out.println(n.toUpperCase());
        double f = 5.55;
        System.out.println(f);
    }
}