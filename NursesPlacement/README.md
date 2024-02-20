---
# Git commands

---
## Pre-commit
Git hook scripts are useful for identifying simple issues before submission to code review. We run our hooks on every commit to automatically point out issues in code such as missing semicolons, trailing whitespace, and debug statements. By pointing these issues out before code review, this allows a code reviewer to focus on the architecture of a change while not wasting time with trivial style nitpicks.

As we created more libraries and projects we recognized that sharing our pre-commit hooks across projects is painful. We copied and pasted unwieldy bash scripts from project to project and had to change the hooks to work for different project structures manually.

It should always use the best industry standard linters. Some of the best linters are written in languages that we do not use in our project or have installed on our machine. For example, scss-lint is a linter for SCSS written in Ruby. If we’re writing a project in node we should be able to use scss-lint as a pre-commit hook without adding a Gemfile to our project or understanding how to get scss-lint installed.

Because of that, built pre-commit to solve hook issues. It is a multi-language package manager for pre-commit hooks. We specify a list of hooks we want and pre-commit manages the installation and execution of any hook written in any language before every commit. pre-commit is specifically designed to not require root access. If one of the developers doesn’t have node installed but modifies a JavaScript file, pre-commit automatically handles downloading and building node to run eslint without root.

### Installation 

`pip install pre-commit`

### Add pre-commit configuration

```cmd
repos:
-   repo: https://github.com/pre-commit/pre-commit-hooks
    rev: v2.3.0
    hooks:
    -   id: check-yaml
    -   id: end-of-file-fixer
    -   id: trailing-whitespace
-   repo: https://github.com/psf/black
    rev: 22.10.0
    hooks:
    -   id: black
```

There are some additional options for the configuration:
**For example:**

```cmd
exclude: '^$'
fail_fast: false
```

The repo has additional hooks available.                                     **For example:**

`no-commit-to-branch`
`name-tests-test`
`check-xml`
`check-case-conflict`
`check-json`

### Run

Setting up the git hook scripts:
`pre-commit install`

image.png
Now `pre-commit` will run automatically on git commit!

There is an option to manually run all the pre-commit hooks in the repository, by: `pre-commit run --all-files.` To run individual hooks: in `pre-commit run <hook_id>`.

image.png

### Docker:
#### For example:

```cmd
id: dockerfile-provides-entrypoint
    name: ...
    language: docker_image
    entry: my.registry.example.com/docker-image-1:latest
-   id: dockerfile-no-entrypoint-1
    name: ...
    language: docker_image
    entry: --entrypoint my-exe my.registry.example.com/docker-image-2:latest
# Alternative equivalent solution
-   id: dockerfile-no-entrypoint-2
    name: ...
    language: docker_image
    entry: my.registry.example.com/docker-image-3:latest my-exe
```

---

---

## .gitignore

---
