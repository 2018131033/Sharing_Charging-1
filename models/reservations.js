module.exports = (sequelize, DataTypes) => {
    return sequelize.define('reservations', {
      reservation_key:{
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
      },
      time_0: {
        type: DataTypes.INTEGER,
        allowNull: true,
        unique: false,
      },
      time_1: {
        type: DataTypes.INTEGER,
        allowNull: true,
        unique: false,
      },
      time_2: {
        type: DataTypes.INTEGER,
        allowNull: true,
        unique: false,
      },
      time_3: {
        type: DataTypes.INTEGER,
        allowNull: true,
        unique: false,
      },
      time_4: {
        type: DataTypes.INTEGER,
        allowNull: true,
        unique: false,
      },
      time_5: {
        type: DataTypes.INTEGER,
        allowNull: true,
        unique: false,
      },
      time_6: {
        type: DataTypes.INTEGER,
        allowNull: true,
        unique: false,
      },
      time_7: {
        type: DataTypes.INTEGER,
        allowNull: true,
        unique: false,
      },
      time_8: {
        type: DataTypes.INTEGER,
        allowNull: true,
        unique: false,
      },
      time_9: {
        type: DataTypes.INTEGER,
        allowNull: true,
        unique: false,
      },
      time_10: {
        type: DataTypes.INTEGER,
        allowNull: true,
        unique: false,
      },
      time_11: {
        type: DataTypes.INTEGER,
        allowNull: true,
        unique: false,
      },
      time_12: {
        type: DataTypes.INTEGER,
        allowNull: true,
        unique: false,
      },
      time_13: {
        type: DataTypes.INTEGER,
        allowNull: true,
        unique: false,
      },
      time_14: {
        type: DataTypes.INTEGER,
        allowNull: true,
        unique: false,
      },
      time_15: {
        type: DataTypes.INTEGER,
        allowNull: true,
        unique: false,
      },
      time_16: {
        type: DataTypes.INTEGER,
        allowNull: true,
        unique: false,
      },
      time_17: {
        type: DataTypes.INTEGER,
        allowNull: true,
        unique: false,
      },
      time_18: {
        type: DataTypes.INTEGER,
        allowNull: true,
        unique: false,
      },
      time_19: {
        type: DataTypes.INTEGER,
        allowNull: true,
        unique: false,
      },
      time_20: {
        type: DataTypes.INTEGER,
        allowNull: true,
        unique: false,
      },
      time_21: {
        type: DataTypes.INTEGER,
        allowNull: true,
        unique: false,
      },
      time_22: {
        type: DataTypes.INTEGER,
        allowNull: true,
        unique: false,
      },
      time_23: {
        type: DataTypes.INTEGER,
        allowNull: true,
        unique: false,
      },
    }, {
      timestamps: false,
    });
  };