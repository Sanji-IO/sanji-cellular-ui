# Sanji Cellular UI
UI Component of bundle cellular

<img src="https://user-images.githubusercontent.com/880569/41753245-bcdd618c-75fe-11e8-9718-eac0c0159ea6.png" alt="demo" width="450px" />

## Getting Started

Start mock API server and render via dev server
```
yarn
```
Build for production assets
```
yarn build
```

## Test with CG Server
Set `BASE_PATH` and `API_TOKEN` to webpack.config.js
```
  __BASE_PATH__: JSON.stringify(BASE_PATH || 'http://localhost:8000/api/v1'),
  __API_TOKEN__: JSON.stringify(API_TOKEN || '12345678')
```

## License
This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
