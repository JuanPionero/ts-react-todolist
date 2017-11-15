import { connect, Dispatch } from 'react-redux'
import { setVisibilityFilter } from '../actions/actions'
import Link from '../components/Link'

interface IOwnProps {
    filter:string
}

interface IDispatchProps {

}

const mapStateToProps = (state:{visibilityFilter:string}, ownProps:IOwnProps) => {
  return {
    active: ownProps.filter === state.visibilityFilter
  }
}

const mapDispatchToProps = (dispatch:Dispatch<{onClick:Function}>, ownProps:IOwnProps) => {
  return {
    onClick: () => {
      dispatch(setVisibilityFilter(ownProps.filter))
    }
  }
}

const FilterLink = connect<{active:boolean},{onClick:Function},IOwnProps>(
  mapStateToProps,
  mapDispatchToProps
)(Link)

export default FilterLink