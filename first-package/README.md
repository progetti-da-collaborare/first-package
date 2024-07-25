# Debugging issue - resolved
In case of only console output in the component it's ok.
The problem arises on adding react stuff to react component - in this case "useState".
Adding "useState" causes the error "TypeError: Cannot read properties of null (reading 'useState')" in browser console.

Looks like react stuff isn't reachable to the component, or there is interference between versions.

This repository serves for package construction and publishing. Tests are fulfilled in the repository "try-simple-package-test"

### `npm start`
Starts workflow to demonstrate, that the component to be packaged is correct, the output is fulfilled to browser console.
### `npm run build`
Serves to launches the process of package production. To be published in GitHub repository the project is sent to the repoitory, on making release version in the repository action is started, that yields stuff to produce the package. The action is submitted in the ".github/workflows" directory.
### `-----------------------------------------------
The issue seems to be resolved.
Needed 
### `config.externals = {react: 'react'}`
in webpack config. Not sure what was the problem.