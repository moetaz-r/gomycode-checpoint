import {
  ADDNEWTASK,
  DELETETASK,
  FILTREDTASK,
  HIDEMODAL,
  SHOWMODAL,
  UPDATETASK,
} from "../actions/actionsType";

const initialState = {
  tasks: [
    {
      id: 1,
      ID: "Work Out",
      image:
        "https://www.shape.com/thmb/6ryFn_2RoTPc3iuAKWEuZQr9JUc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1095030338-2000-9333c778b7b34ca3877c83a343ba96fb.jpg",
      description:
        "from 9 AM to 11 AM , 30 minutes march in palce , 20 minutes forward lunges ,20 minutes air punches , eating lunch and fresh fruits",
      isDone: false,
    },
    {
      id: 2,
      image:
        "https://www.thespruce.com/thmb/Lky5tWtuyPjjtDWx6x0myCFJa8c=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/bedroom-organization-tips-2647884-hero-cdb1f3ec89f44417979e6be4acbbde89.jpg",
      ID: "Organizing My Room",
      description:
        "wash pillows and courtains , organize dressers and desks , clean light fixtures",
      isDone: true,
    },
    {
      id: 3,
      image:
        "https://gradepowerlearning.com/wp-content/uploads/2017/09/student-taking-notes.jpeg",
      ID: "Doing Homework",
      description:
        "start with mathametics and science , then doing some exercices  ",
      isDone: false,
    },
    {
      id: 4,
      image:
        "https://amshq.org/wp-content/uploads/2024/12/7-types-of-rest_500x333.jpeg",
      ID: "REST",
      description: "listening to music ",
      isDone: true,
    },
  ],
  show: false,
  Editid: "",
  select: "All",
};

const taskReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADDNEWTASK:
      return {
        ...state,
        tasks: [...state.tasks, { ...payload, id: state.tasks.length + 1 }],
      };
    case FILTREDTASK:
      return {
        ...state,
        select: payload,
      };
    case SHOWMODAL:
      return {
        ...state,
        show: true,
        Editid: payload,
      };
    case HIDEMODAL:
      return {
        ...state,
        show: false,
      };
    case UPDATETASK:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id == state.Editid
            ? {
                ...task,
                ...payload,
              }
            : task
        ),
      };

    case DELETETASK:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== payload),
      };
    default:
      return state;
  }
};
export default taskReducer;
