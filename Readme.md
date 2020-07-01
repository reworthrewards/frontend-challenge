# ReWorth Coding Challenge: fullstack

![Build](https://github.com/appuntos/fullstack-challenge/workflows/Build/badge.svg?branch=master)

> Little coding challenge for our hiring process.
> Involves React components and API integration tasks.

## Getting started

To get stated clone project and install dependencies.

```{.bash}
git clone https://github.com/appuntos/fullstack-challenge
```

```{.bash}
cd fullstack-challenge
npm install
```

After that start the development server and the test api server(run each
command in a separate terminal session, I recommend using tmux)

```{.bash}
npm start
```

## Possible pitfalls and sources of confusion

**BEWARE!!** This project uses **global default imports** and **import
aliases**. What that means is that some modules are imported default
with default names. To avoid lots of headache be sure not to define
variables with the folowing names(as these exist in the global
namespace for all project files):

-   store (this a reference the redux store)
-   log (this is a global reference to loglevel)

Furthermore, react and { useState } are imported by default globally.
So.. **do not include this code in any file**:

```{.javascript org-language="js"}
import React from 'react';
```

**Or**

```{.javascript org-language="js"}
import React, { useState } from 'react';
```

See the package.json file for this project. Auto-imports are definded
under _babel plugins_ and look like this:

```{.javascript org-language="js"}
"babel": {
    "plugins": [
        "auto-import",
        {
            "declarations": [
                {
                    "default": "React",
                    "path": "react",
                    "members": [
                        "useState"
                    ]
                },
                ...
            }
        }
    }
}
```

**BEWARE!! This list of default imports is subject to change! check the actual file for changes**

## Style guide

All code introduced to this project should follow the following
guidelines:

1.  Code should prefer functions over classes at all costs. See [the
    docs](https://reactjs.org/docs/hooks-intro.html) for details on
    using functional components in React.

## Instructions

Please read the following instructions carefully and if you have any questions please address them to whom sent the challenge:

> Take a minute to analyze the project set up and locate everything you need

1.  Fork this repo
2.  Using the canvas project, implement the following requirements:

-   Connect to the ReWorth API with help from the provided documentation (No authentication needed for this exercise) https://docs.google.com/document/d/1ckJwM6Uy25uAZL8ja4PlzYE_iusgb5cWgpL0mTjT6Rw
-   Perform a GET request to the directory and fetch the offer array
-   Display the offers in a list using the data you have available from the API (get creative)
-   Based on the colors of ReWorth, make it look cool. No design is provided but a nice UI is expected
-   Create as many components or assets as you need, be careful to organize the files in a clear way and use comments when necessary

3.  You can use and install npm libraries if needed, please provide a reasoning for your choices, you can use a component library or create custom components.
4.  Optimize and check your code for errors
5.  When you're ready, push your solution to your forked repo and let us know via email!
6.  **Bonus** Implement list ordering by any of the object attributes and explain how you did it

-   We'll evaluate the overall solution, so take time to optimize and document your code. We take into consideration the following points: Coding practices and standards, code optimization, does it run/work?, Documentation and reasoning behind your solution.
-   If you have any questions or issues running the cample project please let us know ASAP so we can get you help.

## Technologies Used

-   Reactjs
-   Parcel
-   Babel
