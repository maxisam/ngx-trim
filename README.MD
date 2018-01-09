[![npm](https://img.shields.io/npm/dt/ngx-trim.svg?style=flat-square)](https://www.npmjs.com/package/ngx-trim)
[![GitHub release](https://img.shields.io/github/release/maxisam/ngx-trim.svg?style=flat-square)](https://github.com/maxisam/ngx-trim/releases)
[![npm](https://img.shields.io/npm/l/ngx-trim.svg?style=flat-square)]()


# ngx-trim

Demo: https://angular-ap2pq8.stackblitz.io

## Installation

To install this library, run:

```bash
$ npm install ngx-trim --save
```

## Consuming your library

Once you have published your library to npm, you can import your library in any Angular application by running:

```bash
$ npm install ngx-trim
```

and then from your Angular `AppModule`:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
// Import the library
import { NgxTrimModule } from 'ngx-trim';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
// Import the library    
    NgxTrimModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Once your library is imported, you can use its components, directives and pipes in your Angular application:

```xml
<!-- You can now use your library component in app.component.html -->

<input type="text"  placeholder="input" [(ngModel)]="testInput" ngxTrim>

```
## Features

Trim text after input event, `focusout` or `keyup`.

You can set it as `ngxTrim='focusout'` or 

## Development

To generate all `*.js`, `*.d.ts` and `*.metadata.json` files:

```bash
$ npm run build
```

To lint all `*.ts` files:

```bash
$ npm run lint
```
## Acknowledgement 

This project uses [generator-angular2-library](https://github.com/jvandemo/generator-angular2-library)

## License

MIT © [Sam Lin](mailto:maxisam@gmail.com)
