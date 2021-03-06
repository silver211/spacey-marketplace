// import { NFTCategory } from '../nft/types'
// import { getSearchCategory, getSearchWearableCategory } from '../routing/search'
import { SearchOptions } from '../routing/types'
import { Section, View } from './routing/types'
import { NFTsFetchFilters } from './nft/types'
import { Vendors, Disabled } from './types'

export function getFilters(
  vendor: Vendors,
  searchOptions: SearchOptions
): NFTsFetchFilters {
  const { section, view } = searchOptions

  switch (vendor) {
    case Vendors.DECENTRALAND: {
      const currentSection = Section[Vendors.DECENTRALAND]
      const currentView = View[Vendors.DECENTRALAND]

      const isLand = section === currentSection.LAND
      const isOffical = (view === currentView.OFFICAL || view === currentView.OFFICAL_LOAD_MORE)
      // const isWearableHead = section === currentSection.WEARABLES_HEAD
      // const isWearableAccessory =
      //   section === currentSection.WEARABLES_ACCESORIES

      // const category = getSearchCategory(section!)
      // const wearableCategory =
      //   !isWearableAccessory && category === NFTCategory.WEARABLE
      //     ? getSearchWearableCategory(section!)
      //     : undefined

      const { wearableRarities, wearableGenders, contracts } = searchOptions

      return {
        isLand,
        isOffical,
        // isWearableHead,
        // isWearableAccessory,
        // wearableCategory,
        wearableRarities,
        wearableGenders,
        contracts
      } as NFTsFetchFilters<Vendors.DECENTRALAND>
    }

    default:
      return {}
  }
}

export function getOriginURL(vendor: Vendors) {
  switch (vendor) {
    case Vendors.DECENTRALAND:
      return 'https://market.decentraland.org'

    default:
      throw new Error(`Base URL for ${vendor} not implemented`)
  }
}

export function isVendor(vendor: string) {
  return Object.values(Vendors).includes(vendor as Vendors)
}

export function isPartner(vendor: string) {
  return isVendor(vendor) && vendor !== Vendors.DECENTRALAND
}

export function getPartners(): Vendors[] {
  const disabledVendors = Object.values(Disabled)

  return Object.values(Vendors).filter(
    vendor => isPartner(vendor) && !disabledVendors.includes(vendor)
  )
}
