import express from 'express';
import { addDoctor, loginAdmin } from '../controllers/adminControl.js';
import upload from '../middlewares/multer.js';
import authAdmin from '../middlewares/authAdmin.js';

const adminArouter = express.Router();

adminArouter.post('/add-doctor', authAdmin, upload.single('image'), addDoctor);
adminArouter.post('/login', loginAdmin);

export default adminArouter;
