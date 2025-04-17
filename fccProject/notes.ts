// cross-env is being used to set environment variables in windows

/* 
    Whenever code in electron folder changes, 
    we need to run the transpile cmd to recompile it in js 
    and restart the electron app.

    Vite Hot Module Reloading - 
        We don't need to restart the app everytime we change the frontend,
        just saving changes automatically reflects the change.
        We are doing it with loading URL in the electron app (localhost),
        instead of the html file in dist-react.
*/

// npm-run-all : A package used to run multiple npm cmds in parallel.

// '// @ts-ignore' - This comment ignores the type problems in ts.

// using 'recharts' for making chart