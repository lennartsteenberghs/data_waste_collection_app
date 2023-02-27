//import functions from Product model
import { json } from "express";
import {
  insertWaste,
  getMotivationfact
} from "../models/waste_model.js";

//insert waste into database
export const createWaste = (req, res) => {
  const idbin = req.params.idbin;
  const waste = req.body;
  console.log(waste)
  insertWaste(waste, idbin, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
      }
  });
};

//get (random) motivation quote
export const showMotivationfact = (req, res) => {
  getMotivationfact((err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};





//-----------------------------------------------------------------------------------------------------


// //get all products
// export const showProducts = (req, res) => {
//   getProducts((err, results) => {
//     if (err) {
//       res.send(err);
//     } else {
//       res.json(results);
//     }
//   });
// };

// //get single product
// export const showProductById = (req, res) => {
//   getProductById(req.params.id, (err, results) => {
//     if (err) {
//       res.send(err);
//     } else {
//       res.json(results);
//     }
//   });
// };

// //create new product
// export const createProduct = (req, res) => {
//   const data = req.body;
//   insertProduct(data, (err, results) => {
//     if (err) {
//       res.send(err);
//     } else {
//       res.json(results);
//     }
//   });
// };

// // Update Product
// export const updateProduct = (req, res) => {
//   const data = req.body;
//   const id = req.params.id;
//   updateProductById(data, id, (err, results) => {
//     if (err) {
//       res.send(err);
//     } else {
//       res.json(results);
//     }
//   });
// };

// // Delete Product
// export const deleteProduct = (req, res) => {
//   const id = req.params.id;
//   deleteProductById(id, (err, results) => {
//     if (err) {
//       res.send(err);
//     } else {
//       res.json(results);
//     }
//   });
// };
