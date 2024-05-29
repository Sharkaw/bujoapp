// import { getSession, getUserData } from "../actions";
import { getSession, createBookshelf } from "@/app/actions";
import ToDoListPage from "./ToDoList";

async function test() {
  // const hasJournals = await userHasJournals(session.user.username);
  // const hasToDoItems = await getToDoListItems(session.user.username);
  const session = await getSession();
  console.log(session.user.id);
  console.log("heip");
  console.log(session.user.journals);
  const userBookshelf = await createBookshelf(session.user.id);
  if (userBookshelf != null) {
    console.log("onnistui");
    console.log(userBookshelf);
  } else {
    console.log("jotain meni pieleen");
  }
}

export default async function ToDoList() {
  // test();
    try {
        const session = await getSession();
        // const user = await getUserData(session.user.id);
        const user = session.user.id;

        return <>{session && <ToDoListPage user={user} />}</>;
    } catch (error) {
        console.error("Could not get ToDoList", error);
    }
}