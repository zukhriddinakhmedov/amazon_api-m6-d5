import Product from "./products.js"
import Review from "./reviews.js"
import ProductCategory from "./productCategories.js"
import ShoppingCart from "./cart.js"
import User from "./users.js"
import Category from "./categories.js"

Product.hasMany(Review)
Review.belongsTo(Product)

User.hasMany(Product, { foreignKey: "userId" })
Product.belongsTo(User, { foreingKey: "userId" })

User.hasMany(Review, { foreignKey: "user_id" })
Review.belongsTo(User, { foreignKey: "userId" })

User.hasMany(ShoppingCart)
ShoppingCart.belongsTo(User)
Product.hasMany(ShoppingCart)
ShoppingCart.belongsTo(Product)

User.belongsToMany(Product, { through: { model: ShoppingCart, unique: false } })
Product.belongsToMany(User, { through: { model: ShoppingCart, unique: false } })

Product.belongsToMany(Category, {
    through: { model: ProductCategory, unique: false },
})
Category.belongsToMany(Product, { through: { model: ProductCategory, unique: false } })

export default { Product, Review, User, ShoppingCart, Category, ProductCategory }


