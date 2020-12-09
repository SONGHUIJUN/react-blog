import React from "react";

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      age: "25"
    }
    this.fileInput = React.createRef();
  }

  updateReason = (event) => {
    console.log(this.fileInput.current.files);
    event.preventDefault();
  }

  setFormValue = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    })
  }

  render() {
    return (
      <form onSubmit={this.updateReason}>
        <div>
          <label>姓名：</label>
          <input value={this.state.username} name="username" onChange={this.setFormValue}/>
        </div>
        <div>
          <label>年龄：</label>
          <select value={this.state.age} name="age" onChange={this.setFormValue}>
            <option value="20">20</option>
            <option value="25">25</option>
            <option value="30">30</option>
            <option value="35">35</option>
            <option value="40">40</option>
            <option value="45">45</option>
          </select>
        </div>
        <div>
          <label>学历：</label>
          <input type="file" ref={this.fileInput}/>
        </div>
        <input type="submit" value="提交"/>
      </form>
    )
  }
}