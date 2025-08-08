# Debugging issue - resolved
In case of only console output in the component it's ok.
The problem arises on adding react stuff to react component - in this case "useState".
Adding "useState" causes the error "TypeError: Cannot read properties of null (reading 'useState')" in browser console.

Looks like react stuff isn't reachable to the component, or there is interference between versions.

This repository serves for test implementation of the package, elaborated in the repository "try-simple-package"

### `npm install`
Installs packages from the "package.json". The package in research is omitted, as to be loaded the access token is needed.
The sicurity policy of GitHub hasn't let me send also the token, or i haven't understood the correct workflow.
### `npm run load`
Serves to load the package in research called "@progetti-da-collaborare/try-simple-package", but first in the file package.json you should insert the token value, to be supplied apart.
`cross-env NODE_AUTH_TOKEN=there_the_token_value`
Serves in the script load after &&
### `npm start`
Starts the program execution, that yields the error, seen in browser's console.
### `-----------------------------------------------
The issue seems to be resolved.
Needed 
### `config.externals = {react: 'react'}`
in webpack config. Not sure what was the problem.

!!set-shell in scripts set shell, but changes are taken into account only on the sybsequent runs!!