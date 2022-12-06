import express from "express";
import pool from "../db/pg.js";
const router = express.Router();

router.get("/links", async (req, res) => {
  try {
    const { rows } = await pool.query("SELECT * FROM resource_data");
    console.log(rows);
    res.json(rows);
  } catch (err) {
    errorhandler(err, res);
  }
});

// router.delete("/resources/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     await pool.query(`DELETE FROM resource WHERE id = $1`, [id]);
//     res.json({ message: `resource at id ${id} was deleted` });
//   } catch (err) {
//     errorhandler(err, res);
//   }
// });

// router.post("/resources", async (req, res) => {
//   try {
//     const { name, link, likes, dislikes } = req.body;
//     console.log(req.body);
//     const obj = {
//       text: "INSERT INTO resources (name, link, likes, dislikes) VALUES ($1, $2, $3, $4)",
//       values: [name, link, likes, dislikes],
//     };
//     await pool.query(obj);
//     res.send({ message: "added a resource" });
//   } catch (err) {
//     console.log(err);
//     errorhandler(err, res);
//   }
// });

// router.put("/resources/:id", async (req, res) => {
//   try {
//     const id = req.params.id;

//     const { rows } = await pool.query("SELECT * from resources WHERE id=$1", [
//       id,
//     ]);

//     const resource = rows[0];

//     const obj = {
//       name: req.body.name || resource.name,
//       link: req.body.link || resource.link,
//       docs: req.body.docs || resource.docs,
//       likes: req.body.likes || resource.likes,
//       dislikes: req.body.dislikes || resource.dislikes,
//     };
//     //console.log(obj);
//     await pool.query(
//       "UPDATE resource_data SET name=$1, link=$2, docs=$3, likes=$4, dislikes=$5 WHERE id=$6",
//       [obj.name, obj.link, obj.docs, obj.likes, obj.dislikes, id]
//     );
//     res.json({ message: `resource number ${id} has been updated` });
//   } catch (err) {
//     errorhandler(err, res);
//   }
// });

function errorhandler(err, res) {
  res.status(500).send(err);
}

export default router;
