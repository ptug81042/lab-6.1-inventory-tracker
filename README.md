# Lab 6.1: Inventory Tracker

## Critical Thinking

After completing the lab, consider the following questions:

1. **How does TypeScript enforce type safety in this object-oriented program?**

   TypeScript enforces type safety by requiring explicit type annotations for class properties, method parameters, and return types. This ensures that only the correct types of values can be assigned or passed, reducing runtime errors and making the code more predictable and maintainable.

2. **How did inheritance reduce code duplication for PhysicalProduct and DigitalProduct?**

   Inheritance allowed both `PhysicalProduct` and `DigitalProduct` to share common properties and methods defined in the `Product` base class. This eliminated the need to rewrite shared logic, such as the constructor and display methods, in each subclass, making the codebase more concise and easier to maintain.

3. **What are the benefits of using encapsulation and access modifiers (public, private, protected) in this context?**

   Encapsulation helps group related data and behaviors within classes, hiding internal implementation details and exposing only what is necessary. Using access modifiers like `public`, `private`, and `protected` controls how properties and methods are accessed, which helps prevent unintended interactions and keeps the codebase robust and secure.

4. **If you had to add a new type of product (e.g., a SubscriptionProduct), how would polymorphism make this extension straightforward?**

   Polymorphism allows new product types to extend the `Product` base class and override methods as needed. The rest of the program can interact with all products through the shared `Product` interface, making it easy to add new product types like `SubscriptionProduct` without changing the code that processes products in general.