import { NFT } from '../../../modules/nft/types'
import { Wallet } from 'decentraland-dapps/dist/modules/wallet/types'
import { Order } from '../../../modules/order/types'
import { Authorizations } from '../../../modules/authorization/types'
import { executeOrderRequest } from '../../../modules/order/actions'

export type Props = {
  wallet: Wallet
  nft: NFT
  order: Order | null
  authorizations: Authorizations
  isLoading: boolean
  onNavigate: (path: string) => void
  onExecuteOrder: typeof executeOrderRequest
  isOwner?: boolean
  notEnoughMana?: boolean
}
