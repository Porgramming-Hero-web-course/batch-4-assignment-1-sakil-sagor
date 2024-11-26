# Understanding Union and Intersection Types in TypeScript

TypeScript enhances JavaScript by adding static typing, and two important features of its type system are **union types** and **intersection types**. These allow you to create more flexible and type-safe code. Let’s break them down in simple terms.

## Union Types

A **union type** allows a variable to hold one of several types. It’s like saying, “This variable can be either one type or another.”

### Example:

```typescript
let value: string | number;
value = "sakil"; // Valid
value = 26; // Also valid
```

In this example, value can be either a string or a number.

## Intersection Types

An **intersection type** combines multiple types into one. This means a variable must have all the types at once.

When a function can accept different types of input like a string or number.
Intersection Types
An intersection type combines multiple types into one. This means a variable must have all the types at once.

### Example:

```typescript
interface Person {
  name: string;
}

interface Contact {
  email: string;
}

type Employee = Person & Contact;

const employee: Employee = {
  name: "sakil",
  email: "sakil@sagor.com",
};
```

Here, the Employee type needs to have both name and email.

# Use Case:

When you want to combine several properties or types into a single one.

### Conclusion

Union types (|) let a variable be one of many types, while intersection types (&) combine multiple types into a single one. These features make TypeScript more powerful and flexible, allowing you to write safer and more expressive code.

By understanding union and intersection types, you can handle different data structures and improve the type safety of your code!
