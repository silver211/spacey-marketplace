import React from 'react'

import { isVendor, isPartner } from '../../modules/vendor/utils'
import { Vendors } from '../../modules/vendor/types'
import { View } from '../../modules/ui/types'
import { NavigationTab } from '../Navigation/Navigation.types'
import { Navbar } from '../Navbar'
import { Footer } from '../Footer'
import { Navigation } from '../Navigation'
import { NFTBrowse } from '../NFTBrowse'
import { Props } from './BrowsePage.types'

const CommunityPage = (props: Props) => {
  const { isFullscreen } = props
  const vendor = isVendor(props.vendor) ? props.vendor : Vendors.DECENTRALAND

  const activeTab = isPartner(vendor)
    ? NavigationTab.PARTNER
    : NavigationTab.COMMUNITY

  return (
    <>
      <Navbar isFullscreen />
      <Navigation activeTab={activeTab} isFullscreen={isFullscreen} />
      <NFTBrowse vendor={vendor} view={View.COMMUNITY} />
      <Footer isFullscreen={isFullscreen} />
    </>
  )
}

export default React.memo(CommunityPage)
