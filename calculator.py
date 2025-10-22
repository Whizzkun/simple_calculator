def add(x, y):
    return x + y

def subtract(x, y):
    return x - y

def multiply(x, y):
    return x * y

def divide(x, y):
    if y == 0:
        return "Erro: Divisão por zero"
    return x / y

def main():
    print("Calculadora Simples")
    print("Operações disponíveis: +, -, *, /")
    print("Digite 'sair' para encerrar")

    while True:
        try:
            num1 = input("Digite o primeiro número: ")
            if num1.lower() == 'sair':
                break
            num1 = float(num1)

            op = input("Digite a operação (+, -, *, /): ")
            if op.lower() == 'sair':
                break

            num2 = input("Digite o segundo número: ")
            if num2.lower() == 'sair':
                break
            num2 = float(num2)

            if op == '+':
                result = add(num1, num2)
            elif op == '-':
                result = subtract(num1, num2)
            elif op == '*':
                result = multiply(num1, num2)
            elif op == '/':
                result = divide(num1, num2)
            else:
                print("Operação inválida")
                continue

            print(f"Resultado: {result}")

        except ValueError:
            print("Entrada inválida. Digite números válidos.")

if __name__ == "__main__":
    main()