class ApplianceDto {
    constructor(hasPower) {
        this.hasPower = hasPower
    }

    switchPower(){
        this.hasPower = !this.hasPower
        return this.hasPower
    }
}

class MicrowaveDto extends ApplianceDto {
    constructor(isPowered) {
        super(isPowered)
    }

    cook() {
        return 'DING.. Food is done'
    }
}

class FridgeDto extends ApplianceDto {
    constructor(isPowered){
        super(isPowered)
        this.doorIsOpen = false
    }

    door(){
        this.doorIsOpen = !this.doorIsOpen
        return this.doorIsOpen
    }
}

class KitchenDto {
    constructor(microwave, fridge){
        this.microwave = microwave
        this.fridge = fridge
    }
}

export { KitchenDto, MicrowaveDto, FridgeDto }