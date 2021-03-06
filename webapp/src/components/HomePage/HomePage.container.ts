import { connect } from 'react-redux'
import { push } from 'connected-react-router'
import { RootState } from '../../modules/reducer'
import { fetchNFTsFromRoute, fetchAssetsFromRoute } from '../../modules/routing/actions'
import {
  getHomepage,
  getHomepageLoading
} from '../../modules/ui/nft/homepage/selectors'
import {
  getHomepage as getHomepageAsset,
  getHomepageLoading as getHomepageAssetLoading
} from '../../modules/ui/asset/homepage/selectors'
import { MapStateProps, MapDispatchProps, MapDispatch } from './HomePage.types'
import HomePage from './HomePage'

const mapState = (state: RootState): MapStateProps => {

  return {
    homepagenft: getHomepage(state),
    homepageLoadingnft: getHomepageLoading(state),
    homepageAsset: getHomepageAsset(state),
    homepageLoadingAsset: getHomepageAssetLoading(state)
  }
}

const mapDispatch = (dispatch: MapDispatch): MapDispatchProps => ({
  onNavigate: path => dispatch(push(path)),
  onFetchNFTsFromRoute: options => dispatch(fetchNFTsFromRoute(options)),
  onFetchAssetsFromRoute: options => dispatch(fetchAssetsFromRoute(options))
})

export default connect(mapState, mapDispatch)(HomePage)
