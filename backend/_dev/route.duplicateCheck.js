function createRoutes(controllerBox, prefix) {
  Object.keys(controllerBox).forEach((key) => {
    const { findAll, findOne, create, update, remove, paginate } = controllerBox[key];
    const controllerMiddlewares = middlewareMappings[prefix]?.[key] || {};
    const baseRoute = `/${prefix}/${key.split('C')[0]}`;

    const addRoute = (method, path, handlers) => {
      const fullPath = `${method} ${path}`;
      if (!createdRoutes.has(fullPath)) {
        createdRoutes.add(fullPath);
        router[method.toLowerCase()](path, handlers);
        console.log(`✅ Route added: ${fullPath}`);
      } else {
        console.log(`⚠️ Skipping duplicate: ${fullPath}`);
      }
    };

    if (findAll) addRoute("GET", `${baseRoute}/readAll`, [...(controllerMiddlewares.findAll || []), findAll]);
    if (findOne) addRoute("GET", `${baseRoute}/readOne/:id`, [...(controllerMiddlewares.findOne || []), findOne]);
    if (create) addRoute("POST", `${baseRoute}/create`, [...(controllerMiddlewares.create || []), create]);
    if (update) addRoute("PUT", `${baseRoute}/update/:id`, [...(controllerMiddlewares.update || []), update]);
    if (remove) addRoute("GET", `${baseRoute}/remove/:id`, [...(controllerMiddlewares.remove || []), remove]);
    if (paginate) addRoute("GET", `${baseRoute}/paginate`, [...(controllerMiddlewares.paginate || []), paginate]);
  });
}
