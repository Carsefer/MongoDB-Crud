import Task from "../models/Task";

export const renderTask = async (req, res) => {
  const tasks = await Task.find().lean();
  console.log(tasks);

  res.render("index", {
    tasks: tasks,
  });
};

export const createTask = async (req, res) => {
  try {
    const { title, description } = req.body;
    const task = Task({
      title,
      description,
    });
    const taskSaved = await task.save();
    console.log(taskSaved);
    res.redirect("/");
  } catch (error) {
    console.error(error);
  }
};
export const renderTaskEdit = async (req, res) => {
  const tasks = await Task.findById(req.params.id).lean();
  res.render("edits", {
    tasks: tasks,
  });
};
export const deleteTask = async (req, res) => {
  const { id } = req.params;
  await Task.findByIdAndDelete(id);
  res.redirect("/");
};
export const updateTaskEdit = async (req, res) => {
  const { id } = req.params;
  await Task.findByIdAndUpdate(id, req.body);

  res.redirect("/");
};
export const toggleTask = async (req, res) => {
  const { id } = req.params;

  const task = await Task.findById(id);
  task.done = !task.done;
  await task.save();
  res.redirect("/");
};
