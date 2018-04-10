import { KitchenDto, MicrowaveDto, FridgeDto } from '../dtos'

it('should contain a Microwave and a Fridge', () => {
    const expectedMicrowave = new MicrowaveDto(false)
    const expectedFridge = new FridgeDto(false)
    const kitchenInstance = new KitchenDto(expectedMicrowave, expectedFridge)
    expect(kitchenInstance).toBeDefined()
    expect(kitchenInstance.microwave).toEqual(expectedMicrowave)
    expect(kitchenInstance.fridge).toEqual(expectedFridge)
    expect(kitchenInstance.microwave.switchPower()).toBeTruthy()
    expect(kitchenInstance.fridge.switchPower()).toBeTruthy()    
})

it('should switchPower', () => {
    const targetMicrowave = new MicrowaveDto(false)
    expect(targetMicrowave.switchPower()).toBeTruthy()
})

it('should open the door', () => {
    const targetMicrowave = new MicrowaveDto(false)
    expect(targetMicrowave.cook()).toEqual('DING.. Food is done')
})