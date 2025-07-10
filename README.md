# Lab 6.1: Inventory Tracker

## Reflection & Critical Thinking

Completing this lab provided valuable hands-on experience with TypeScript’s object-oriented features and highlighted the importance of thoughtful software design. Consider the following reflective questions and insights:

1. **How does TypeScript enforce type safety in this object-oriented program?**

   Working with TypeScript, I noticed how explicit type annotations for class properties, method parameters, and return types act as a safety net. This not only prevents accidental type mismatches but also makes the code more self-documenting and easier to maintain. TypeScript’s compile-time checks caught potential issues early, which would have been harder to debug at runtime in plain JavaScript.

2. **How did inheritance reduce code duplication for PhysicalProduct and DigitalProduct?**

   By leveraging inheritance, I was able to define shared logic—such as constructors and display methods—in the `Product` base class. Both `PhysicalProduct` and `DigitalProduct` inherited these features, which meant I could focus on their unique behaviors without repeating code. This made the codebase cleaner and changes to shared logic easier to propagate.

3. **What are the benefits of using encapsulation and access modifiers (public, private, protected) in this context?**

   Encapsulation allowed me to group related data and behaviors within each class, keeping implementation details hidden and exposing only what’s necessary. Using access modifiers like `public`, `private`, and `protected` helped control how properties and methods are accessed, reducing the risk of unintended side effects and making the code more robust and secure.

4. **If you had to add a new type of product (e.g., a SubscriptionProduct), how would polymorphism make this extension straightforward?**

   Polymorphism was a powerful concept in this lab. By interacting with products through a shared interface or base class, I could easily introduce new product types like `SubscriptionProduct`. As long as the new class adhered to the expected interface, the rest of the system would work seamlessly, demonstrating how polymorphism supports scalability and flexibility in software design.

---

Reflecting on these questions, I see how TypeScript’s features and object-oriented principles work together to create code that is not only functional but also maintainable and extensible. This lab reinforced the value of planning class hierarchies and thinking ahead about how new requirements might be integrated in the future.