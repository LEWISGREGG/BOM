import React, {useState} from 'react';
import SignOut from "../components/SignOut";
import { formatRelative } from "date-fns";
import { GoogleMap, useLoadScript, Marker, InfoWindow } from "@react-google-maps/api";
import usePlacesAutocomplete, { getGeocode, getLatLng} from "use-places-autocomplete";
import mapStyles from "../components/mapStyles";

function Hoa() {

  const libraries = ["places"];
  const mapContainerStyle = {
    height: "70vh",
    width: "70vw",
  };
  const options = {
    styles: mapStyles,
    disableDefaultUI: true,
    zoomControl: true,
  };
  const center = {
    lat: 27.959791,
    lng: -82.431820,
  };

  const currentYear = new Date().getFullYear();

  const [pole, setPole] = useState();
  const [catv, setCatv] = useState(0);
  const [catvInch, setCatvInch] = useState(0);
  const [lumen, setLumen] = useState(0);
  const [lumenInch, setLumenInch] = useState(0);


  const [difference, setDifference] = useState();
  const [differenceInch, setDifferenceInch] = useState();
  const [make, setMake] = useState();
  const [makeInch, setMakeInch] = useState();

  const [power, setPower] = useState(0);
  const [powerInch, setPowerInch] = useState(0);
  const [attchOne, setAttchOne] = useState(0);
  const [attchOneInch, setAttchOneInch] = useState(0);
  const [attchTwo, setAttchTwo] = useState(0);
  const [attchTwoInch, setAttchTwoInch] = useState(0);
  const [attchThree, setAttchThree] = useState(0);
  const [attchThreeInch, setAttchThreeInch] = useState(0);


  const [polea, setPolea] = useState();
  const [catva, setCatva] = useState(0);
  const [catvIncha, setCatvIncha] = useState(0);
  const [lumena, setLumena] = useState(0);
  const [lumenIncha, setLumenIncha] = useState(0);

  const [differencea, setDifferencea] = useState();
  const [differenceIncha, setDifferenceIncha] = useState();
  const [makea, setMakea] = useState();
  const [makeIncha, setMakeIncha] = useState();

  const [powera, setPowera] = useState(0);
  const [powerIncha, setPowerIncha] = useState(0);
  const [attchOnea, setAttchOnea] = useState(0);
  const [attchOneIncha, setAttchOneIncha] = useState(0);
  const [attchTwoa, setAttchTwoa] = useState(0);
  const [attchTwoIncha, setAttchTwoIncha] = useState(0);
  const [attchThreea, setAttchThreea] = useState(0);
  const [attchThreeIncha, setAttchThreeIncha] = useState(0);


  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  });
  const [markers, setMarkers] = React.useState([]);
  const [selected, setSelected] = React.useState(null);

  const onMapClick = React.useCallback((e) => {
    setMarkers((current) => [
      ...current,
      {
        lat: e.latLng.lat(),
        lng: e.latLng.lng(),
        time: new Date(),
      },
    ]);
  }, []);

  const mapRef = React.useRef();
  const onMapLoad = React.useCallback((map) => {
    mapRef.current = map;
  }, []);

  const panTo = React.useCallback(({ lat, lng }) => {
    mapRef.current.panTo({ lat, lng });
    mapRef.current.setZoom(14);
  }, []);

  if (loadError) return "Error";
  if (!isLoaded) return "Loading...";


  function deleteDoc(){
    if (
        window.confirm("RAILROAD CROSSING REQUIRES 24' CLARENCE")
    ) {
    }
}

function deleteDoca(){
  if (
      window.confirm("CITY STREET CROSSING REQUIRES 18' CLARENCE")
  ) {
  }
}
function deleteDocb(){
  if (
      window.confirm("DRIWEWAY CROSSING REQUIRES 16' CLARENCE")
  ) {
  }
}


  return (
<div className="bg-yellow-50"> 
<SignOut/>
<div className="py-5 max-w-8xl mx-auto px-8 sm:px-16"> 

<h2 className="text-center font-bold text-2xl mb-2">
            Pole Attachement Calculator </h2>

<div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 p-3 -ml-2">

            <button className="bg-transparent hover:bg-blue-500 m-2 text-blue-700 font-semibold hover:text-white py-1 px-2 border border-blue-500 hover:border-transparent rounded"
              onClick={() => deleteDoc()}>Note regarding crossing a railroad </button>

            <button className="bg-transparent hover:bg-red-500 m-2 text-red-700 font-semibold hover:text-white py-1 px-2 border border-blue-500 hover:border-transparent rounded"
              onClick={() => deleteDoca()}>Note regarding crossing a city street</button>

              <button className="bg-transparent hover:bg-green-500 m-2 text-green-700 font-semibold hover:text-white py-1 px-2 border border-blue-500 hover:border-transparent rounded"
              onClick={() => deleteDocb()}>Note regarding crossing a driveway</button>

              <button className="bg-transparent hover:bg-yellow-500 m-2 text-yellow-700 font-semibold hover:text-white py-1 px-2 border border-blue-500 hover:border-transparent rounded"
              onClick={() => {window.print();return false}}>Generate pdf</button>

</div>
<div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 p-3 -ml-2">

<div className="space-y-4 text-xs">

<input className="placeholder-blue-900 p-2 m-1 rounded-lg italic  
                    border-2 border-gray-800 bg-yellow-50 text-lg" type="text" id="pole" 
                    placeholder="Pole #: ET8748" required 
                    value={pole} onChange={evt => setPole(evt.currentTarget.value)} />

<p className="font-bold text-sm">· LOWEST POWER (ft&apos; in&apos;&apos;) :  
<input type="number" placeholder="foot" className="bg-white-50 w-20 border-gray-50 rounded focus:outline-none flex-1 disabled:cursor-not-allowed 
 disabled:text-gray-100 mr-1 py-1 px-1 leading-tight" 
 value={power} onChange={evt => setPower(evt.currentTarget.value)} />
 <input type="number" placeholder="inch" className="bg-white-50 w-20 border-gray-50 rounded focus:outline-none flex-1 disabled:cursor-not-allowed 
 disabled:text-gray-100 mr-1 py-1 px-1 leading-tight"
 value={powerInch} onChange={evt => setPowerInch(evt.currentTarget.value)} />
 </p>

<p className="font-bold text-sm">· Attachment One (ft&apos; in&apos;&apos;) :  
<input type="number" placeholder="foot" className="bg-white-50 w-20 border-gray-50 rounded focus:outline-none flex-1 disabled:cursor-not-allowed disabled:text-gray-100 mr-1 py-1 px-1 leading-tight"
 value={attchOne} onChange={evt => setAttchOne(evt.currentTarget.value)} /> 
<input type="number" placeholder="inch" className="bg-white-50 w-20 border-gray-50 rounded focus:outline-none flex-1 disabled:cursor-not-allowed disabled:text-gray-100 mr-1 py-1 px-1 leading-tight"
 value={attchOneInch} onChange={evt => setAttchOneInch(evt.currentTarget.value)} /></p>

<p className="font-bold text-sm">· Attachment Two (ft&apos; in&apos;&apos;) :  
<input type="number" placeholder="foot" className="bg-white-50 w-20 border-gray-50 rounded focus:outline-none flex-1 disabled:cursor-not-allowed disabled:text-gray-100 mr-1 py-1 px-1 leading-tight"
 value={attchTwo} onChange={evt => setAttchTwo(evt.currentTarget.value)} /> 
<input type="number" placeholder="inch" className="bg-white-50 w-20 border-gray-50 rounded focus:outline-none flex-1 disabled:cursor-not-allowed disabled:text-gray-100 mr-1 py-1 px-1 leading-tight"
 value={attchTwoInch} onChange={evt => setAttchTwoInch(evt.currentTarget.value)} /></p>

<p className="font-bold text-sm">· Attachment Three (ft&apos; in&apos;&apos;) :  
<input type="number" placeholder="foot" className="bg-white-50 w-20 border-gray-50 rounded focus:outline-none flex-1 disabled:cursor-not-allowed disabled:text-gray-100 mr-1 py-1 px-1 leading-tight"
 value={attchThree} onChange={evt => setAttchThree(evt.currentTarget.value)} /> 
<input type="number" placeholder="inch" className="bg-white-50 w-20 border-gray-50 rounded focus:outline-none flex-1 disabled:cursor-not-allowed disabled:text-gray-100 mr-1 py-1 px-1 leading-tight"
 value={attchThreeInch} onChange={evt => setAttchThreeInch(evt.currentTarget.value)} /></p>


<p className="font-bold text-sm">· CATV (ft&apos; in&apos;&apos;) :  
<input type="number" placeholder="foot" className="bg-white-50 w-20 border-gray-50 rounded focus:outline-none flex-1 disabled:cursor-not-allowed 
 disabled:text-gray-100 mr-1 py-1 px-1 leading-tight"
 value={catv} onChange={evt => setCatv(evt.currentTarget.value)} />
 <input type="number" placeholder="inch" className="bg-white-50 w-20 border-gray-50 rounded focus:outline-none flex-1 disabled:cursor-not-allowed 
 disabled:text-gray-100 mr-1 py-1 px-1 leading-tight"
 value={catvInch} onChange={evt => setCatvInch(evt.currentTarget.value)} /></p>

<button className='relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0' type="button" 
                    onClick={() => {

                    setMake(Math.floor(((parseFloat(power*12) + parseFloat(powerInch)) - parseFloat(40))/12))
                    setMakeInch((((((parseFloat(power*12) + parseFloat(powerInch)) - parseFloat(40))/12) - (Math.floor(((parseFloat(power*12) + parseFloat(powerInch)) - parseFloat(40))/12)))*12).toFixed())

                    setDifference(parseFloat(make) - parseFloat(1))
                    setDifferenceInch(makeInch)

                    setLumen(parseFloat(catv) + parseFloat(1))
                    setLumenInch(catvInch)
                    }}>SET POA {pole}</button>
                      
<p className="font-bold text-sm" >· HIGHEST LUMEN HOA BELOW POWER  : {make}&apos; {makeInch}&apos;&apos;</p>
<p className="font-bold text-sm" >· HIGHEST CATV HOA : {difference}&apos; {differenceInch}&apos;</p>  
<p className="font-bold text-sm  pb-4" >· LOWEST LUMEN HOA ABOVE CATV  : {lumen}&apos; {lumenInch}&apos;&apos;</p>
</div>

<div className="space-y-4 text-xs">
<input className="placeholder-blue-900 p-2 m-1 rounded-lg italic  
                    border-2 border-gray-800 bg-yellow-50 text-lg" type="text" id="pole" 
                    placeholder="Pole #: IP23987" required 
                    value={polea} onChange={evt => setPolea(evt.currentTarget.value)} />

<p className="font-bold text-sm">· LOWEST POWER (ft&apos; in&apos;&apos;) :  
<input type="number" placeholder="foot" className="bg-white-50 w-20 border-gray-50 rounded focus:outline-none flex-1 disabled:cursor-not-allowed 
 disabled:text-gray-100 mr-1 py-1 px-1 leading-tight" 
 value={powera} onChange={evt => setPowera(evt.currentTarget.value)} />
 <input type="number" placeholder="inch" className="bg-white-50 w-20 border-gray-50 rounded focus:outline-none flex-1 disabled:cursor-not-allowed 
 disabled:text-gray-100 mr-1 py-1 px-1 leading-tight"
 value={powerIncha} onChange={evt => setPowerIncha(evt.currentTarget.value)} />
 </p>

<p className="font-bold text-sm">· Attachment One (ft&apos; in&apos;&apos;) :  
<input type="number" placeholder="foot" className="bg-white-50 w-20 border-gray-50 rounded focus:outline-none flex-1 disabled:cursor-not-allowed disabled:text-gray-100 mr-1 py-1 px-1 leading-tight"
 value={attchOnea} onChange={evt => setAttchOnea(evt.currentTarget.value)} /> 
<input type="number" placeholder="inch" className="bg-white-50 w-20 border-gray-50 rounded focus:outline-none flex-1 disabled:cursor-not-allowed disabled:text-gray-100 mr-1 py-1 px-1 leading-tight"
 value={attchOneIncha} onChange={evt => setAttchOneIncha(evt.currentTarget.value)} /></p>

<p className="font-bold text-sm">· Attachment Two (ft&apos; in&apos;&apos;) :  
<input type="number" placeholder="foot" className="bg-white-50 w-20 border-gray-50 rounded focus:outline-none flex-1 disabled:cursor-not-allowed disabled:text-gray-100 mr-1 py-1 px-1 leading-tight"
 value={attchTwoa} onChange={evt => setAttchTwoa(evt.currentTarget.value)} /> 
<input type="number" placeholder="inch" className="bg-white-50 w-20 border-gray-50 rounded focus:outline-none flex-1 disabled:cursor-not-allowed disabled:text-gray-100 mr-1 py-1 px-1 leading-tight"
 value={attchTwoIncha} onChange={evt => setAttchTwoIncha(evt.currentTarget.value)} /></p>

<p className="font-bold text-sm">· Attachment Three (ft&apos; in&apos;&apos;) :  
<input type="number" placeholder="foot" className="bg-white-50 w-20 border-gray-50 rounded focus:outline-none flex-1 disabled:cursor-not-allowed disabled:text-gray-100 mr-1 py-1 px-1 leading-tight"
 value={attchThreea} onChange={evt => setAttchThreea(evt.currentTarget.value)} /> 
<input type="number" placeholder="inch" className="bg-white-50 w-20 border-gray-50 rounded focus:outline-none flex-1 disabled:cursor-not-allowed disabled:text-gray-100 mr-1 py-1 px-1 leading-tight"
 value={attchThreeIncha} onChange={evt => setAttchThreeIncha(evt.currentTarget.value)} /></p>


<p className="font-bold text-sm">· CATV (ft&apos; in&apos;&apos;) :  
<input type="number" placeholder="foot" className="bg-white-50 w-20 border-gray-50 rounded focus:outline-none flex-1 disabled:cursor-not-allowed 
 disabled:text-gray-100 mr-1 py-1 px-1 leading-tight"
 value={catva} onChange={evt => setCatva(evt.currentTarget.value)} />
 <input type="number" placeholder="inch" className="bg-white-50 w-20 border-gray-50 rounded focus:outline-none flex-1 disabled:cursor-not-allowed 
 disabled:text-gray-100 mr-1 py-1 px-1 leading-tight"
 value={catvIncha} onChange={evt => setCatvIncha(evt.currentTarget.value)} /></p>

<button className='relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0' type="button" 
                    onClick={() => {

                    setMakea(Math.floor(((parseFloat(powera*12) + parseFloat(powerIncha)) - parseFloat(40))/12))
                    setMakeIncha((((((parseFloat(powera*12) + parseFloat(powerIncha)) - parseFloat(40))/12) - (Math.floor(((parseFloat(powera*12) + parseFloat(powerIncha)) - parseFloat(40))/12)))*12).toFixed())

                    setDifferencea(parseFloat(makea) - parseFloat(1))
                    setDifferenceIncha(makeIncha)

                    setLumena(parseFloat(catva) + parseFloat(1))
                    setLumenIncha(catvIncha)
                    }}>SET POA {polea}</button>
                      
<p className="font-bold text-sm" >· HIGHEST LUMEN HOA BELOW POWER  : {makea}&apos; {makeIncha}&apos;&apos;</p>
<p className="font-bold text-sm" >· HIGHEST CATV HOA : {differencea}&apos; {differenceIncha}&apos;</p>  
<p className="font-bold text-sm  pb-4" >· LOWEST LUMEN HOA ABOVE CATV  : {lumena}&apos; {lumenIncha}&apos;&apos;</p>
</div>
</div>
</div>

<div className="flex justify-center items-center ">

<div className=' mr-3 mb-3 border-l-[20px] border-r-[20px]  border-red-900 rounded-md cursor-pointer w-5/12' >
<div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 ">

<h1 className='font-bold text-xs sm:text-md md:text-lg lg:text-xl xl:text-xl p-1 mb-1' >POLE # : {pole}</h1>
<h1 className='font-bold text-xs sm:text-md md:text-lg lg:text-xl xl:text-xl p-1 mb-1' >POLE # : {polea}</h1>

<h1 className='font-bold text-xs sm:text-md md:text-lg lg:text-xl xl:text-xl p-1 mb-1 border-b-[7px] border-blue-900 text-green-500' >POWER HOA : {power}&apos; {powerInch}&apos;&apos;</h1>
<h1 className='font-bold text-xs sm:text-md md:text-lg lg:text-xl xl:text-xl p-1 mb-1 border-b-[7px] border-blue-900 text-green-500' >POWER HOA : {powera}&apos; {powerIncha}&apos;&apos;</h1>


<h1 className='font-bold text-xs sm:text-md md:text-lg lg:text-xl xl:text-xl p-1 mb-1 border-b-[7px] border-blue-900 text-yellow-500' >Attachment 1 HOA : {attchOne}&apos; {attchOneInch}&apos;&apos;</h1>
<h1 className='font-bold text-xs sm:text-md md:text-lg lg:text-xl xl:text-xl p-1 mb-1 border-b-[7px] border-blue-900 text-yellow-500' >Attachment 1 HOA : {attchOnea}&apos; {attchOneIncha}&apos;&apos;</h1>

<h1 className='font-bold text-xs sm:text-md md:text-lg lg:text-xl xl:text-xl p-1 mb-1 border-b-[7px] border-blue-900 text-blue-500' >Attachment 2 HOA : {attchTwo}&apos; {attchTwoInch}&apos;&apos;</h1>
<h1 className='font-bold text-xs sm:text-md md:text-lg lg:text-xl xl:text-xl p-1 mb-1 border-b-[7px] border-blue-900 text-blue-500' >Attachment 2 HOA : {attchTwoa}&apos; {attchTwoIncha}&apos;&apos;</h1>

<h1 className='font-bold text-xs sm:text-md md:text-lg lg:text-xl xl:text-xl p-1 mb-1 border-b-[7px] border-blue-900 text-red-500' >Attachment 3 HOA : {attchThree}&apos; {attchThreeInch}&apos;&apos;</h1>
<h1 className='font-bold text-xs sm:text-md md:text-lg lg:text-xl xl:text-xl p-1 mb-1 border-b-[7px] border-blue-900 text-red-500' >Attachment 3 HOA : {attchThreea}&apos; {attchThreeIncha}&apos;&apos;</h1>

<h1 className='font-bold text-xs sm:text-md md:text-lg lg:text-xl xl:text-xl p-1 mb-1 border-b-[7px] border-blue-900 text-purple-500' >LUMEN HOA : {lumen}&apos; {lumenInch}&apos;&apos;</h1>
<h1 className='font-bold text-xs sm:text-md md:text-lg lg:text-xl xl:text-xl p-1 mb-1 border-b-[7px] border-blue-900 text-purple-500' >LUMEN HOA : {lumena}&apos; {lumenIncha}&apos;&apos;</h1>

<h1 className='font-bold text-xs sm:text-md md:text-lg lg:text-xl xl:text-xl p-1 mb-1 border-b-[7px] border-blue-900 text-pink-500' >CATV HOA : {catv}&apos; {catvInch}&apos;&apos;</h1>
<h1 className='font-bold text-xs sm:text-md md:text-lg lg:text-xl xl:text-xl p-1 mb-1 border-b-[7px] border-blue-900 text-pink-500' >CATV HOA : {catva}&apos; {catvIncha}&apos;&apos;</h1>

</div>
        <h1 className='p-20'></h1>
        <div className="flex flex-row gap-2 p-2 pt-2">
        </div> 
        <div className='mb-3 border-4 border-green-900 rounded-sm border-dashed' ></div>
</div>
</div>

<div className="flex justify-center items-center max-w-8xl rounded-lg text-black-600">

<h1 className='font-bold  text-lg p-1 mb-1 '>Telco Poles{" "} </h1>
<form>   
    <label for="search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div class="relative">
        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg class="w-4 h-4 ml-2 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input type="search"  id="search" class="block w-full p-4 ps-10 text-sm pl-6 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600
          dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required />
    </div>
</form>
      <Locate panTo={panTo} />
      <Search panTo={panTo} />
      </div>
      <div className="flex justify-center items-center max-w-8xl rounded-lg py-6 text-black-600">
      <GoogleMap
        id="map"
        mapContainerStyle={mapContainerStyle}
        zoom={20}
        center={center}
        options={options}
        onClick={onMapClick}
        onLoad={onMapLoad}
      >
        {markers.map((marker) => (
          <Marker
            key={`${marker.lat}-${marker.lng}`}
            position={{ lat: marker.lat, lng: marker.lng }}
            onClick={() => {
              setSelected(marker);
            }}
            icon={{
              url: `https://www.svgrepo.com/show/436584/utility-pole-right.svg`,
              origin: new window.google.maps.Point(0, 0),
              anchor: new window.google.maps.Point(15, 15),
              scaledSize: new window.google.maps.Size(60, 60),
            }}
          />
        ))}

        {selected ? (
          <InfoWindow
            position={{ lat: selected.lat, lng: selected.lng }}
            onCloseClick={() => {
              setSelected(null);
            }}
          >
            <div>
              <h2>
                <span role="img" aria-label="pole">
                🚩
                </span>{" "}
                City Pole
              </h2>
              <p>Inspected {formatRelative(selected.time, new Date())}</p>
            </div>
          </InfoWindow>
        ) : null}
      </GoogleMap>
    </div>

<section className="flex justify-center items-center max-w-8xl rounded-lg text-black-600">
    <div className="font-bold">&copy; {currentYear} OSP TELCO ALL RIGHTS RESERVED</div>
</section>
</div>
  );
}




function Locate({ panTo }) {
  return (
    <button
      className="locate"
      onClick={() => {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            panTo({
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            });
          },
          () => null
        );
      }}
    >
      <img src="https://www.svgrepo.com/show/436584/utility-pole-right.svg" className="h-20 w-20" alt="image" />
    </button>
  );
}


function Search({ panTo }) {
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      location: { lat: () => 27.959791, lng: () => -82.431820 },
      radius: 100 * 1000,
    },
  });

  const handleInput = (e) => {
    setValue(e.target.value);
  };

  const handleSelect = async (address) => {
    setValue(address, false);
    clearSuggestions();

    try {
      const results = await getGeocode({ address });
      const { lat, lng } = await getLatLng(results[0]);
      panTo({ lat, lng });
    } catch (error) {
      console.log("😱 Error: ", error);
    }
  };
}

export default Hoa;


