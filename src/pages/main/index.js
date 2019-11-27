import React, { Component } from "react";
import { Button, Modal } from "antd";
import { Link } from "react-router-dom";

import "./styles.scss";

const users = {
  users: [
    {
      id: 1,
      name: "Pouca Tripa",
      birth_date: "1976-09-22T00:00:00",
      state: "São Paulo",
      city: "São Paulo",
      status: "Ativo",
      addresses: {
        name: "Casa",
        state: "São Paulo",
        country: "BR",
        neighborhood: "CENTRO",
        city: "São Paulo",
        street_number: 24,
        complement: "apartamento",
        postal_code: "01300-000",
        street_name: "Avenida Paulista"
      },
      documents: [
        {
          expires_at: "2010-11-23T00:00:00+00:00",
          country: "BR",
          number: "700441702",
          doc_type: "CNH",
          category: "AB"
        },
        {
          country: "BR",
          number: "32132132188",
          doc_type: "CPF"
        }
      ]
    },
    {
      id: 2,
      name: "Quase nada",
      birth_date: "1986-09-22T00:00:00",
      state: "Rio de Janeiro",
      city: "Niterói",
      status: "Inativo",
      addresses: {
        name: "",
        state: "",
        country: "",
        neighborhood: "",
        city: "",
        street_number: "",
        complement: "",
        postal_code: "",
        street_name: ""
      },
      documents: [
        {
          country: "BR",
          number: "12312312377",
          doc_type: "CPF"
        }
      ]
    }
  ]
};

export default class Main extends Component {
  state = {
    truckers: users,
    visible: false,
    name: "",
    birth_date: "",
    stat: "",
    city: "",
    neighborhood: "",
    country: "",
    id: ""
  };

  showModal = () => {
    this.setState({ visible: true });
  };

  handleOk = e => {
    this.setState({
      visible: false
    });
  };

  handleCancel = e => {
    this.setState({
      visible: false
    });
  };

  render() {
    return (
      <div className="pageContent">
        <div className="container">
          <div className="actions">
            <h2>Lista de motoristas</h2>
            <Button type="primary" onClick={this.showModal}>
              Cadastrar
            </Button>
          </div>

          <Modal
            title="Cadstro de motorista"
            visible={this.state.visible}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
            cancelText="Cancelar"
            width="500px"
          >
            <form id="register" onSubmit={this.onSubmit}>
              <label htmlFor="name">Nome</label>
              <input id="name" type="text" />

              <label htmlFor="birth_date">Data de nascimento</label>
              <input id="birth_date" type="date" placeholder="" />

              <label htmlFor="state">Estado</label>
              <input id="state" type="text" placeholder="" />

              <label htmlFor="city">Cidade</label>
              <input id="city" type="text" placeholder="" />

              <label htmlFor="neighborhood">Bairro</label>
              <input id="neighborhood" type="text" placeholder="" />

              <label htmlFor="country">País</label>
              <input id="country" type="text" placeholder="" />

              <button type="submit">Enviar</button>
            </form>
          </Modal>

          {this.state.truckers.users.map(trucker => (
            <div key={trucker.id} className="truckerInfo">
              <div className="truckerNumber">
                <span>Motorista #{trucker.id}</span>
              </div>

              <div className="truckerName">
                <span>Nome</span>
                <p>{trucker.name}</p>
              </div>

              <div className="truckerStatus">
                <span>Status</span>
                <p>{trucker.status}</p>
              </div>

              <div className="truckerOptions">
                <Link to={`/ver/${trucker.id}`}>Ver mais</Link>
                <span>|</span>
                <Link to="">Editar</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
