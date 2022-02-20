module.exports = app => {
    const guest = require("../controllers/guest.controller.js");
    var router = require("express").Router();
    // Create a new Tutorial
    router.post("/", guest.create);
    // Retrieve all guests
    router.get("/", guest.findAll);
    // Retrieve all published guests
    router.get("/published", guest.findAllPublished);
    // Retrieve a single guest with id
    router.get("/:id", guest.findOne);
    // Update a guest with id
    router.put("/:id", guest.update);
    // Delete a guest with id
    router.delete("/:id", guest.delete);
    // Delete all guests
    router.delete("/", guest.deleteAll);
    app.use('/api/guest', router);
  };