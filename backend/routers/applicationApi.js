const express = require("express");
const router = express.Router();
const entityControllers = require("@/controllers/entityControllers");

function createRoutes(controllerBox, prefix) {
  for (const controller in controllerBox) {
    controllerBox[controller].read &&
      router.get(
        `/${prefix}/${controller.split("C")[0]}/read-data`,
        controllerBox[controller].read,
      );
    controllerBox[controller].create &&
      router.post(
        `/${prefix}/${controller.split("C")[0]}/create-data`,
        controllerBox[controller].create,
      );
    controllerBox[controller].update &&
      router.get(
        `/${prefix}/${controller.split("C")[0]}/update-data`,
        controllerBox[controller].update,
      );
    controllerBox[controller].remove &&
      router.get(
        `/${prefix}/${controller.split("C")[0]}/remove-data`,
        controllerBox[controller].remove,
      );
    controllerBox[controller].paginate &&
      router.get(
        `/${prefix}/${controller.split("C")[0]}/paginate-data`,
        controllerBox[controller].paginate,
      );
  }
}

createRoutes(entityControllers, "entity");

module.exports = router;
