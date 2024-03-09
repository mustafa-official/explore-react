// const Todo = ({ no, task }) => {
//   return (
//     <li>
//       {no}: {task}
//     </li>
//   );
// };

//conditional rendering option-1
// const Todo = ({ isDone, task }) => {
//   if (isDone === true) {
//     return <li>Finished: {task}</li>;
//   } else {
//     return <li>Unfinished: {task}</li>;
//   }
// };

//conditional rendering option-2
// const Todo = ({ isDone, task }) => {
//   if (isDone) {
//     return <li>Finished: {task}</li>;
//   }
//   return <li>Unfinished: {task}</li>;
// };

//conditional rendering option-3: ternary operator
// const Todo = ({ isDone, task }) => {
//   return (
//     <li>
//       {isDone ? "Finished" : "Unfinished"}: {task}
//     </li>
//   );
// };

//conditional rendering option-4
// const Todo = ({ isDone, task }) => {
//   return (
//     <li>
//       {isDone && "Sucessfully"} {task}
//     </li>
//   );
// };

//conditional rendering option-5
// const Todo = ({ isDone, task }) => {
//   return (
//     <li>
//       {isDone || "Sucessfully"} {task}
//     </li>
//   );
// };

//conditional rendering option-6
const Todo = ({ isDone, task }) => {
  let listItem;
  if (isDone) {
    return (listItem = <li>Completed: {task}</li>);
  } else {
    return (listItem = <li>Incomplete: {task}</li>);
  }
};

export default Todo;
