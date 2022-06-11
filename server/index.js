import express from "express";
import mongoose from "mongoose";
import cors from "cors";
const todoSchema = new mongoose.Schema({
    content: String,
    state: Boolean,
    author: String,
});

const Todo = mongoose.model("Todo", todoSchema);

mongoose.connect("mongodb://localhost:27017/todo", { useNewUrlParser: true });

const port = 4000;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const router = express.Router();
router.get("/", async (req, res) => {
    const todos = await Todo.find();
    res.status(200).json(todos);
});

router.get("/:id", async (req, res) => {
    const todo = await Todo.findById(req.params.id);
    res.status(200).json(todo);
});

router.post("/", async (req, res) => {
    const todo = new Todo(req.body);

    await todo.save();
    res.status(200).json(todo);
});

router.put("/:id", async (req, res) => {
    let todo = await Todo.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    });
    await todo.save();
    res.status(200).json(todo);
});

router.delete("/:id", async (req, res) => {
    const todo = await Todo.findByIdAndDelete(req.params.id);
    res.status(200).json(todo);
});

app.use("/api/v1/todos", router);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
