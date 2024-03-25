const { Products } = require("../Database/productData");
const Product = require("../Models/Product");
const Products2 = require("../Models/Product");

exports.read = async (req, res) => {
  try {
    // code
    const id = req.params.id;
    const producted = await Product.findOne();

    res.send(producted);
  } catch (error) {
    // error
    console.log(error);
    res.status(500).send("Server error: " + error);
  }
};

exports.list = async (req, res) => {
  try {
    // code
    const producted = await Products2.find({}).exec();

    res.send(producted);
  } catch (error) {
    // error
    console.log(error);
    res.status(500).send("Server error: " + error);
  }
};

exports.create = async (req, res) => {
  try {
    // code

    console.log(req.body);
    const ProductGet = await Products2(req.body).save();
    res.send(ProductGet);
  } catch (error) {
    console.log(error);
    res.status(500).send("Server error: " + error);
  }
};

exports.update = async (req, res) => {
  try {
    const id = req.params.id;

    const ProductUpdate = await Products2.findOneAndUpdate(
      { _id: id },
      req.body,
      { new: true }
    ).exec();
    res.send(ProductUpdate);
  } catch (error) {
    console.log(error);
    res.status(500).send("Server error: " + error);
  }
};

exports.create1 = async (req, res) => {
  try {
    // ดึง ID สินค้นพร้อมแปลงเป็น int
    const id = parseInt(req.params.id);

    // ตรวจสอบว่า ID เป็นตัวเลขหรือไม่
    if (isNaN(id)) {
      res.status(404).send(`Invalid product ID: must be a number`);
    }

    // สร้างสินค้าใหม่
    const newProduct = {
      id: id,
    };

    // เพิ่มสินค้าใหม่ลงใน array Products
    Products.push(newProduct);

    // ส่งข้อความตอบกลับว่าสร้างสินค้าสำเร็จ
    res.send(`Product with ID ${id} created successfully`);
  } catch (error) {
    console.log(error);
    res.status(500).send("Server error: " + error);
  }
};

// exports.delete1 = async (req, res) => {
//   try {
//     // ดึง ID สินค้าจากพารามิเตอร์การร้องขอ
//     const id = req.params.id;

//     // ค้นหาสินค้าที่จะลบภายในอาร์เรย์ Products
//     const ProductDelete = await Products.find(
//       (Product) => Product.id === parseInt(id)
//     );

//     // ถ้าไม่พบสินค้า ให้ส่งการตอบสนอง 404 ไม่พบ
//     if (!ProductDelete) {
//       return res.status(404).send(`Product not found with id: ${id}`);
//     }

//     // ลบสินค้าออกจากอาร์เรย์
//     if (ProductDelete) {
//       const ProductIndex = await Products.findIndex(
//         (Product) => Product === ProductDelete
//       );
//       await Products.splice(ProductIndex, 1);

//       // แสดงว่าลบสินค้าแล้ว
//       res.send(`Product with ID ${id} deleted successfully`);
//     }
//   } catch (error) {
//     res.status(500).send("Server error: " + error);
//   }
// };

exports.delete1 = async (req, res) => {
  try {
    const id = req.params.id;
    const removed = await Products2.findOneAndDelete({ _id: id }).exec();
    res.send(removed);
  } catch (error) {
    console.log(error);
    res.status(500).send("Server error: " + error);
  }
};
