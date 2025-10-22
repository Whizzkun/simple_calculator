# Simple Calculator / Calculadora Simples

Uma calculadora simples em Python com operações básicas de aritmética.

A simple Python calculator with basic arithmetic operations.

## Funcionalidades / Features

- Adição (Addition)
- Subtração (Subtraction)
- Multiplicação (Multiplication)
- Divisão (Division)
- Interface de linha de comando interativa (Interactive command-line interface)
- Tratamento de erros (Error handling)

## Como Usar / How to Use

### Executar a Calculadora / Run the Calculator

```bash
python3 main.py
```

### Executar Testes / Run Tests

```bash
python3 test_calculator.py
```

## Estrutura do Projeto / Project Structure

- `calculator.py` - Módulo principal com as operações da calculadora / Main calculator module with operations
- `main.py` - Interface de linha de comando / Command-line interface
- `test_calculator.py` - Testes unitários / Unit tests

## Exemplo de Uso / Usage Example

```
=== Calculadora Simples ===
1. Adicionar (+)
2. Subtrair (-)
3. Multiplicar (*)
4. Dividir (/)
5. Sair
===========================
Escolha uma operação (1-5): 1
Digite o primeiro número: 10
Digite o segundo número: 5

Resultado: 10.0 + 5.0 = 15.0
```

## Usando como Módulo / Using as a Module

```python
from calculator import Calculator

calc = Calculator()
result = calc.add(10, 5)
print(result)  # 15
```

## Licença / License

MIT License - Veja o arquivo LICENSE para mais detalhes / See LICENSE file for details
