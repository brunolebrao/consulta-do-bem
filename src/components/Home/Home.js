import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {PropTypes} from 'prop-types'
import md5 from 'md5'
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
/* ACTIONS */
import * as homeAction from './homeAction'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      caracters: {},
      error: {}
    }
  
  }

  componentDidMount() {
    const {match} = this.props
    const hash = md5(match.params.ts + match.params.pv + match.params.pb)
    this.props.actions.getCharacters(match.params.ts, match.params.pb, hash)
  }

  render() {
    const {home} = this.props
    
    const handleRowName = (cell, row) => {
      const {match} = this.props
      return <Link to={`/detail/${row.id}/${match.params.ts}/${match.params.pb}`}>{cell}</Link>
    }
    const handleRowModified = (cell, row) => {
      let date = new Date(cell)
      let day = date.getDate() >= 1 && date.getDate() <= 9 ? `0${date.getDate() + 1}` : date.getDate() + 1
      let monthBr = date.getMonth() + 1
      let month = monthBr >= 1 && monthBr <= 9 ? `0${monthBr}` : monthBr
      let year=date.getFullYear();
      const currentDay = `${day}/${month}/${year}`
      return <span>{currentDay}</span>
    }

    const options = {
      hideSizePerPage:true,
      noDataText: <span>Não contem dados</span>
    };

    return (
      <div className='container'>
      {home.isFetching ? <h3>Carregando...</h3> : 
      <div>
        <h2>Bem Vindo(a) a lista de Heroes</h2>
        <BootstrapTable
          data={ home.characters }
          pagination
          options={ options }>
          <TableHeaderColumn headerAlign='center' width='20%' dataField='name' dataFormat={handleRowName} isKey>Nome</TableHeaderColumn>
          <TableHeaderColumn headerAlign='center' width='60%' dataField='description'>Descrição</TableHeaderColumn>
          <TableHeaderColumn headerAlign='center' dataAlign='center' width='20%' dataField='modified' dataFormat={handleRowModified}>Última Atualização</TableHeaderColumn>
        </BootstrapTable>
      </div>
      }
      </div>
    );
  }
}

Home.propTypes = {
  actions: PropTypes.object.isRequired,
  home: PropTypes.object.isRequired,

};

function mapStateToProps(state) {
  return {
      home: state.home,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({...homeAction}, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)