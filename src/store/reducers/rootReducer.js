const initState = {
    listUser: [
        { id: 1, name: "Quang Huy" },
        { id: 2, name: "Luan bom" },
        { id: 3, name: "Duan Map" },
        { id: 4, name: "Jenda" },
        { id: 5, name: "Sang Map" },
    ],
};

const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case "DELETE_USER":
            let listUser = state.listUser;
            listUser = listUser.filter((item) => item.id !== action.payload.id);
            return {
                ...state,
                listUser,
            };
        case "ADD_USER":
            let newUser = {
                id: Math.floor(Math.random() * 10000),
                name: "random " + Math.floor(Math.random() * 10000),
            };
            return {
                ...state,
                listUser: [...state.listUser, newUser],
            };
        default:
            return state;
    }
};

export default rootReducer;
