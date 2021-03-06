import React from 'react'
import { Page } from 'decentraland-ui'

import { Vendors } from '../../modules/vendor/types'
import { Navbar } from '../Navbar'
import { Footer } from '../Footer'
import { Navigation } from '../Navigation'
import { NFTProviderPage } from '../NFTProviderPage'
import { ParcelDetail } from './ParcelDetail'
import { EstateDetail } from './EstateDetail'
import { WearableDetail } from './WearableDetail'
import { ENSDetail } from './ENSDetail'
import { BoardingpassDetail } from "./BoardingpassDetail"
import { BuildingDetail } from "./BuildingDetail"
import { TowerDetail } from "./TowerDetail"
import { TrapDetail } from "./TrapDetail"


import { LandDetail } from "./LandDetail"
import { PictureFrameDetail } from './PictureFrameDetail'
import './NFTPage.css'

const NFTPage = () => {
  return (
    <>
      <Navbar isFullscreen />
      <Navigation isFullscreen />
      <Page className="NFTPage" isFullscreen>
        <NFTProviderPage>
          {nft => {
            // TODO: Move this to components/vendor
            const { parcel, estate, wearable, ens, boardingpass, land, building, tower, trap } = nft.data as any
            return (
              <>
                {parcel ? <ParcelDetail nft={nft} /> : null}
                {estate ? <EstateDetail nft={nft} /> : null}
                {wearable ? <WearableDetail nft={nft} /> : null}
                {ens ? <ENSDetail nft={nft} /> : null}
                {boardingpass ? <BoardingpassDetail nft={nft} /> : null}
                {land ? <LandDetail nft={nft} /> : null}
                {building ? <BuildingDetail nft={nft} /> : null}
                {tower ? <TowerDetail nft={nft} /> : null}
                {trap ? <TrapDetail nft={nft} /> : null}

                {nft.vendor !== Vendors.DECENTRALAND ? (
                  <PictureFrameDetail nft={nft} />
                ) : null}
              </>
            )
          }}
        </NFTProviderPage>
      </Page>
      <Footer />
    </>
  )
}

export default React.memo(NFTPage)
