//Get All Contacts
//
//GET
const getContact = (req,res) => {
    res.status(200).json({message: "Get All Contacts"});
}

//CREATE
const createContact = (req,res) => {
    console.log("The request body is:", req.body);
    const {name, email , phone} = req.body;
    if(!name || !email ||phone){
        res.status(400);
        throw new Error("All fields are mandatory");
    }
    res.status(200).json({message: "Create Contacts"});
}

//
const updateContact = (req,res) => {
    res.status(200).json({message: `Update contact ${req.params.id}`});
}

//GET
const deleteContact = (req,res) => {
    res.status(200).json({message:  `Delete contact ${req.params.id}`});
}

module.exports = {getContact, createContact, updateContact, deleteContact};