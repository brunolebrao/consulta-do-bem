import React, { Component } from 'react'
import { Redirect } from 'react-router'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {PropTypes} from 'prop-types'
import md5 from 'md5'
import * as loginAction from '../Login/loginAction'; 



class Login extends Component {

  handleLoginKey = (event) => {
    switch(event.target.name){
      case 'privateKey':
      this.props.actions.setPrivateKey(event.target.value)
      break;
      case 'publicKey':
      this.props.actions.setPublicKey(event.target.value)
      break;
      default:
    }
  }

  handleLoginPublicKey = (event) => {
    let login = {publicKey: undefined}
    login[event.target.name] = event.target.value
    this.setState({...this.state.login, login})
  }

  handleLogin = (event) => {
    const {login} = this.props
    const ts = new Date().getTime();
    let hash = md5(ts + login.privateKey + login.publicKey)
    this.props.actions.loadData(ts, login.publicKey, hash)
    this.props.actions.setTs(ts)
    event.preventDefault()
  }

  render() {
    const {login} = this.props

    return (
      <div className="container">
      
        <form className="form-signin">
          {login.isFetching ? <h2 className="form-signin-heading">...Validando</h2> : <h2 className="form-signin-heading">Dados de acesso</h2>}
          <input name='privateKey' type="text" className="form-control" value={login.privateKey} placeholder="Digite sua Private Key" onChange={this.handleLoginKey}/>
          <label className="sr-only">public_key</label>
          <input name='publicKey' type="password" className="form-control" value={login.publicKey} placeholder="Digite sua Public Key" onChange={this.handleLoginKey}/>
          {login.status === 401 || login.status === 409 ? (
            <div className="alert alert-danger" role="alert">
              Usuário ou senha inválida
            </div>
          ) : ''}
          {login.status === 200 ? (
           <Redirect to={`/home/${login.ts}/${login.privateKey}/${login.publicKey}`}/>
          ) : ''}
          <button type="submit" value="Submit" className="btn btn-lg btn-primary btn-block" onClick={this.handleLogin}>Acessar</button>
        </form>
      </div>
    )
  }
}

Login.propTypes = {
  actions: PropTypes.object.isRequired,
  login: PropTypes.object.isRequired,

};

function mapStateToProps(state) {
  return {
      login: state.login,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({...loginAction}, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
