import React from "react";

// function TaskList() {
//   return (
//     <div>
//       <h1>Task name</h1>
//       <div>
//         <button>Edit</button>
//         <button>Delete</button>
//       </div>
//       <p>Task Description</p>
//     </div>
//   );
// }

const Task = () => {
  return (
    <div className="taskBox">
      <div className="taskID">
        <p>Task name</p>
        <div>
          <button className="editBTN">Edit</button>
          <button className="delBTN">Delete</button>
        </div>
      </div>
      <p className="taskInfo">
        Task Description
      </p>
    </div>
  );
};

export default Task;
