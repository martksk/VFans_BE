const router = require("express").Router();
const community = require("../models/community");
const Community = require("../models/community");

//creat a community
router.post("/", async (req, res) => {
  const newCommunity = new Community(req.body);
  try {
    const savedCommunity = await newCommunity.save();
    res.status(200).json(savedCommunity);
  } catch (err) {
    res.status(500).json(err);
  }
});

//update a community
router.put("/:id", async (req, res) => {
  try {
    const community = await Community.findById(req.params.id);
    if (community.userId === req.body.userId) {
      await community.updateOne({ $set: req.body });
      res.status(200).json("community desc has been updated");
    } else {
      res.status(403).json("you can update only your community");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//delete a community
router.delete("/:id", async (req, res) => {
  try {
    const community = await Community.findById(req.params.id);
    if (community.userId === req.body.userId) {
      await community.deleteOne();
      res.status(200).json("Community has been deleted");
    } else {
      res.status(403).json("you can delete only your community");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//get a post
router.get("/:id", async (req, res) => {
  try {
    const community = await Community.findById(req.params.id);
    res.status(200).json(community);
  } catch (err) {
    res.status(500).json(err);
  }
});

//get all post
router.get("/", async (req, res) => {
  try {
    const community = await Community.find();
    res.status(200).json(community);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
