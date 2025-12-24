We add UserButton to the page.tsx file and uses afterSignOutUrl to redirect to the home page after sign out. its helps to create a better user experience.

for dark and light mode we can use npm i next-themes to switch between dark and light mode.

and for that shadcn-ui helps us to create a theme provider component. 
we have to make a folder called providers in components folder.and add theme-provider.tsx file in it. and use it in layout.tsx file and wrap it around our app.
 <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem = {false}
        storageKey="xCord-theme"
        >
        {children}
        </ThemeProvider>

        suppressHydrationWarning these are some important points before using theme provider.
        1. we have to add suppressHydrationWarning to html tag in layout.tsx file.
        2. we have to add defaultTheme="dark" to ThemeProvider component.
        3. we have to add enableSystem = {false} to ThemeProvider component.
        4. we have to add storageKey="xCord-theme" to ThemeProvider component.

to toggle we use it in components we create one file called mode-toggle.tsx
after all Done it shows error on dropDown menu so we have to add it from shadCn ui so that error goes away.
and dropDown menu comes in Ui in components folder.and with button component then we have to wrap it in dropdown-menu component.

  className={cn(`${font.className} antialiased`,
          "bg-white dark:bg-[#313338]"
        )}   doing this important it gives me the actual discord look and feel.