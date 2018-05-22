import React, { Component } from 'react';

class AddResource extends Component {
  constructor() {
    super();
    this.state = { }
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit = () => {

  }

  render() {
    return (
      <form>
        <label>Select a category:</label>
        <select name="category">
          <option value="Front-End"></option>
          <option value="Back-End"></option>
          <option value="Servers"></option>
          <option value="Libraries"></option>
        </select>

        <label>Add a resource:</label>
        <input type="text" name="" />
      </form>
    );
  }
}

export default AddResource;
