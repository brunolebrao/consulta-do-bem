import React, {Component} from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {PropTypes} from 'prop-types'
import md5 from 'md5'
import { Link } from 'react-router-dom'
import Fascicles from './widgets/Fascicles'
/* ACTIONS */
import * as detailAction from './detailAction'

class Detail extends Component {
    componentDidMount() {
        const {match} = this.props
        const pv = 'c7211b772d95c9f305f27605dac085ac50b95e2d'
        let hash = md5(match.params.ts + pv + match.params.pb)

        this.props.actions.getCharactersId(match.params.id, match.params.ts, match.params.pb, hash)
        this.props.actions.getComics(match.params.id, match.params.ts, match.params.pb, hash)
        
      }

      

    render() {
        const {match, detail} = this.props
        const pv = 'c7211b772d95c9f305f27605dac085ac50b95e2d';
        return (
            <div className='container'>
            {detail.isFetchingCharacters ? <h4>Carregando...</h4> : 
                <div className="media">
                    <div className='detail-box-container'>
                        <div className='detail-box-img-container'>
                        {detail.characters.map(item => {
                            return <img key={1} src={`${item.thumbnail.path}.${item.thumbnail.extension}`} alt="teste"/>
                            })}
                        </div>
                    </div>
                    <div className="media-body">
                    <h5 className="mt-0">
                        {detail.characters.map(item => item.name)}
                    </h5>
                    {detail.characters.map(item => {
                        if(item.description.length <= 0){
                            return <p key={3}>Não há descrição</p>
                        }else {
                            return <div key={3}><h5>Descrição:</h5><p>{item.description}</p></div>
                        }
                        
                    })}
                    </div>
                </div>
            }
                <div className='detail-button'>
                    <Link className="btn btn-lg btn-primary" to={`/home/${match.params.ts}/${pv}/${match.params.pb}`} >Voltar</Link>
                </div>
                <div>
                    <h4 className='fascicles-title-container'>Fascículos</h4>
                    <hr/>
                    {detail.isFetchingComics ? <h3>Carregando...</h3> : detail.comics.map((item) => {
                        if(item.images.length > 0){
                            return <Fascicles key={item.id} comics={item}/>
                        }else {
                            return false
                        }
                    })
                }
                </div>
            </div>
        );
    }
}

Detail.propTypes = {
    actions: PropTypes.object.isRequired,
    detail: PropTypes.object.isRequired,
  
  };
  
  function mapStateToProps(state) {
    return {
        detail: state.detail,
    };
  }
  
  function mapDispatchToProps(dispatch) {
    return {
      actions: bindActionCreators({...detailAction}, dispatch)
    };
  }
  
export default connect(mapStateToProps, mapDispatchToProps)(Detail)