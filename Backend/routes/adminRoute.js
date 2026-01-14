import express from 'express';
import { addDoctor } from '../controllers/adminControl.js';
import upload from '../middlewares/multer.js';

const adminArouter = express.Router();

adminArouter.post('/add-doctor', upload.single('image'), addDoctor);

export default adminArouter;
