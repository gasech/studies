function printCar(car: {
  model: string,
  year: number,
  chargeVoltage?: number
}) {
  console.log(car)
}

printCar({
  model: "Audi A5 QUATTRO",
  year: 2010,
})
