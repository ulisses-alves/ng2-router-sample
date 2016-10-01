System.config({
  transpiler: 'typescript',
  typescriptOptions: {
    emitDecoratorMetadata: true
  },
  paths: {
    'npm:': 'https://unpkg.com/'
  },
  map: {
    'manifest': './manifest.ts',
    'app': './',
    '@angular/core': 'npm:@angular/core@2.0.1/bundles/core.umd.min.js',
    '@angular/common': 'npm:@angular/common@2.0.1/bundles/common.umd.min.js',
    '@angular/compiler': 'npm:@angular/compiler@2.0.1/bundles/compiler.umd.min.js',
    '@angular/platform-browser': 'npm:@angular/platform-browser@2.0.1/bundles/platform-browser.umd.min.js',
    '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic@2.0.1/bundles/platform-browser-dynamic.umd.min.js',
    '@angular/http': 'npm:@angular/http@2.0.1/bundles/http.umd.min.js',
    '@angular/router': 'npm:@angular/router@3.0.1/bundles/router.umd.min.js',
    'rxjs': 'npm:rxjs@5.0.0-beta.12'
  },
  packages: {
    app: {
      main: './main.ts',
      defaultExtension: 'ts'
    },
    rxjs: {
      defaultExtension: 'js'
    }
  }
});
