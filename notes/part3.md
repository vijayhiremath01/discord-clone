UserButton from Clerk is added inside `page.tsx` to show the authenticated user menu. The `afterSignOutUrl` prop is used to redirect the user to the home page after signing out, which improves overall user experience.

```tsx
<UserButton afterSignOutUrl="/" />
```

For dark and light mode support, `next-themes` is used. It allows theme switching by adding a class (`dark` or `light`) to the HTML element.

```bash
npm i next-themes
```

shadcn/ui provides a clean way to create a Theme Provider component. A `providers` folder is created inside the `components` directory, and a `theme-provider.tsx` file is added there.

This ThemeProvider is then used in `layout.tsx` and wraps the entire application so that theme state is available everywhere.

```tsx
<ThemeProvider
  attribute="class"
  defaultTheme="dark"
  enableSystem={false}
  storageKey="xCord-theme"
>
  {children}
</ThemeProvider>
```

Before using the ThemeProvider, some important setup steps are required to avoid hydration issues:

1. Add `suppressHydrationWarning` to the `<html>` tag in `layout.tsx`.
2. Set `defaultTheme="dark"` so the app loads consistently in dark mode.
3. Set `enableSystem={false}` to avoid conflicts with system theme.
4. Add a custom `storageKey` (`xCord-theme`) to persist the selected theme in local storage.

To toggle between dark and light mode, a separate component is created named `mode-toggle.tsx` inside the `components` folder.

After implementing the toggle, a dropdown-related error appears. This is resolved by adding the `dropdown-menu` component from shadcn/ui.

```bash
npx shadcn@latest add dropdown-menu
```

The dropdown menu component is placed inside the `components/ui` folder. The toggle button is then wrapped inside the `DropdownMenu` component to properly handle the UI and interactions.

For styling consistency and to achieve a Discord-like look and feel, global class names are applied using the `cn()` utility along with the font class.

```tsx
className={cn(
  `${font.className} antialiased`,
  "bg-white dark:bg-[#313338]"
)}
```

This ensures correct font rendering, smooth text, and proper background colors for both light and dark modes, closely matching Discord’s UI appearance.
