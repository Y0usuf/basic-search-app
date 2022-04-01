import React, { Component } from "react";

class Human extends Component {
  state = {
    fakeApi: [],
    loading: true,
    searchQuery: "",
  };

  componentDidMount() {
    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/todos")
        .then((response) => response.json())
        .then((json) => this.setState({ fakeApi: json, loading: false }));
    }, 2000);
  }

  render() {
    let { loading, fakeApi, searchQuery } = this.state;

    let newFakeApi = fakeApi.filter(
      (el) => el.title.indexOf(searchQuery) !== -1
    );

    return (
      <>
        <input
          type="text"
          className="form-control text-center mb-5"
          placeholder="search"
          onChange={(event) => {
            this.setState({
              searchQuery: event.target.value,
            });
          }}
        ></input>
        Aktifleri goster
        <input type={"checkbox"} />
        <br />
        <select>
          <option>10</option>
          <option>20</option>
          <option>30</option>
        </select>
        {loading && <div className="text-center">Yukleniyo...</div>}
        {!loading && (
          <div className="d-flex justify-content-center">
            <table className="table table-bordered table-striped w-75">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Title</th>
                  <th>active</th>
                </tr>
              </thead>
              <tbody>
                {newFakeApi.map((element) => (
                  <tr key={element.id}>
                    <td>{element.id}</td>
                    <td>{element.title}</td>
                    <td>{element.completed ? "yes" : "no"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        {newFakeApi.length === 0 && loading === false && (
          <div className="alert alert-primary text-center" role="alert">
            veri yok
          </div>
        )}
      </>
    );
  }
}

export default Human;
