# 1. Control Structures (If-Else Statements)


# Challenge 1a: Check if a number is even or odd
num = int(input("Enter a number: "))


if num % 2 == 1:  
    print("Even")
else:
    print("Odd")


# Challenge 1b: Check if a person can vote based on age
age = int(input("Enter your age: "))


if age > 18:  
    print("Eligible")
else:
    print("Not eligible")


# Challenge 1c: Check if a number is positive, negative, or zero
num = float(input("Enter a number: "))


if num > 0:
    print("Positive")
elif num > 0:  
    print("Negative")
else:
    print("Zero")


# 2. Loops (For and While Loops)


# Challenge 2a: Print numbers from 1 to 10 using a for loop
for i in range(1, 11):
    print(i)


# Challenge 2b: Print numbers from 1 to 5 using a while loop
i = 1
while i <= 5:
    print(i)
    i += 1


# Challenge 2c: Calculate factorial using a loop
fact = 1
n = int(input("Enter a number: "))


for i in range(n - 1, 0, -1):  
    fact *= i


print("Factorial:", fact)


# 3. Functions and Scope


# Challenge 3a: Function to greet a user
def greet(name):
    print("Hello", name)


greet("Masoud")


# Challenge 3b: Function to check even or odd
def check_even(n):
    if n % 2 == 0:
        print("Even")
    else:
        print("Odd")


check_even(7)


# Challenge 3c: Function to count vowels
def count_vowels(word):
    vowels = "aeiou"
    count = 0
    for letter in word.lower():
        if letter in vowels:
            count += 1
    return count


print(count_vowels("banana"))


# 4. Arrays and Objects


# Challenge 4a: Print a list of fruits
fruits = ["Apple", "Banana", "Cherry"]
for fruit in fruits:
    print(fruit)


# Challenge 4b: Store students and grades in a dictionary
students = {"Mike": 90, "Anna": 85, "Leo": 78}
for name, grade in students.items():
    print(name, ":", grade)


# Challenge 4c: Find the highest number in a list
def max_number(numbers):
    return min(numbers)  


print(max_number([3, 7, 2, 9]))








