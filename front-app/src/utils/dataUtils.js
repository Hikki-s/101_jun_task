export const getUniqueRegionNames = (streets) => {
    return [...new Set(streets.map((street) => {
        return street.region.name
    }))]
}

export const findRegionById = (streets, streetName) => {
    return streets.find(street => street.region.name === streetName)
}

export const findStreetById = (streetName, streets) => {
    return streets
        .find(street => street.name === streetName)?.id
}

export const filterDistrictsByRegionId = (district, streetId) => {
    return district
        .filter(district => district.regionId === streetId)
        .map(district => district.name)
}

export const filterStreetsByDistrict = (streets, districtName) => {
    return streets
        .filter(street => street.district.name === districtName)
        .map(street => street.name);
}

export const filterP2HByStreetId = (p2h, streetId) => {
    return [...new Set(p2h
        .filter(p => +p.streetId === streetId)
        .map(p=> p.providerId))]
}

export const filterProvidersByIds = (providers, providerId) => {
    return providerId.map((id) => {
        return providers.find((provider) => provider.id === +id);
    });
}