const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');

/**
 * @swagger
 * components:
 *   schemas:
 *     Comment:
 *       type: object
 *       required:
 *         - comment
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the comment
 *         comment:
 *           type: string
 *           description: The comment written by the user
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: The date and time when the comment was created
 *       example:
 *         id: 60c72b2f5f1b2c0015a6d28c
 *         comment: "Great website!"
 *         createdAt: "2023-07-11T10:20:30Z"
 */

/**
 * @swagger
 * tags:
 *   name: Comments
 *   description: API to manage general comments
 */

/**
 * @swagger
 * /comments:
 *   post:
 *     summary: Create a new comment
 *     tags: [Comments]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Comment'
 *     responses:
 *       201:
 *         description: The comment was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Comment'
 *       400:
 *         description: Missing required fields
 *       500:
 *         description: Some server error
 */
router.post('/comments', commentController.createComment);

/**
 * @swagger
 * /comments:
 *   get:
 *     summary: Get all comments
 *     tags: [Comments]
 *     responses:
 *       200:
 *         description: A list of comments
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Comment'
 *       500:
 *         description: Some server error
 */
router.get('/comments', commentController.getComments);

module.exports = router;
