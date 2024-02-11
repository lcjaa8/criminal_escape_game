

export const  BASE_URL = 'http://localhost:5000';

export const getCities = async () => {
  try {
    const response = await fetch(`${BASE_URL}/cities`);
    const cities = await response.json();
    return cities;
  } catch (error) {
    console.error('Error fetching cities:', error);
    throw error;
  }
}



export const getVehicles = async () => {
  try {
    const response = await fetch(`${BASE_URL}/vehicles`);
    const vehicles = await response.json();
    return vehicles;
  } catch (error) {
    console.error('Error fetching vehicles:', error);
    throw error;
  }
};




export const getFugitiveLocation = async () => {
  try {
    const response = await fetch(`${BASE_URL}/fugitive`);
    const fugitiveLocation = await response.json();
    return fugitiveLocation;
  } catch (error) {
    console.error('Error fetching fugitive location:', error);
    throw error;
  }
};
