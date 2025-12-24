To create a new Next.js application, we use the official CLI command. This scaffolds a production-ready project with the App Router, proper folder structure, and modern defaults.

```bash
npx create-next-app@latest
cd <app-name>
npm run dev
```

`npm run dev` starts the development server (usually on [http://localhost:3000](http://localhost:3000)) with hot reload, meaning UI updates instantly when code changes.

shadcn/ui is initialized to set up a component system that copies components into the project instead of locking us into a library. This gives full control over styling and logic.

```bash
npx shadcn@latest init
npx shadcn@latest add button
```

The `add button` command creates a reusable Button component inside `components/ui`, which follows real-world design system practices.

The `cn()` utility function is used to conditionally merge Tailwind CSS class names. It keeps JSX clean and avoids complex ternary expressions inside `className`.

```tsx
import { cn } from "@/lib/utils";

<Button
  className={cn(
    "bg-indigo-500 text-white",
    state && "bg-red-500 text-white"
  )}
>
  Discord!
</Button>
```

If `state` is false, only the first class is applied. If `state` is true, the second class is added. This pattern is commonly used for active states, toggles, selections, and UI feedback.

`layout.tsx` is a special file in the App Router that wraps all child routes. It is used to configure global UI such as fonts and metadata.

```tsx
export const metadata = {
  title: "My App",
  description: "Next.js App",
};
```

Fonts are usually configured using `next/font` inside `layout.tsx`, ensuring optimized loading and consistency across the app.

Routing in Next.js is file-based. Creating a folder inside the `app` directory and adding a `page.tsx` file automatically creates a route.

```txt
app/
  test/
    page.tsx
```

This route becomes accessible at:

```txt
http://localhost:3000/test
```

Folders wrapped in parentheses are called route groups. They are used only for organization and do not appear in the URL.

```txt
app/
  (auth)/
    login/
      page.tsx
    register/
      page.tsx
```

The above structure results in clean URLs like `/login` and `/register` while keeping authentication-related code grouped together.

A custom `layout.tsx` can be created inside a route group such as `(auth)` to apply different layouts or styles for specific sections of the app.

```txt
app/
  (auth)/
    layout.tsx
    login/
      page.tsx
```

This is commonly used to hide the main navbar, center forms, apply different backgrounds, or customize UI behavior for login and register pages.

This learning approach reflects real-world Next.js development by combining routing, layouts, UI systems, and conditional styling. It builds a strong foundation for scalable frontend development and prepares the app for full-stack features such as authentication, APIs, and databases.
