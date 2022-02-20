const db = require("../models");
const Guest = db.guest;
const Op = db.Sequelize.Op;
// Create and Salve a new Guest
exports.create = (req, res) => {
  // Validate request
  if (!req.body.title) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }
  // Create a Guest
  const guest = {
    guestCodeID: req.body.guestCodeID,
    roomNumber: req.body.roomNumber,
  };
  // Save Guest in the database
  Guest.create(guest)
    .then(data => {
      res.send(data);
      console.log(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Guest."
      });
    });
};
// Retrieve all Guests from the database.
exports.findAll = (req, res) => {
    const guestCodeID = req.query.guestCodeID;
    var condition = guestCodeID ? { guestCodeID: { [Op.like]: `%${guestCodeID}%` } } : null;
    console.log(guestCodeID)
    Guest.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Guests."
        });
      });
};
//Find a single Guest with an id
exports.findOne = (req, res) => {
    const id = req.params.id;
    Guest.findByPk(id)
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find Guest with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Guest with id=" + id
        });
      });
};
// Update a Guest by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;
    Guest.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Guest was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Guest with id=${id}. Maybe Guest was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Guest with id=" + id
        });
      });
};
// Delete a Guest with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;
    Guest.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Guest was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Guest with id=${id}. Maybe Guest was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Guest with id=" + id
        });
      });
};
// Delete all Guests from the database.
exports.deleteAll = (req, res) => {
    Guest.destroy({
        where: {},
        truncate: false
      })
        .then(nums => {
          res.send({ message: `${nums} Guests were deleted successfully!` });
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all Guests."
          });
        });
};
// Find all published Guests
exports.findAllPublished = (req, res) => {
    Guest.findAll({ where: { published: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Guests."
      });
    });

 };