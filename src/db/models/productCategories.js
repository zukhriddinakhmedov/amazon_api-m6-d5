import sequelize from "../index.js"
import s from "sequelize"

const { DataTypes } = s

const ProductCategory = sequelize.define("productCategory", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
})

export default ProductCategory