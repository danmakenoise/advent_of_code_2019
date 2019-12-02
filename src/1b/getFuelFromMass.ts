export default function getFuelFromMass(mass: number) {
  const fuelRequired = Math.floor(mass / 3) - 2;

  if (fuelRequired < 0) {
    return 0;
  }

  return fuelRequired + getFuelFromMass(fuelRequired);
}

export function getFuelFromMasses(...masses: number[]) {
  return masses.reduce((sum, mass) => {
    return sum + getFuelFromMass(mass);
  }, 0);
}
