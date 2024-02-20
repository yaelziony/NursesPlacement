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

There are some additional options for the configuration.

#### For example

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

![Alt text](C:\Users\yzioni\Pictures\Screenshots\img1.png raw=true "Optional Title")

### Docker

#### For example

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

## .gitignore

### Common

Git sees every file in your working copy as one of three things:

1. tracked - a file that has been previously staged or committed;
2. untracked - a file that has not been staged or committed;
3. ignored - a file that Git has been explicitly told to ignore.

Ignored files are usually built artifacts and machine-generated files that can be derived from your repository source or should otherwise not be committed.

Some common examples are:
• dependency caches, such as the contents of /node_modules or /packages
•compiled code, such as .o, .pyc, and .class files
•build output directories, such as /bin, /out, or /target
•files generated at runtime, such as .log, .lock, or .tmp
•hidden system files, such as .DS_Store or Thumbs.db
•personal IDE config files, such as .idea/workspace.xml

Ignored files are tracked in a special file named .gitignore that is checked in at the root of your repository. There is no explicit git ignore command: instead the .gitignore file must be edited and committed by hand when you have new files that you wish to ignore. .gitignore files contain patterns that are matched against file names in your repository to determine whether or not they should be ignored.

#### Some examples

##### Java.gitignore

```json
# Compiled class file
*.class

# Log file
*.log

# BlueJ files
*.ctxt

# Mobile Tools for Java (J2ME)
.mtj.tmp/

# Package Files #
*.jar
*.war
*.nar
*.ear
*.zip
*.tar.gz
*.rar

# virtual machine crash logs
hs_err_pid*
replay_pid*
```

##### Node.gitignore

```cmd
# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
lerna-debug.log*
.pnpm-debug.log*

# Runtime data
pids
*.pid
*.seed
*.pid.lock

# nyc test coverage
.nyc_output

# Compiled binary addons 
build/Release

# Dependency directories
node_modules/
jspm_packages/

# Optional npm cache directory
.npm

# Optional eslint cache
.eslintcache

# Optional REPL history
.node_repl_history

# Output of 'npm pack'
*.tgz

# Yarn Integrity file
.yarn-integrity

# dotenv environment variable files
.env
.env.development.local
.env.test.local
.env.production.local
.env.local
```

---
