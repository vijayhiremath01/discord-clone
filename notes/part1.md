we use npx create-next-app@latest to create a new next.js app
we cd into the app directory
we run npm run dev to start the app

we use npx shadcn@latest init to initialize shadcn-ui
npx shadcn@latest add button - helps to add a button component to the app 

learned cn fun() use in className - 
<Button className={cn("bg-indigo-500 text-white" ,
      state && "bg-red-500 text-white"
    )}> Discord ! </Button>
    if here the state is false will render the first class name or true will render the second class name

we can change the font and metadata in layout.tsx  

just by creating the folder in that a file we can get a route means localhost:3000/test --- > will show code of text/page.tsx

if we want any organizational folder we name the foleder name as (folder_name)

we can create our own layout inside (auth) for login and register files 
so that for them we can give different styles and custom works 