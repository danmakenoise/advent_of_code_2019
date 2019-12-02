export default function getFuelFromMass(mass: number) {
  return Math.floor(mass / 3) - 2;
};

export function getFuelFromMasses(...masses: number[]) {
  return masses.reduce((sum, mass) => {
    return sum + getFuelFromMass(mass);
  }, 0);
}
