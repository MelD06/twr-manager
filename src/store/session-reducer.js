const initialState = {
    session: '',
    uId: '',
    mail:'',
    name:'',
    status:''
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case 'NEW_SESSION':
        return {
            session: action.session,
            uId: action.uId,
            mail: action.mail,
            name: action.name,
            status: action.status
        }
        default:
        return state;
    }

}


export default reducer; 