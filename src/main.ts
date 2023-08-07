import { createApp } from "vue";
import "./style.css";
import Application from "./App.vue";
import MainRouter from "./router/index";

// Create a new instance of the Vue app
const app = createApp(Application);

// Create a new instance of Vue router
const router = MainRouter;
const allBootstrappedModuleNames: any[] = [];
const allBootstrappedModuleRouter: any[] = [];

// Initialize the Vue.js application
const initApp = async () => {
  // Use all modules bootstrapper to add global Vue plugins and components
  allBootstrappedModuleRouter.forEach((moduleRouter) => {
    app.use(moduleRouter);
  });

  // Add the router and Pinia store to the Vue app
  app.use(router);

  // Mount the Vue app to the DOM element with ID "app"
  app.mount("#app");
  // Set up an error handler to report any errors to tracking services
  app.config.errorHandler = (err, instance, info) => {
    console.log("REPORT:", err, instance, info);
  };
};

const bootstrapAllModules = async () => {
  // Require all module's index.ts in the modules directory
  const modules: any = import.meta.glob("./modules/**/*.ts");
  for (const modulePath in modules) {
    const x = await modules[modulePath]();

    if (x.moduleName) {
      allBootstrappedModuleNames.push(x.moduleName);
    }

    // If the module has a router, push it to the allBootstrappedModuleRouter array
    if (x.router) {
      allBootstrappedModuleRouter.push(x.router);
    }
  }

  // Loop through each module
  console.log(allBootstrappedModuleNames);
};

// Start the App
(async () => {
  try {
    await bootstrapAllModules();
    await initApp();
  } catch (error) {
    console.error(error);
  }
})();

// Export an empty object to avoid TypeScript warnings
export {};
