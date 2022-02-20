module.exports = (sequelize, Sequelize) => {
    const Guest = sequelize.define("guest", {
      guestCodeID: {
        type: Sequelize.INTEGER
      },
      roomNumber: {
        type: Sequelize.INTEGER
      }
    });
    
    return Guest;
  };