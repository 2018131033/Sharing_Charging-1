module.exports = (sequelize, DataTypes) => {
    return sequelize.define('chargers', {
      charger_key:{
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
      },
      price_per_hour:{
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: false,
      },
      charger_key:{
        type: DataTypes.BOOLEAN,
        allowNull: false,
        unique: false,
      },
      x: {
        type: DataTypes.STRING(45),
        allowNull: true,
        unique: false,
      },
      y: {
        type: DataTypes.STRING(45),
        allowNull: true,
        unique: false,
      },
      address_name: {
        type: DataTypes.STRING(45),
        allowNull: true,
        unique: false,
      },
      region_1depth_name: {
        type: DataTypes.STRING(45),
        allowNull: true,
        unique: false,
      },
      region_2depth_name: {
        type: DataTypes.STRING(45),
        allowNull: true,
        unique: false,
      },
      region_3depth_name: {
        type: DataTypes.STRING(45),
        allowNull: true,
        unique: false,
      },
      image_src: {
        type: DataTypes.STRING(45),
        allowNull: true,
        unique: false,
      },
      owner_user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: false,
      },
      reservation_key: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
      },
    }, {
      timestamps: false,
    });
  };