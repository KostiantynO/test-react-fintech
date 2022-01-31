```shell
cd pro/react
ls
mkdir test-react-fintech
cd !$
code .
cp -R ../react-homework-template-main/ ./

git init
npm i -D prettier eslint prop-types axios nanoid react-icons react-toastify

npx mrm@2 lint-staged
start chrome https://github.com/new
```

`package.json`

```json
  "homepage": "https://KostiantynO.github.io/test-react-fintech/",
```

`jsconfig.json`

```json
{
  "compilerOptions": { "baseUrl": "src" },
  "exclude": ["node_modules", "build"],
  "include": ["src"]
}
```

`.gitignore`

```
.eslintcache
```
