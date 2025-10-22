#!/usr/bin/env python3
"""
Simple Calculator - Main Entry Point
A command-line calculator application.
"""

from calculator import Calculator


def print_menu():
    """Display the calculator menu."""
    print("\n=== Calculadora Simples ===")
    print("1. Adicionar (+)")
    print("2. Subtrair (-)")
    print("3. Multiplicar (*)")
    print("4. Dividir (/)")
    print("5. Sair")
    print("=" * 27)


def get_numbers():
    """Get two numbers from user input."""
    try:
        a = float(input("Digite o primeiro número: "))
        b = float(input("Digite o segundo número: "))
        return a, b
    except ValueError:
        print("Erro: Por favor, digite números válidos.")
        return None, None


def main():
    """Main function to run the calculator."""
    calc = Calculator()
    
    while True:
        print_menu()
        choice = input("Escolha uma operação (1-5): ")
        
        if choice == '5':
            print("Obrigado por usar a calculadora!")
            break
        
        if choice not in ['1', '2', '3', '4']:
            print("Opção inválida. Por favor, escolha entre 1 e 5.")
            continue
        
        a, b = get_numbers()
        if a is None or b is None:
            continue
        
        try:
            if choice == '1':
                result = calc.add(a, b)
                print(f"\nResultado: {a} + {b} = {result}")
            elif choice == '2':
                result = calc.subtract(a, b)
                print(f"\nResultado: {a} - {b} = {result}")
            elif choice == '3':
                result = calc.multiply(a, b)
                print(f"\nResultado: {a} * {b} = {result}")
            elif choice == '4':
                result = calc.divide(a, b)
                print(f"\nResultado: {a} / {b} = {result}")
        except ValueError as e:
            print(f"\nErro: {e}")


if __name__ == "__main__":
    main()
