const express = require("express");
const router = express.Router();
const {
  read,
  list,
  update,
  delete1,
  create1,
  create,
} = require("../Controllers/product");

// const Products = [
//   {
//     id: 1,
//   },
//   {
//     id: 2,
//   },
// ];

router.get("/product", list);

router.get("/product/:id", read);

router.post("/product/:id", create1);

router.post("/product/", create);

router.put("/product/:id", update);

router.delete("/product/:id", delete1);

// router.delete("/product/:id", async (req, res) => {
//   // ดึง ID สินค้าจากพารามิเตอร์การร้องขอ
//   const id = req.params.id;

//   // ค้นหาสินค้าที่จะลบภายในอาร์เรย์ Products
//   const ProductDelete = Products.find((Product) => Product.id === parseInt(id));

//   // ถ้าไม่พบสินค้า ให้ส่งการตอบสนอง 404 ไม่พบ
//   if (!ProductDelete) {
//     return res.status(404).send(`Product not found with ID ${id}`);
//   }

//   // ลบสินค้าออกจากอาร์เรย์
//   //   const productIndex = Products.indexOf(ProductDelete);
//   //   if (productIndex !== -1) {
//   //     Products.splice(productIndex, 1);
//   //   }

//   // ลบสินค้าออกจากอาร์เรย์
//   if (ProductDelete) {
//     const productIndex = Products.findIndex(
//       (Product) => Product === ProductDelete
//     );
//     Products.splice(productIndex, 1);
//   }

//   // แสดงว่าลบสินค้าแล้ว
//   res.send(`Product with ID ${id} deleted successfully`);
// });

module.exports = router;
