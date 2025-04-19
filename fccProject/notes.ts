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

// process.platform return different values based on the OS the app is running in.

/* <meta 
    http-equiv="Content-Security-Policy"
    content="default-src 'self'; style-src 'self' 'unsafe-inline'; script-src 'self' analytics.google.com;"
    />
    For Security
*/

/*
    Electron closes the app differently for different reasons:
        1. On closing all windows.
        2. On app.quit()
        3. sAutomatically (AutoUpdate)

    1. Closes all windows -> 'before-quit' event -> App stops.
    2. & 3. 'before-quit' event -> all windows get closed -> App stops.
*/