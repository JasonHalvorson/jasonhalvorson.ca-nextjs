module.exports = {
    mode     : 'jit',
    purge    : [ './pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}' ],
    darkMode : 'class', // or 'media' or 'class'
    theme    : {
        colors : {
            jhdark   : '#2D4D59',
            jhlight  : '#EDE1DF',
            jhblue   : '#41C4DD',
            jhpurple : '#9853A1',
            jhgreen  : '#05EF9C'
        },
        extend : {}
    },
    variants : {
        extend : {}
    },
    plugins  : []
};
