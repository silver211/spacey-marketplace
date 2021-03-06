import React from 'react'
import { Stats, Mana } from 'decentraland-ui'
import { t } from 'decentraland-dapps/dist/modules/translation/utils'

import { formatMANA } from '../../../lib/mana'
import { Props } from './OrderDetails.types'

const OrderDetails = (props: Props) => {
  const { asset } = props
  return (
    <>
      {asset.Price ?
        <Stats title={t('nft_page.price')}>
          <Mana >{formatMANA(asset.Price)}</Mana>
        </Stats> : null
      }


    </>
  )
}

export default React.memo(OrderDetails)
