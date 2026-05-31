import express from "express";
import supabase from "../config/supabase.js";

const router = express.Router();

router.get("/teste", async (req, res) => {

  const { data, error } = await supabase
    .from("usuarios")
    .select("*");

  if (error) {
    return res.status(500).json(error);
  }

  return res.json(data);

});

export default router;