import { User } from "../model/Auth.js";
import { Catalog } from "../model/Catalog.js";
// import { Item } from "../model/Item.js";

export const getSellers = async (req, res) => {
  let sellers = [];
  try {
    const seller = await User.where('userType').equals('seller').exec()
    seller.map((sel) => {
      const seller = {id:sel._id,sellername:sel.username}
      sellers.push(seller)
    })
    res.status(200).json(sellers)
  } catch (error) {
    res.status(400).json(error)
  }
}
export const createCatalog = async (req, res) => {
  const data = new Catalog(req.body)
  try {
    await data.save();
    res.status(201).json(data)
  } catch (error) {
    res.status(400).json(error)
  }
}


export const getCatalogBySellerId = async (req, res) => {
  const { id } = req.params; 
  try {
    const catalog = await Catalog.findOne(id);
    res.status(200).json(catalog);
  } catch (error) {
    res.status(400).json(error.message);
  }
};