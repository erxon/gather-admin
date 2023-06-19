import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
    username: String,
    salt: String,
    hash: String,
    createdAt: Date,
    updatedAt: Date
})

const Admin = mongoose.models.Admin || mongoose.model('Admin', adminSchema);

export default Admin;

