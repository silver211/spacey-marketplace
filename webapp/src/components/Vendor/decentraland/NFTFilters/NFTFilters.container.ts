import { connect } from 'react-redux'

import { RootState } from '../../../../modules/reducer'
import { getCount } from '../../../../modules/ui/nft/browse/selectors'
import { getCount as getAssetCount } from '../../../../modules/ui/asset/browse/selectors'
import { getCount as getOwnerAssetCount } from '../../../../modules/ui/ownerasset/browse/selectors'
import {
  getSection,
  getSortBy,
  getOnlyOnSale,
  getIsMap,
  getWearableRarities,
  getWearableGenders,
  getSearch,
  getContracts
} from '../../../../modules/routing/selectors'
import { MapStateProps } from './NFTFilters.types'
import NFTFilters from './NFTFilters'

const mapState = (state: RootState): MapStateProps => {
  let count = 0
  let nftCount = getCount(state)
  if (nftCount) {
    count += nftCount
  }
  let assetCount = getAssetCount(state)
  if (assetCount) {
    count += assetCount
  }
  let ownerassetCount = getOwnerAssetCount(state)
  if (ownerassetCount) {
    count += ownerassetCount
  }
  return ({
    count: count,
    section: getSection(state),
    sortBy: getSortBy(state),
    search: getSearch(state),
    onlyOnSale: getOnlyOnSale(state),
    isMap: getIsMap(state),
    // isMap: false,
    wearableRarities: getWearableRarities(state),
    wearableGenders: getWearableGenders(state),
    contracts: getContracts(state)
  })
}

const mapDispatch = () => ({})

export default connect(mapState, mapDispatch)(NFTFilters)
