const colors = require('tailwindcss/colors');

module.exports = {
    darkMode : 'class',
    content  : [ './pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}' ],
    theme    : {
        colors : {
            jhdark   : '#071E3D',
            jhlight  : '#EDE1DF',
            jhblue   : '#41C4DD',
            jhpurple : '#9853A1',
            jhgreen  : '#05EF9C',
            black    : colors.black,
            white    : colors.white,
            gray     : colors.slate,
            red      : colors.red,
            orange   : colors.orange,
            yellow   : colors.yellow,
            green    : colors.green,
            blue     : colors.blue,
            indigo   : colors.indigo,
            purple   : colors.purple,
            pink     : colors.pink,
            teal     : colors.teal,
            cyan     : colors.cyan
        },
        extend : {}
    },
    plugins  : []
};
