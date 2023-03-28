# Roller

Roller is a class that represents a game die and keeps track of the count of how many times each of its faces has been rolled. It is customizable so that the die can have 2 or more faces (as specified in the constructor).


## Using Roller in container

**First, Build the image:** `docker build -t testing-quiz .`

---

**Run tests with your latest code bound to the container:**

```docker run -v "$(pwd)/src":/sandbox/src -it testing-quiz```

It will produce a coverage report at `src/coverage/lcov-report/index.html`

---

**Run mutation tests:**

```docker run -v "$(pwd)/src":/sandbox/src -it testing-quiz npm run mutate```

Mutation test report will be available at `src/mutation/stryker.html`