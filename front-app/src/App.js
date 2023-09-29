import { useDispatch, useSelector } from "react-redux";
import { useEffect, useMemo, useState } from "react";
import { fetchDistricts, fetchP2H, fetchProviders, fetchStreets } from "./redux/actions/dataActions";

import {
    getUniqueRegionNames,
    findStreetById,
    findRegionById,
    filterDistrictsByRegionId,
    filterProvidersByIds,
    filterStreetsByDistrict,
    filterP2HByStreetId
} from "./utils/dataUtils";

import ProviderTable from "./components/ProviderTable";
import {Box} from "@mui/material/";
import MySelect from "./components/MySelect";

function App() {
    const dispatch = useDispatch();

    const {streets} = useSelector(state => state.streets);
    const {p2h} = useSelector(state => state.p2h);
    const {providers} = useSelector(state => state.providers);
    const {districts} = useSelector(state => state.districts);

    const [selectedRegion, setSelectedRegion] = useState("");
    const [selectedDistrict, setSelectedDistrict] = useState("");
    const [selectedStreet, setSelectedStreet] = useState("");


    const regions = useMemo(() => getUniqueRegionNames(streets), [streets]);
    const filteredDistrictsNames = useMemo(() => filterDistrictsByRegionId(districts, findRegionById(streets, selectedRegion)?.region.id), [districts, streets, selectedRegion]);
    const filteredStreetsNames = useMemo(() => filterStreetsByDistrict(streets, selectedDistrict), [streets, selectedDistrict]);
    const filteredP2HId = useMemo(() => filterP2HByStreetId(p2h, findStreetById(selectedStreet, streets)), [p2h, selectedStreet, streets]);
    const filteredProviders = useMemo(() => filterProvidersByIds(providers, filteredP2HId), [providers, filteredP2HId]);


    useEffect(() => {
        dispatch(fetchStreets());
        dispatch(fetchP2H());
        dispatch(fetchDistricts());
        dispatch(fetchProviders());
    }, [])

    return (
        <div className="App">
            <Box p={3} display={'flex'} flexDirection={'row'} justifyContent={'space-between'}>
                <MySelect setSelected={setSelectedRegion} selected={selectedRegion} option={regions} labelName="Регион"/>
                <MySelect setSelected={setSelectedDistrict} selected={selectedDistrict} option={filteredDistrictsNames} labelName="Район"/>
                <MySelect setSelected={setSelectedStreet} selected={selectedStreet} option={filteredStreetsNames} labelName="Улица"/>
            </Box>
            <ProviderTable providers={filteredProviders}/>
        </div>
    );
}


export default App;
