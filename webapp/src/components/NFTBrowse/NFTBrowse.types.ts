import { Dispatch } from 'redux'

import { View } from '../../modules/ui/types'
import { Vendors } from '../../modules/vendor/types'
import { setView, SetViewAction } from '../../modules/ui/actions'
import {
  browse,
  BrowseAction,
  fetchNFTsFromRoute,
  FetchNFTsFromRouteAction,
  fetchAssetsFromRoute,
  FetchAssetsFromRouteAction,
  fetchOwnerAssetsFromRoute,
  FetchOwnerAssetsFromRouteAction
} from '../../modules/routing/actions'

export type Props = {
  vendor: Vendors
  view: View
  viewInState?: View // This is used to know when the view prop has been set in the app state
  address?: string
  isMap?: boolean
  isFullscreen?: boolean
  isLoading: boolean
  onSetView: typeof setView
  onFetchNFTsFromRoute: typeof fetchNFTsFromRoute
  onFetchAssetsFromRoute: typeof fetchAssetsFromRoute
  onFetchOwnerAssetsFromRoute: typeof fetchOwnerAssetsFromRoute
  onBrowse: typeof browse
  showOnSale?: boolean
}

export type MapStateProps = Pick<
  Props,
  'isMap' | 'isLoading' | 'showOnSale' | 'isFullscreen' | 'viewInState'
>
export type MapDispatchProps = Pick<
  Props,
  'onSetView' | 'onFetchNFTsFromRoute' | 'onBrowse' | 'onFetchAssetsFromRoute' | 'onFetchOwnerAssetsFromRoute'
>
export type MapDispatch = Dispatch<
  SetViewAction | FetchNFTsFromRouteAction | BrowseAction | FetchAssetsFromRouteAction | FetchOwnerAssetsFromRouteAction
>
export type OwnProps = Pick<Props, 'vendor' | 'address'>
