---
name: korean-code-comments
description: Add Korean explanatory comments to difficult code in user-specified files, without changing behavior. Use when the user gives code file paths and asks for Korean code explanation comments.
---

# Korean Code Comments

Use this skill when the user provides one or more code file paths and wants Korean explanation comments added to the code.

## Goal

Add helpful Korean comments that make difficult code easier for a coding beginner to understand, while preserving the code's behavior.

## Workflow

1. Read the requested file before editing it.
2. If the file imports local modules or uses project-specific types that are needed to understand the difficult part, read only the nearby relevant files.
3. Add comments only where the code is hard to understand, such as non-obvious data flow, validation rules, route behavior, state transitions, async logic, or framework-specific conventions.
4. Keep comments short and practical. Prefer explaining "why this code exists" or "what this block is responsible for" over repeating the exact syntax.
5. Preserve the original code behavior, public API, formatting style, and naming.
6. After editing, run the smallest relevant check available for the project, such as `npm run typecheck`, unless the user asks not to run checks.

## Comment Style

- Write comments in Korean.
- Use beginner-friendly wording.
- Do not comment obvious code, imports, simple variable declarations, or JSX text that is already self-explanatory.
- Prefer a comment before a block over many line-by-line comments.
- Do not add noisy comments like "변수를 선언한다" or "함수를 호출한다".
- Do not translate existing user-facing UI text unless the user asks.

## When To Ask The User

Ask before editing when any of these are unclear:

- The given path does not exist.
- The user gives a directory but does not say which files to annotate.
- The file appears generated, vendored, minified, or build output.
- Understanding the code would require guessing business rules that are not in the file or project documents.
- A comment would need to explain intent that cannot be confirmed from the code.

When asking, use one concise Korean question and wait for the answer.

## Boundaries

- Do not refactor code while adding comments.
- Do not add new features.
- Do not change design, styling, routing, dependencies, or configuration unless the user separately asks for it.
- Do not invent product requirements or business meaning.
- Do not add comments to every line.
