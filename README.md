# Module Initialization in Angular

---

Angular provides a means of breaking up code into "_Modules_" that can group components, directives, services and pipes.

--

Modules can import, or be built from, other modules. This is a nice way of packaging a library, where all the related components can be distributed together (e.g. through npm).

--

However, because a module needs to be instantiated before it can be used in another module, two modules _can not_ import each other, or use services that are provided in each other. This leads to a _circular dependency_.

--

Example:

```ts
// Module 1:

@Injectable({providedIn: 'root'})
export class FirstService {
  constructor(second: SecondService) {
    second.doSomething();
  }
  ...
}

// Module 2:

@Injectable({providedIn: 'root'})
export class SecondService {
  constructor(first: FirstService) {
    first.doSomething();
  }
  ...
}
```

---

Fortunately, there are ways to use module composition to influence how a module is used. Adding static functions to a module that return a `ModuleWithProviders` can be a nice way of setting up, or configuring a module to act in a certain way:

--

```ts
export interface LibModuleConfig {
  foo: string;
}

export const CONFIGURATION_DATA = new InjectionToken<LibModuleConfig>(
  "ConfigurationData"
);

@NgModule({
  declarations: [],
  imports: [],
  exports: []
})
export class LibModule {
  static configure(configurationData: LibModuleConfig): ModuleWithProviders {
    return {
      ngModule: LibModule,
      providers: [{ provide: CONFIGURATION_DATA, useValue: configurationData }]
    };
  }
}
```

---

This module could be used in a calling app like this:

```ts
// app.module.ts

@NgModule({
  imports: [LibModule.configure({ foo: "bar" })]
})
export class AppModule {}
```

And a service or component in the `LibModule` could access that config like this:

```ts
@Injectable({ providedIn: "root" })
export class LibService {
  constructor(@Inject(CONFIGURATION_DATA) config: LibModuleConfig) {
    console.log(config.foo); // "bar"
  }
}
```

---

# References

- https://angular.io/guide/architecture-modules

---

# ModuleInitialization

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.1.

## Development server

Run `yarn serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Show Slides

This project uses [remarker](https://github.com/kt3k/remarker) to show slides.
Run `yarn slides` to start a web server for the slides.
