export const getTasks = async () => {
  return await fetch("http://localhost:3001/tasks").then((res) => res.json());
};

export const putTask = async (id, taskToPut) => {
  await fetch(`http://localhost:3001/tasks/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: taskToPut,
  });
};

export const postTask = async (taskToPost) => {
  return await fetch("http://localhost:3001/tasks", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: taskToPost,
  }).then((res) => res.json());
};

export const deleteTask = async (id) => {
  return await fetch(`http://localhost:3001/tasks/${id}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
    },
  }).then(res => res.json());
}