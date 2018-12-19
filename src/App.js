import React from "react";
import { connect } from 'react-redux';
import TodosList from "./todos-list"
import CreateTodo from "./create-todo";
import "./style.css";
import UserTable from './user-table';
import {fetchUser} from './actions/userActions';
import store from './store';
import UserGrid from './user-grid';
 
const override = {
    display: 'block',
    margin: '0 auto',
    'border-color': 'red'
}
const todos = {
    items: [],
    lsKey: "todos",
    populate () {
        this.items = this.get();
    },
    get () {
        try {
            return JSON.parse(localStorage.getItem(this.lsKey)) || []
        } catch (e) {}
        return [];
    },
    save () {
        localStorage.setItem(this.lsKey, JSON.stringify(this.items));
    },
    
    toggle (id) {
        let todoItem = this.items[id];
        todoItem.isCompleted = !todoItem.isCompleted;
        this.save();
    },
    add (obj) {
        this.items.push(obj);
        this.save();
    },
    remove (id) {
        this.items.splice(id, 1);
        this.save();
    },
    update (id, task) {
        let todoItem = this.items[id];
        todoItem.task = task;
        this.save();
    }
};

todos.populate();


class App extends React.Component {
    constructor (props) {
        super(props);
        //setInterval(() => {
        //    todos.push({
        //        task: "Make tea: " + Math.random(),
        //        isCompleted: true
        //    });
        //    this.setState({ todos });
        //}, 1000);


        this.state = {
            todos: todos.items,
            data:[]
        };
    }

    componentDidMount(){

    }
    componentWillMount(){
        // fetch('https://api.github.com/users?since=2017')
        // .then(response => response.json())
        // .then(data => console.log(data));


        

        // fetch('https://reqres.in/api/users/2',{
        //     method:'PUT',
        //     body:{
        //         name:'goutham',
        //         job:'ui'
        //     }
        // })
        // .then(response => response.json())
        // .then(data => console.log(data));

        // fetch('https://reqres.in/api/users',
        //     {
        //         method:'POST',
        //         body:{
        //             name:'goutham',
        //             job:'ui'
        //         }
        //     }
        // )
        // .then(response => response.json())
        // .then(data => console.log(data));

        // fetch('https://reqres.in/api/users/2',{
        //     method:'DELETE'
        // })
        // .then(response => response.json())
        // .then(data => console.log(data));
    }
    componentDidCatch(){

    }
    componentDidUpdate(){

    }
    componentWillReceiveProps(){

    }
    componentWillUnmount(){

    }
    componentWillUpdate(){

    }
    // shouldComponentUpdate(){

    // }
    render () {
        console.log(store.getState());

        return (
                <div>
                    {this.props.isloading &&
                        <div>
                            <h1>TODOs</h1>
                            
                        </div>
                    }
                    {this.props.isFalse &&
                        <h1>Add things</h1>
                    }
                    <CreateTodo
                        createTask={this.createTask.bind(this)}
                    />
                    <TodosList
                        todos={this.state.todos}
                        toggleTask={this.toggleTask.bind(this)}
                        editTask={this.editTask.bind(this)}
                        deleteTask={this.deleteTask.bind(this)}
                        data={this.state.data}
                    />
                    <UserTable/>
                    <UserGrid/>
                </div>
        );
    }

    createTask (task) {
        task = task.trim();
        if (!task) { return; }
        todos.add({
            task,
            isCompleted: false
        });
        this.setState({ todos: this.state.todos });
        this.props.fetchUser(task);
    }

    toggleTask (taskId) {
        todos.toggle(taskId);
        this.setState({ todos: this.state.todos });
    }
    editTask (taskId, task) {
        todos.update(taskId, task);
        this.setState({ todos: this.state.todos });
    }
    deleteTask (taskId) {
        todos.remove(taskId);
        this.setState({ todos: this.state.todos });
    }
}

const mapStateToProps = state => ({
    userList: state.userReducer.userList,
    isloading:state.userReducer.isLoading,
    isFalse: state.userReducer.isFalse
})

export default connect(mapStateToProps, {
    fetchUser
})(App);