import React, { Component } from "react";
import logo from "../../assets/logo.png";
import { Container, Form } from "./styles";
import CompareList from "../../components/CompareList/index.js";
import api from "../../services/api";

export default class Main extends Component {
  state = {
    repositoryInput: "",
    repositories: []
  };

  handleAddRepository = async e => {
    console.log('entrei aqui')

    e.preventDefault();
    try {
      const response = await api.get(`repos/${this.state.repositoryInput}`);
      console.log(response)
      this.setState({
        repositoryInput: "",
        repositories: [...this.state.repositories, response.data]
      });
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    return (
      <Container>
        <img src={logo} alt="Github Compare" />

        <Form onSubmit={this.handleAddRepository}>
          <input
            type="text"
            placeholder="usuário/repositório"
            value={this.state.repositoryInput}
            onChange={e => this.setState({ repositoryInput: e.target.value })}
          />
          <button type="submit">OK</button>
        </Form>
        <CompareList repositories={this.state.repositories} />
      </Container>
    );
  }
}
