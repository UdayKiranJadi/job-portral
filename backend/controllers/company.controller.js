import { Company } from "../models/company.model.js"
export const registerCompany = async (req, res) => {
    try {
       
        const {companyName} = req.body;
        if (!companyName) {
            return res.status(400).json({
                message: "Please Enter Company Name",
                success: false
            })
        }
        let company = await Company.findOne({ name: companyName });
        if (company) {
            return res.status(400).json({
                message: "You can't register same Company",
                success: false

            })
        };
        company = await Company.create({
            name: companyName,
            userId: req.id


        });
        return res.status(201).json({
            message: "Company Registred Sucesfully",
            company,
            success: true
        })


    } catch (error) {
        console.log(error);
    }
}

export const getCompany = async (req, res) => {
    try {
        const userId = req.id;
        const companies = await Company.find({ userId });
        if (!companies) {
            return res.staus(404).json({
                message: "Companies not found ",
                success: false
            })

        }
        return res.status(200).json({
            companies,
            success:true
        })

    } catch (error) {
        console.log(error);
    }
}

export const getCompanyById = async (req, res) => {
    try {
        const companyId = req.params.id;
        const company = await Company.findById(companyId);
        if (!company) {
            return res.status(404).json({
                message: "Company not found",
                success: false
            })
        }
        return res.status(200).json({
            company,
            success: true
        })
    } catch (error) {
        console.log(error);
    }

}

export const updateCompany = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, website, location } = req.body;
    const file = req.file;

    const updateData = {};

    if (name) updateData.name = name;
    if (description) updateData.description = description;
    if (website) updateData.website = website;
    if (location) updateData.location = location;
    if (file) updateData.logo = file.path; // example field

    console.log("UPDATING COMPANY:", id, updateData);

    const company = await Company.findByIdAndUpdate(
      id,
      { $set: updateData },
      {
        new: true,
        runValidators: true,
      }
    );

    if (!company) {
      return res.status(404).json({ message: "Company not found" });
    }

    return res.status(200).json({
      message: "Company updated successfully",
      company,
    });
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .json({ message: "Something went wrong while updating company" });
  }
};
