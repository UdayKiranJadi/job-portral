import { Company } from "../models/company.model.js";
import getDataUri from "../utils/datauri.js";
import cloudinary from "../utils/cloudinary.js";

export const registerCompany = async (req, res) => {
  try {
    console.log("REGISTER req.id:", req.id);

    const { companyName } = req.body;
    if (!companyName) {
      return res.status(400).json({
        message: "Please Enter Company Name",
        success: false,
      });
    }

    let company = await Company.findOne({ name: companyName });
    if (company) {
      return res.status(400).json({
        message: "You can't register same Company",
        success: false,
      });
    }

    company = await Company.create({
      name: companyName,
      userId: req.id,
    });

    console.log("CREATED company.userId:", company.userId?.toString());

    return res.status(201).json({
      message: "Company Registered Successfully",
      company,
      success: true,
    });
  } catch (error) {
    console.log("REGISTER COMPANY ERROR:", error);
    return res.status(500).json({
      message: "Failed to register company",
      success: false,
    });
  }
};

export const getCompany = async (req, res) => {
  try {
    const companies = await Company.find({ userId: req.id });

    return res.status(200).json({
      companies,
      success: true,
    });
  } catch (error) {
    console.log("GET COMPANY ERROR:", error);
    return res.status(500).json({
      message: "Failed to fetch companies",
      error: error.message,
      success: false,
    });
  }
};