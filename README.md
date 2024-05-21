
# markdown-build
Build website from Markdown.

# How to use
```
mdbuild -p <folder>
mdbuild -p ~/Github/myMarkdownWebsite/
```

# Structure
```
/demo
- /www
- - index.md
- /templates
- - layout.eta
```
In `/www` folder you add all your markdown files, you can create routes by creating folders like with static `html` as it will become `html` afterwards.

The `/templates` folder must include a `layout.eta` file, markdown-build uses the `etajs` library to create templates and other cool things that will be added in the future.

# Demo
1. Clone the repository.
`git clone https://github.com/4e576rt8uh9ij9okp/markdown-build`
2. `cd` into the `demo` folder inside the repository folder.
`cd markdown-build/demo/`
3. Build it.
`mdbuild`
